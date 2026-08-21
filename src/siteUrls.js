export const TALLY_EXPERIENCE_URL = 'https://tally.so/r/obNBVX'
export const TALLY_PRIVACY_URL = 'https://tally.so/help/privacy-policy'
export const CONTACT_EMAIL = 'ashly@purelymail.com'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`

function withBase(path) {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.replace(/^\//, '')
  return `${normalizedBase}${normalizedPath}`
}

/** Landing page home (respects Vite/GitHub Pages base path). */
export function homeHref() {
  return import.meta.env.BASE_URL || '/'
}

/** Privacy Policy page at /privacy/ under the site base. */
export function privacyHref() {
  return withBase('privacy/')
}
