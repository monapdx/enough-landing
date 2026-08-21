import { useId, useState } from 'react'
import aisleImg from './assets/womensaisle.png'
import ashlyImg from './assets/ashly.png'
import WaitlistForm from './WaitlistForm.jsx'
import {
  CONTACT_MAILTO,
  privacyHref,
  TALLY_EXPERIENCE_URL,
} from './siteUrls.js'
import './App.css'

function App() {
  const [heroWaitlistOpen, setHeroWaitlistOpen] = useState(false)
  const heroWaitlistPanelId = useId()

  return (
    <>
      <section
        className={`hero${heroWaitlistOpen ? ' hero--waitlist-open' : ''}`}
        aria-label="Enough brand introduction"
      >
        <div className="hero__copy">
          <h1 className="hero__wordmark">Enough.</h1>
          <p className="hero__question">
            Tired of pretending
            <br />
            women don’t grow hair
            <br />
            where men do?
          </p>
          <p className="hero__affirmation">Me too.</p>

          <div className="hero__actions">
            {heroWaitlistOpen ? (
              <div
                id={heroWaitlistPanelId}
                className="hero__waitlist-panel"
              >
                <WaitlistForm
                  source="hero"
                  variant="compact"
                  autoFocusEmail
                />
              </div>
            ) : (
              <button
                type="button"
                className="hero__cta"
                aria-expanded={false}
                aria-controls={heroWaitlistPanelId}
                onClick={() => setHeroWaitlistOpen(true)}
              >
                I want this on the shelf
              </button>
            )}

            <a className="hero__secondary" href="#learn-more">
              Learn more
            </a>
          </div>
        </div>
        <div className="hero__media">
          <img
            src={aisleImg}
            alt="Enough facial razors for women hanging in a drugstore aisle among pastel women’s razors"
          />
        </div>
      </section>

      <main id="learn-more" className="content">
        <section
          className="content__section"
          aria-labelledby="she-shaves"
        >
          <div className="content__inner">
            <h2 id="she-shaves" className="content__heading">
              She shaves, too.
            </h2>
            <p>
              Maybe every few days. Maybe every morning. Maybe again before
              someone gets close enough to touch her face.
            </p>
            <p>
              Women have been shaving their upper lips, chins and jawlines
              quietly for generations. Because the evidence disappears down the
              sink, we remain largely invisible—even to one another.
            </p>
            <p>
              Enough says it plainly: women grow facial hair. Women shave it.
              Neither fact is shameful.
            </p>
          </div>
        </section>

        <section
          className="content__section content__section--tint"
          aria-labelledby="hair-is-yours"
        >
          <div className="content__inner">
            <h2 id="hair-is-yours" className="content__heading">
              The hair is yours.
            </h2>
            <p>
              Remove it if you want to. Keep it if you want to. Shave, pluck,
              wax, bleach, treat—or do absolutely nothing.
            </p>
            <p>
              There is no correct way to feel about your facial hair and no
              morally superior choice about what to do with it.
            </p>
            <p>
              Enough is not here to turn facial hair into another defect women
              are expected to fix.
            </p>
            <blockquote className="content__pullquote">
              Removing hair is a choice. Let’s remove the stigma at its root.
            </blockquote>
          </div>
        </section>

        <section
          className="content__section"
          aria-labelledby="better-tool"
        >
          <div className="content__inner">
            <h2 id="better-tool" className="content__heading">
              A better tool for what many of us already do.
            </h2>
            <p>
              Enough isn’t trying to introduce women to shaving. Many of us have
              been doing it for years.
            </p>
            <p>
              After cycling through countless razors, the smoothest result I
              found came from an otherwise unremarkable six-blade disposable. It
              wasn’t a miracle. It was simply better at the job than the others
              I had tried.
            </p>
            <p>That experience is the starting point for Enough:</p>
            <ul className="content__specs">
              <li>Six blades</li>
              <li>Two complete disposable razors</li>
              <li>Selected and presented specifically for women’s faces</li>
              <li>No euphemisms, clinical language or embarrassing jokes</li>
            </ul>
            <p>
              Enough will not stop hair from growing back. It will not eliminate
              maintenance or replace permanent hair-removal treatments. The goal
              is much simpler: a good tool for the choice many women are already
              making.
            </p>
          </div>
        </section>

        <section
          className="content__section content__section--tint content__section--founder"
          aria-labelledby="part-of-it"
        >
          <div className="content__inner content__inner--founder">
            <h2 id="part-of-it" className="content__heading founder__heading">
              I didn’t discover this audience. I am part of it.
            </h2>
            <figure className="founder__photo">
              <img
                src={ashlyImg}
                alt="Enough founder Ashly Lorenzana"
                width={1152}
                height={1290}
              />
            </figure>
            <div className="founder__copy">
              <p>
                I first started shaving my upper lip when I was around ten or
                eleven. I have shaved it almost every day since.
              </p>
              <p>
                Years later, thick, coarse hair began growing on my chin. Today, I
                can feel prickly regrowth around six hours after shaving.
                Maintaining what I consider smooth usually means shaving at least
                twice a day.
              </p>
              <p>
                I have hidden it from romantic partners. I have checked my chin
                with my hand throughout the day. I have stood in the men’s shaving
                aisle because the women’s aisle had nothing intended for my face.
              </p>
              <p>
                This isn’t a demographic I found through market research. It is my
                life—and I know it isn’t mine alone.
              </p>
              <blockquote className="content__pullquote">
                I’m Ashly. I’ll show you mine so nobody else has to show hers.
              </blockquote>
            </div>
          </div>
        </section>

        <section
          className="content__section"
          aria-labelledby="couldnt-see"
        >
          <div className="content__inner">
            <h2 id="couldnt-see" className="content__heading">
              The women who couldn’t see one another.
            </h2>
            <p>Most people don’t see our facial hair because we remove it.</p>
            <p>
              We don’t see one another because we rarely talk about removing it.
            </p>
            <p>
              That silence creates a convincing lie: every woman believes she
              may be the only one shaving, checking for stubble, hiding razors
              or worrying about whether someone will touch her face.
            </p>
            <p>
              I want Enough to replace that isolation with evidence—real
              anonymous numbers and experiences from women who understand.
            </p>
            <p>
              You will never need to publish your name, photograph or face.
              Anonymous experiences will be displayed only with explicit
              permission, and email addresses will remain separate from survey
              responses.
            </p>
            <p>
              You don’t have to make yourself visible to find out that you were
              never alone.
            </p>

            <aside className="survey-invite" aria-labelledby="survey-invite-heading">
              <h3 id="survey-invite-heading" className="survey-invite__heading">
                Add your experience
              </h3>
              <p className="survey-invite__body">
                Help make the invisible visible. Answer any questions you want
                and skip anything you don’t. The survey asks for no name or email
                address, and your responses are not connected to the Enough
                waitlist.
              </p>
              <a
                className="hero__cta survey-invite__cta"
                href={TALLY_EXPERIENCE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share my experience anonymously
              </a>
              <p className="survey-invite__reassurance">
                About 3 minutes · Every question is optional · No name or email
                requested
              </p>
            </aside>
          </div>
        </section>

        <section
          className="content__section content__section--tint"
          aria-labelledby="on-the-shelf"
        >
          <div className="content__inner">
            <h2 id="on-the-shelf" className="content__heading">
              Help put Enough on the shelf.
            </h2>
            <p>
              Enough is still in development. The razors are not available to
              purchase yet, and joining this list is not a preorder or payment.
            </p>
            <p>
              This page exists to answer a real question: do enough women want
              this product—and the acknowledgment it represents—to help bring it
              into the world?
            </p>
            <p>If your answer is yes, tell me.</p>

            <WaitlistForm source="bottom-waitlist" variant="full" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="site-footer__tagline">Reality, given shelf space.</p>
        <nav className="site-footer__nav" aria-label="Footer">
          <a className="site-footer__link" href={privacyHref()}>
            Privacy
          </a>
          <a className="site-footer__link" href={CONTACT_MAILTO}>
            Contact
          </a>
          <a
            className="site-footer__link"
            href={TALLY_EXPERIENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Take the anonymous facial-hair survey
          </a>
        </nav>
        <p className="site-footer__copyright">© 2026 Enough.</p>
      </footer>
    </>
  )
}

export default App
