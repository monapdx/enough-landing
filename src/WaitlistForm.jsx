import { useEffect, useId, useRef, useState } from 'react'
import { privacyHref } from './siteUrls.js'

const WAITLIST_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzoPZUgnQIKsABIbBOR2wpduNtvrqCX6oMjbYgHuhg13jmU2pOB2QD9NhPhyfov27I/exec'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidEmail(value) {
  return EMAIL_PATTERN.test(value)
}

/**
 * Shared waitlist signup form.
 * @param {{ source: string, variant?: 'full' | 'compact', autoFocusEmail?: boolean, id?: string, className?: string }} props
 */
function WaitlistForm({
  source,
  variant = 'full',
  autoFocusEmail = false,
  id,
  className = '',
}) {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const statusRef = useRef(null)
  const emailRef = useRef(null)
  const emailId = useId()
  const honeypotId = useId()
  const errorId = useId()
  const consentId = useId()
  const microcopyId = useId()
  const isCompact = variant === 'compact'

  useEffect(() => {
    if (autoFocusEmail) {
      emailRef.current?.focus()
    }
  }, [autoFocusEmail])

  async function handleSubmit(event) {
    event.preventDefault()

    if (status === 'submitting') {
      return
    }

    const normalizedEmail = email.trim()

    if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      queueMicrotask(() => statusRef.current?.focus())
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const formData = new URLSearchParams({
      email: normalizedEmail,
      website: honeypot,
      source,
      consentVersion: 'waitlist-v1',
    })

    try {
      await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formData.toString(),
      })

      setEmail('')
      setHoneypot('')
      setStatus('success')
      setErrorMessage('')
      queueMicrotask(() => statusRef.current?.focus())
    } catch {
      setStatus('error')
      setErrorMessage(
        'Something went wrong while joining the list. Please try again.',
      )
      queueMicrotask(() => statusRef.current?.focus())
    }
  }

  function resetToIdle() {
    setStatus('idle')
    setErrorMessage('')
  }

  const rootClass = [
    'waitlist',
    isCompact ? 'waitlist--compact' : 'content__form',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (status === 'success') {
    return (
      <div id={id} className={`${rootClass} waitlist--success`}>
        <div
          ref={statusRef}
          className="waitlist__status"
          tabIndex={-1}
          aria-live="polite"
        >
          <p className="waitlist__success-title">You’re on the list.</p>
          <p className="waitlist__success-body">
            Thank you. I’ll send honest updates as Enough develops.
          </p>
        </div>
        <button
          type="button"
          className="waitlist__reset"
          onClick={resetToIdle}
        >
          Use another email
        </button>
      </div>
    )
  }

  const describedBy = [
    errorMessage ? errorId : null,
    consentId,
    microcopyId,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <form
      id={id}
      className={rootClass}
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="content__label" htmlFor={emailId}>
        Email
      </label>
      <input
        ref={emailRef}
        id={emailId}
        name="email"
        className="content__input"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
          if (errorMessage) {
            setErrorMessage('')
            if (status === 'error') {
              setStatus('idle')
            }
          }
        }}
        disabled={status === 'submitting'}
        aria-invalid={errorMessage ? true : undefined}
        aria-describedby={describedBy || undefined}
      />

      <div className="honeypot">
        <label htmlFor={honeypotId}>Website</label>
        <input
          id={honeypotId}
          name="website"
          type="text"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      <div
        ref={statusRef}
        className="waitlist__live"
        tabIndex={-1}
        aria-live="polite"
      >
        {errorMessage ? (
          <p id={errorId} className="waitlist__error" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>

      <button
        className="hero__cta content__cta"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting'
          ? 'Joining…'
          : isCompact
            ? 'Join the waitlist'
            : 'I want this on the shelf'}
      </button>

      <p id={microcopyId} className="content__microcopy">
        {isCompact
          ? 'No payment. No preorder.'
          : 'No payment. No preorder. Just honest updates as Enough develops.'}
      </p>
      <p id={consentId} className="content__consent">
        By joining, you agree to receive occasional email updates about Enough.
        You can unsubscribe at any time.
      </p>
      <p className="waitlist__privacy">
        <a href={privacyHref()}>Privacy</a>
      </p>
    </form>
  )
}

export default WaitlistForm
