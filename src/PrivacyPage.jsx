import { CONTACT_EMAIL, CONTACT_MAILTO, homeHref, TALLY_PRIVACY_URL } from './siteUrls.js'
import './PrivacyPage.css'

function PrivacyPage() {
  return (
    <div className="privacy-page">
      <header className="privacy-page__header">
        <p className="privacy-page__wordmark">Enough.</p>
        <a className="privacy-page__back" href={homeHref()}>
          Back to Enough
        </a>
      </header>

      <main className="privacy-page__main">
        <h1 className="privacy-page__title">Privacy Policy</h1>
        <p className="privacy-page__effective">
          Effective date: August 12, 2026
        </p>

        <p>
          Enough is currently a product concept in development. This policy
          explains what information this website collects, why it is collected,
          and what choices you have.
        </p>

        <h2>The Enough waitlist</h2>
        <p>If you join the Enough waitlist, we collect:</p>
        <ul>
          <li>The email address you submit</li>
          <li>The date and time of your signup</li>
          <li>Whether you joined through the top or bottom form</li>
          <li>The version of the consent language shown when you joined</li>
          <li>Limited campaign-attribution information, if implemented</li>
        </ul>
        <p>
          Your email address is submitted through Google Apps Script and stored
          in a private Google Sheet accessible only to the person operating
          Enough.
        </p>
        <p>We use this information to:</p>
        <ul>
          <li>Measure interest in Enough</li>
          <li>Send occasional updates about the project</li>
          <li>Contact you if the product becomes available</li>
          <li>Understand which parts of the landing page generate interest</li>
        </ul>
        <p>
          Joining the waitlist is not a purchase, preorder, reservation, or
          payment.
        </p>
        <p>
          We will not sell, rent, or trade your email address. We will not use
          it to promote unrelated products or provide it to other companies for
          their own marketing.
        </p>

        <h2>Email choices</h2>
        <p>
          You may unsubscribe from Enough updates at any time using the
          unsubscribe instructions included in an email or by contacting us
          directly.
        </p>
        <p>You may also ask us to:</p>
        <ul>
          <li>Confirm whether your email address is on the waitlist</li>
          <li>Correct your email address</li>
          <li>Remove your email address</li>
          <li>Provide a copy of the information associated with your signup</li>
        </ul>
        <p>
          Contact{' '}
          <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> to make a request.
        </p>

        <h2>Anonymous facial-hair survey</h2>
        <p>Enough links to a separate survey hosted by Tally.</p>
        <p>
          The survey does not ask for your name or email address, and Enough
          does not connect survey answers to waitlist email addresses. Every
          survey question is optional.
        </p>
        <p>
          Please avoid including names, contact information, or other
          identifying details in written responses.
        </p>
        <p>
          Although the survey is anonymous to Enough, Tally and ordinary
          internet infrastructure may process technical information such as an
          IP address, browser information, device information, or approximate
          location when providing their service. Enough does not use those
          details to identify survey respondents.
        </p>
        <p>
          Read{' '}
          <a
            href={TALLY_PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tally’s privacy policy
          </a>
          .
        </p>

        <h2>Permission to publish survey excerpts</h2>
        <p>
          The survey contains an optional, unchecked permission box asking
          whether Enough may publish excerpts from written answers anonymously.
        </p>
        <p>
          If you select that box, Enough may quote portions of your written
          responses:
        </p>
        <ul>
          <li>On the Enough website</li>
          <li>In presentations</li>
          <li>In advertising or project materials</li>
          <li>In discussions about women’s experiences with facial hair</li>
        </ul>
        <p>
          Excerpts may be lightly edited for spelling, clarity, or length
          without changing their meaning.
        </p>
        <p>
          No name, email address, photograph, or identifying attribution will be
          attached by Enough.
        </p>
        <p>
          If you do not select the permission box, Enough will not intentionally
          publish your written answers.
        </p>

        <h2>Website and advertising information</h2>
        <p>
          Like most website hosts, GitHub Pages and related internet
          infrastructure may automatically process limited technical information
          needed to deliver, secure, and maintain the site, such as:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser and device type</li>
          <li>Requested pages</li>
          <li>Date and time of access</li>
          <li>Referring page</li>
          <li>Error and security logs</li>
        </ul>
        <p>
          Enough may also use Google Ads or similar measurement tools to
          understand whether an advertisement led someone to visit the site,
          join the waitlist, or open the anonymous survey.
        </p>
        <p>
          If advertising or analytics tools that use cookies or similar
          technologies are enabled, this policy will be updated to identify them
          and explain the choices available to visitors.
        </p>
        <p>
          Enough will not send your waitlist email address to Google Ads for
          personalized advertising unless this policy and the signup disclosure
          are updated first and any legally required consent is obtained.
        </p>

        <h2>Service providers</h2>
        <p>Enough currently relies on service providers including:</p>
        <ul>
          <li>
            Google Apps Script and Google Sheets to receive and store waitlist
            submissions
          </li>
          <li>Tally to host the separate facial-hair survey</li>
          <li>GitHub Pages to host and deliver the website</li>
        </ul>
        <p>
          These providers may process information according to their own privacy
          policies and terms.
        </p>

        <h2>Data retention</h2>
        <p>
          Waitlist information will be kept while Enough remains in development
          and while you remain subscribed. It may also be retained when
          reasonably necessary to:
        </p>
        <ul>
          <li>Honor unsubscribe requests</li>
          <li>
            Prevent someone who opted out from being added again accidentally
          </li>
          <li>Maintain accurate consent records</li>
          <li>Comply with legal obligations</li>
          <li>Resolve security or technical problems</li>
        </ul>
        <p>
          Survey responses will be retained while they remain useful to the
          project unless removal is requested and the response can reasonably be
          identified without compromising another respondent’s privacy.
        </p>
        <p>
          Because the survey intentionally does not collect identifying
          information, Enough may be unable to locate a particular response
          unless you provide enough non-identifying detail to distinguish it.
        </p>

        <h2>Security</h2>
        <p>
          Reasonable measures are used to protect collected information,
          including keeping the waitlist spreadsheet private and limiting
          access.
        </p>
        <p>
          No internet transmission or storage system can be guaranteed
          completely secure. Please do not submit sensitive personal information
          that the forms do not request.
        </p>

        <h2>Children’s privacy</h2>
        <p>
          Enough is not intended to collect personal information from children
          under 13. If you believe a child has submitted personal information,
          contact us so it can be removed.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This policy may change as Enough develops, particularly if the website
          begins using additional email, analytics, advertising, payment, or
          ecommerce services.
        </p>
        <p>
          The effective date at the top will be updated when material changes are
          made.
        </p>

        <h2>Contact</h2>
        <p>For privacy questions, access requests, corrections, or deletion requests, contact:</p>
        <p>
          Ashly Lorenzana
          <br />
          Enough
          <br />
          <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
        </p>
      </main>
    </div>
  )
}

export default PrivacyPage
