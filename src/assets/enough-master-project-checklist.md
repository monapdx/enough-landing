# Enough. — Master Project Checklist

**Project:** Six-blade facial razors for women  
**Positioning:** Matter-of-fact recognition of women who shave their faces, without euphemism, shame, or pathologizing  
**Internal definition:** *Reality, given shelf space.*  
**Current stage:** Concept validation and prelaunch audience testing

> This is the complete roadmap, not a list of things that must all happen now. Work through the phases in order. A later phase may change substantially based on what an earlier test teaches us.

## Status key

- [x] Completed
- [ ] Not completed
- **NOW** — needed before the first paid traffic test
- **LATER** — intentionally deferred until evidence justifies it

---

## Phase 1 — Define the concept and brand

**Objective:** Make the product and its reason for existing understandable in one sentence.

### Product definition

- [x] Define the initial product as disposable facial razors intended for women.
- [x] Choose six blades as the intended blade count.
- [x] Choose two complete razors per package.
- [x] Define the intended use as facial shaving rather than general body shaving.
- [x] Identify the preferred physical benchmark: the WinCo six-blade disposable razor.
- [ ] Confirm that the final sourced product performs well enough to support the six-blade positioning. **LATER**

### Audience and problem

- [x] Define the primary audience: women who remove substantial facial hair manually.
- [x] Recognize adjacent audiences without diluting the central positioning.
- [x] Define the unmet need as both practical and cultural:
  - A close, dependable facial shave.
  - A product placed and described for women who actually shave.
  - Recognition without diagnosis, euphemism, or shame.
- [x] Avoid reducing the audience to “peach fuzz” or dermaplaning users.
- [x] Avoid implying that removing facial hair is mandatory.

### Name, language, and visual system

- [x] Select **Enough.** as the working brand name.
- [x] Select **facial razors for women** as the product descriptor.
- [x] Establish the package language:
  - **Enough.**
  - facial razors for women
  - six blades · two razors
  - removing hair is a choice. let’s remove the stigma at its root.
- [x] Establish *Reality, given shelf space.* as a brand-defining line.
- [x] Choose the iris/purple-blue accent direction.
- [x] Choose Changa One for the wordmark and Thasadith for supporting copy.
- [x] Establish matter-of-fact, non-medicalizing brand voice.
- [x] Establish prohibited or disfavored framing:
  - No “beard” language.
  - No joke framing.
  - No “suffering from” language.
  - No claim that facial hair makes someone less feminine.
  - No implication that women must remove it.
- [ ] Conduct a basic trademark/name-conflict screening for Enough in the relevant product categories. **LATER**
- [ ] Decide whether a more distinctive legal company or product-series name is needed if “Enough” cannot be protected. **LATER**

**Phase gate:** The concept can be explained consistently without relying on a finished manufactured product. **Met.**

---

## Phase 2 — Create the concept packaging and visual proof

**Objective:** Make the concept visually concrete enough to test recognition and interest.

### Package mockup

- [x] Create the front-facing package concept.
- [x] Show two complete six-blade razors.
- [x] Use a simple, non-gender-stereotyped design.
- [x] Make “for women” explicit.
- [x] Color-coordinate the mock razor handles with the brand.
- [x] Produce a shelf-context mockup in the women’s razor aisle.
- [x] Ensure the package remains legible in the desktop hero.
- [x] Ensure the package remains legible in the mobile hero.
- [ ] Retain editable GIMP/XCF source files and high-resolution originals in an organized project folder.
- [ ] Create a version log for major packaging iterations.

### Future production packaging

- [ ] Obtain the supplier’s exact dieline and print specifications. **LATER**
- [ ] Adapt the concept art to the real packaging structure. **LATER**
- [ ] Design the package back and side panels. **LATER**
- [ ] Add final product instructions, warnings, materials, responsible-party details, country of origin, lot/batch information, and barcode as required. **LATER**
- [ ] Confirm all product and performance claims against supplier documentation and testing. **LATER**
- [ ] Proofread production artwork independently before approving print. **LATER**
- [ ] Order and inspect a physical printed packaging proof. **LATER**

**Phase gate:** A visitor can understand what the product would look like on a shelf. **Met for concept testing.**

---

## Phase 3 — Build the validation website

**Objective:** Give relevant women a credible place to encounter the concept and voluntarily respond.

### Core landing page

- [x] Build the site in React and Vite.
- [x] Create the desktop hero.
- [x] Create a responsive mobile hero.
- [x] Preserve the complete shelf image on mobile using its natural aspect ratio.
- [x] Add the central recognition message.
- [x] Add the expandable hero waitlist form.
- [x] Change the hero form submit action to **Join the waitlist** / **Joining…**.
- [x] Keep only one iris-colored primary button in the expanded hero state.
- [x] Add a full bottom waitlist form.
- [x] Add the founder story.
- [x] Add the anonymous survey invitation.
- [x] Add “Learn more” scrolling behavior.
- [x] Create success and error states for waitlist submission.
- [x] Preserve email validation, honeypot, focus behavior, and source values.

### Mobile and responsive quality

- [x] Test the hero on an actual phone through the local Vite server.
- [x] Stack the hero copy above the image on mobile.
- [x] Remove the fixed/cropped mobile image behavior.
- [x] Reduce the mobile CTA width.
- [x] Remove the large empty area beneath the mobile image.
- [ ] Test the complete page, not only the hero, on the Pixel.
- [ ] Test at approximately 320px, 360px, 390px, 430px, tablet width, and desktop width. **NOW**
- [ ] Check for horizontal overflow at every tested width. **NOW**
- [ ] Verify readable text sizing and comfortable tap targets. **NOW**
- [ ] Verify that browser zoom and large text do not make forms unusable. **NOW**

### Privacy and trust infrastructure

- [x] Draft the plain-language Privacy Policy.
- [x] Identify GitHub Pages as the host.
- [x] Select `ashly@purelymail.com` as the contact address.
- [ ] Add the Privacy Policy page. **NOW**
- [ ] Add the footer with:
  - Reality, given shelf space.
  - Privacy.
  - Contact.
  - Anonymous facial-hair survey.
  - © 2026 Enough.
- [ ] Add a quiet Privacy link near both waitlist forms. **NOW**
- [ ] Add “Concept in development · Not yet available for purchase” near the initial waitlist action. **NOW**
- [ ] Verify every privacy statement against the actually deployed technology before publication. **NOW**

### Metadata and polish

- [ ] Set the final page title and meta description. **NOW**
- [ ] Add a favicon. **NOW**
- [ ] Create an Open Graph/social-sharing image. **NOW**
- [ ] Add Open Graph title, description, image, and canonical URL. **NOW**
- [ ] Verify descriptive alt text for meaningful images. **NOW**
- [ ] Verify visible keyboard focus styles. **NOW**
- [ ] Verify heading hierarchy and landmarks. **NOW**
- [ ] Respect reduced-motion preferences. **NOW**
- [ ] Compress large photographic assets and use suitable WebP/AVIF delivery without visibly damaging them. **NOW**
- [ ] Prevent layout shift by supplying image dimensions or aspect ratios. **NOW**
- [ ] Create a useful 404/fallback page compatible with GitHub Pages. **NOW**

### Code verification

- [ ] Run lint after the privacy/footer/metadata changes. **NOW**
- [ ] Run the production build. **NOW**
- [ ] Resolve all new lint and build errors. **NOW**
- [ ] Check the browser console for errors and failed requests. **NOW**

**Phase gate:** A stranger can understand the concept, trust the page, join the waitlist, or take the anonymous survey from desktop or phone.

---

## Phase 4 — Finish the response and data systems

**Objective:** Collect usable evidence without overstating anonymity or losing attribution.

### Waitlist system

- [x] Build the React waitlist forms.
- [x] Connect submissions through Google Apps Script.
- [x] Store submissions in a private Google Sheet.
- [x] Distinguish `hero` and `bottom-waitlist` source values.
- [x] Include email validation.
- [x] Include a honeypot.
- [x] Include consent copy.
- [ ] Test both forms on the deployed site. **NOW**
- [ ] Verify correct timestamps, source values, and consent-version values in the sheet. **NOW**
- [ ] Test malformed email addresses. **NOW**
- [ ] Test duplicate signups and decide how they should be handled. **NOW**
- [ ] Test a simulated endpoint failure and verify the visible error state. **NOW**
- [ ] Confirm the sheet and Apps Script are not publicly readable. **NOW**
- [ ] Create a documented unsubscribe/removal process before sending any update emails. **NOW**
- [ ] Create an internal suppression method so unsubscribed addresses are not accidentally re-added. **LATER, before email campaigns**

### Anonymous survey

- [x] Create the Tally survey.
- [x] Keep every survey question optional.
- [x] Avoid collecting names and email addresses.
- [x] Keep survey responses separate from waitlist identities.
- [x] Add an optional, unchecked permission to publish anonymous excerpts.
- [x] Use the survey URL `https://tally.so/r/obNBVX`.
- [ ] Test the survey from beginning to end on phone and desktop. **NOW**
- [ ] Verify that the permission checkbox is genuinely optional and unchecked by default. **NOW**
- [ ] Verify that no hidden field connects a respondent to their waitlist identity. **NOW**
- [ ] Export and securely store a backup of early survey responses periodically. **LATER**
- [ ] Establish a process for separating publishable excerpts from responses without publication permission. **NOW, before quoting anyone**

### Campaign attribution and measurement

- [ ] Decide the minimum measurement stack for the first test. **NOW**
- [ ] Preserve UTM source, medium, campaign, content, and term when appropriate. **NOW**
- [ ] Decide whether attribution belongs only in analytics, in the waitlist sheet, or both. **NOW**
- [ ] Add Google Ads conversion events for successful waitlist submissions. **NOW**
- [ ] Track hero and bottom waitlist conversions separately. **NOW**
- [ ] Track survey-link clicks without compromising survey anonymity. **NOW**
- [ ] Track Learn More clicks if they answer a useful design question. **OPTIONAL**
- [ ] Verify that no email address or survey identity is sent to Google Ads. **NOW**
- [ ] Update the Privacy Policy to name any tracking technology actually enabled. **NOW**
- [ ] Verify conversion events using test traffic before spending money. **NOW**

**Phase gate:** Every measured action is intentional, testable, privacy-consistent, and attributable enough to answer the first validation question.

---

## Phase 5 — Publish the prelaunch site

**Objective:** Create a stable public destination for the first audience test.

### Repository and deployment

- [ ] Create the GitHub repository. **NOW**
- [ ] Decide whether the repository should be public or private.
- [ ] Add an appropriate `.gitignore`.
- [ ] Confirm no secrets, private sheet URLs, credentials, or sensitive files are committed. **NOW**
- [ ] Write a concise README with development and deployment instructions.
- [ ] Configure the Vite base path correctly for GitHub Pages. **NOW**
- [ ] Configure GitHub Pages deployment. **NOW**
- [ ] Run the production build locally before the first push. **NOW**
- [ ] Push the initial intentional commit. **NOW**
- [ ] Verify the deployed landing page and Privacy route. **NOW**
- [ ] Verify direct navigation and refresh behavior on GitHub Pages. **NOW**

### Domain and public identity

- [ ] Decide whether to test first on the GitHub Pages URL or connect a custom domain. **NOW**
- [ ] If using a custom domain, select and purchase it.
- [ ] Configure DNS and GitHub Pages custom-domain settings.
- [ ] Verify HTTPS.
- [ ] Configure the canonical URL and social metadata to use the final public address.
- [ ] Verify that `ashly@purelymail.com` receives test messages.
- [ ] Consider a brand-specific contact address after a domain is selected. **LATER**

### Deployed-site QA

- [ ] Test desktop Chrome, Edge, and Firefox. **NOW**
- [ ] Test the actual Pixel/mobile browser. **NOW**
- [ ] Test keyboard-only navigation. **NOW**
- [ ] Test both waitlist forms and confirm the resulting sheet rows. **NOW**
- [ ] Test all footer, Privacy, contact, survey, and external links. **NOW**
- [ ] Verify success and error states. **NOW**
- [ ] Check image loading speed over a cellular connection. **NOW**
- [ ] Run a performance/accessibility audit and address serious issues. **NOW**
- [ ] Ask one trusted person unfamiliar with the page to use it without instructions. **RECOMMENDED**

**Phase gate:** The public URL works reliably on phone and desktop and collects valid responses.

---

## Phase 6 — Design the first audience-validation test

**Objective:** Determine whether Ash can deliberately reach relevant women who recognize themselves in Enough and voluntarily act.

### Define the decision before launching

- [x] Define the first test as audience recognition and interest—not profitability or proof of a complete business.
- [ ] Write the exact primary research question. **NOW**
  - Suggested: “Can Enough intentionally reach women we do not know who recognize themselves strongly enough to take a voluntary action?”
- [ ] Choose the primary conversion: completed waitlist signup. **NOW**
- [ ] Choose supporting signals:
  - Survey clicks.
  - Survey completions.
  - Open-ended recognition language.
  - Hero versus bottom-form conversion.
  - Engagement with the founder story.
- [ ] Define what would count as promising, inconclusive, and discouraging before seeing results. **NOW**
- [ ] Avoid using an arbitrary large signup count as a pass/fail judgment.
- [ ] Set a fixed first-test budget, tentatively $150–$250. **NOW**
- [ ] Establish a stop-loss or pause rule for obvious irrelevant traffic. **NOW**
- [ ] Decide the initial test duration or minimum qualified-click threshold. **NOW**

### Keyword plan

- [x] Complete the first broad Keyword Planner investigation.
- [x] Complete a second round focused on manual shaving, lived problems, and desired outcomes.
- [x] Identify direct-intent terms such as:
  - best face razor for women
  - face razor women
  - razor for women’s facial hair
  - best razor for women’s facial hair
  - ladies facial razor
  - female face razor
- [x] Identify highly relevant lower-volume chin/stubble terms.
- [x] Recognize that stigma and euphemism distort search language.
- [x] Avoid summing duplicated Keyword Planner close variants as market size.
- [ ] Clean and deduplicate the keyword set for campaign use. **NOW**
- [ ] Separate keywords into tightly related ad groups. **NOW**
- [ ] Decide exact-match and phrase-match terms for the first test. **NOW**
- [ ] Build an initial negative-keyword list. **NOW**
- [ ] Keep potentially informative comparison/alternative searches when intent is still compatible.
- [ ] Exclude clearly incompatible searches such as local laser services or explicitly electric-only product searches.

### Ads and messaging

- [ ] Create at least two meaningfully different ad-message variants. **NOW**
- [ ] Test conventional product intent against matter-of-fact recognition.
- [ ] Ensure the ad promise matches what the landing page actually offers.
- [ ] Clearly avoid implying the product is already available for purchase.
- [ ] Avoid medical, diagnostic, or guaranteed-results claims.
- [ ] Confirm all ads comply with current Google Ads policies before submission. **NOW**
- [ ] Add UTM parameters consistently. **NOW**
- [ ] Preview ads on mobile and desktop.

### Launch preparation

- [ ] Create or configure the Google Ads account. **NOW**
- [ ] Add billing with a firm budget cap. **NOW**
- [ ] Restrict location to the United States for the first test unless intentionally changed. **NOW**
- [ ] Set language to English. **NOW**
- [ ] Review network settings and avoid unintended display/partner traffic. **NOW**
- [ ] Confirm conversion tracking before enabling the campaign. **NOW**
- [ ] Record the campaign configuration and launch date in a test log. **NOW**

**Phase gate:** The campaign can be turned on with a fixed budget, interpretable targeting, working measurement, and prewritten decision rules.

---

## Phase 7 — Run and interpret the validation test

**Objective:** Obtain evidence from strangers rather than supportive friends or hypothetical customers.

### During the test

- [ ] Confirm ads are serving to intended searches.
- [ ] Review the search-terms report for irrelevant traffic.
- [ ] Add negative keywords when intent is clearly incompatible.
- [ ] Check that conversions are recording correctly.
- [ ] Check the waitlist sheet for valid new signups.
- [ ] Check survey responses without reacting impulsively to each individual response.
- [ ] Avoid changing the page or campaign so frequently that the test becomes uninterpretable.
- [ ] Document every material campaign or page change with date and reason.
- [ ] Pause immediately if spending accelerates because of irrelevant or broken traffic.

### Analyze quantitative evidence

- [ ] Record impressions, clicks, click-through rate, average CPC, and spend.
- [ ] Record landing-page waitlist conversions and conversion rate.
- [ ] Compare hero and bottom-form conversions.
- [ ] Record survey clicks and completions.
- [ ] Compare keyword/ad-group performance without overinterpreting tiny samples.
- [ ] Separate valid qualified traffic from irrelevant clicks.
- [ ] Calculate cost per qualified visitor and cost per waitlist signup.

### Analyze qualitative evidence

- [ ] Read open-ended survey responses for recognition, relief, objection, confusion, and language patterns.
- [ ] Distinguish politeness from evidence of actual interest.
- [ ] Identify language women use after the page has named the experience plainly.
- [ ] Compare that language with the euphemistic language found in search behavior.
- [ ] Save strong anonymous excerpts only when publication permission was granted.
- [ ] Note unexpected audience segments or use cases without immediately repositioning the whole brand.

### Decide the next experiment

- [ ] Classify the result as promising, inconclusive, or discouraging using the prewritten criteria.
- [ ] Identify the weakest link:
  - Ad targeting.
  - Ad message.
  - Landing-page recognition.
  - Product concept.
  - Waitlist offer.
  - Survey friction.
- [ ] Decide whether to:
  - Repeat with improved targeting.
  - Test a different message.
  - Improve the page.
  - Wait for physical samples.
  - Pause the concept.
- [ ] Write a short test report before beginning the next round.

**Phase gate:** The evidence produces a specific next decision rather than a global judgment about Ash’s ability or the entire future of Enough.

---

## Phase 8 — Source and test the physical product

**Objective:** Find a six-blade disposable razor that earns the right to be sold inside Enough packaging.

### Supplier shortlist

- [x] Contact Alibaba suppliers/manufacturers.
- [x] Receive initial catalogs.
- [x] Identify relevant Jiali/Goodmax models:
  - SL-8106.
  - SL-8310.
  - SL-8601.
- [x] Identify Yingjili as a potentially strong blade/cartridge manufacturer.
- [x] Recognize Domon Dolly as Yingjili’s women’s brand rather than a separate manufacturer.
- [ ] Build one supplier comparison table. **NEXT SOURCING TASK**
- [ ] Record for each supplier:
  - Legal/company identity and role.
  - Exact model number.
  - Disposable versus system razor.
  - Blade source and material.
  - Lubrication strip ingredients.
  - Handle options.
  - Packaging options.
  - Sample price and shipping.
  - MOQ.
  - Unit price tiers.
  - Production lead time.
  - DDP shipping options.
  - Certifications and test documents.
  - Responsiveness and clarity.

### Supplier questions

- [ ] Ask for samples of each exact candidate model.
- [ ] Confirm that samples are production-identical, not premium sales samples.
- [ ] Ask for neutral/stock packaging MOQ.
- [ ] Ask for custom packaging MOQ.
- [ ] Ask whether packaging can contain two complete razors.
- [ ] Ask whether handle colors can be customized and at what MOQ.
- [ ] Ask for complete unit pricing at several realistic quantities.
- [ ] Ask for packaging, setup, mold, plate, and artwork fees.
- [ ] Ask for DDP freight estimates to Portland, Oregon.
- [ ] Ask for production and transit lead times.
- [ ] Ask for relevant U.S. product documentation and recent test reports.
- [ ] Ask who actually manufactures the blades, cartridges, handles, and final assembled product.
- [ ] Ask about lot traceability and quality-control procedures.
- [ ] Ask about defect allowances, inspection, refunds, and remake terms.
- [ ] Keep all material claims provisional until documented.

### Sample testing

- [ ] Order multiple samples from more than one plausible supplier.
- [ ] Label samples so testing can be blind where practical.
- [ ] Photograph and document each sample upon arrival.
- [ ] Inspect build quality, blade alignment, handle feel, packaging, and defects.
- [ ] Compare each candidate directly with the WinCo benchmark.
- [ ] Create a consistent shave-test rubric:
  - Closeness on upper lip.
  - Closeness on chin.
  - Performance on coarse hair.
  - Number of passes required.
  - Pulling or snagging.
  - Irritation immediately afterward.
  - Irritation later that day.
  - Speed of perceptible stubble return.
  - Grip and control.
  - Rinsing/clogging.
  - Blade durability across uses.
- [ ] Do not test unfamiliar razors over already irritated or injured skin.
- [ ] Recruit a small number of relevant adult testers only after basic personal testing establishes reasonable safety and performance.
- [ ] Provide testers with clear instructions and a way to report adverse experiences.
- [ ] Avoid claiming broad performance based only on Ash’s experience.

### Supplier verification and commercial diligence

- [ ] Verify the supplier’s business identity and manufacturing role.
- [ ] Request a live factory walkthrough or third-party audit if the order becomes material.
- [ ] Verify documents independently where feasible.
- [ ] Obtain and inspect a preproduction sample with final materials.
- [ ] Arrange third-party pre-shipment inspection before a meaningful production order.
- [ ] Use protected payment terms and avoid unprotected off-platform payment for early orders.

**Phase gate:** At least one candidate meets the required shave performance, documentation, customization, price, and reliability thresholds.

---

## Phase 9 — Build the business case

**Objective:** Determine whether the product can be sold honestly and sustainably at a viable price.

### Landed cost model

- [ ] Calculate per-pack razor cost.
- [ ] Add custom packaging and print costs.
- [ ] Add setup, artwork, mold, or plate fees amortized across the order.
- [ ] Add inspection and testing costs.
- [ ] Add freight, insurance, duties, tariffs, customs, brokerage, and delivery.
- [ ] Add warehousing or home-storage costs.
- [ ] Add pick-and-pack and outbound shipping materials.
- [ ] Add payment-processing and ecommerce fees.
- [ ] Add expected returns, replacements, damage, and defects.
- [ ] Add customer-support and email costs.
- [ ] Add advertising/customer-acquisition assumptions.
- [ ] Model multiple order quantities and freight scenarios.

### Pricing and margins

- [ ] Research comparable manual facial razors and premium disposable razors.
- [ ] Decide the plausible direct-to-consumer retail price.
- [ ] Calculate gross margin before advertising.
- [ ] Calculate contribution margin after fulfillment and payment fees.
- [ ] Model wholesale pricing and retailer margin requirements.
- [ ] Determine whether two razors per pack remain viable at the intended price.
- [ ] Avoid setting a final price before real landed costs are known.

### Demand and order-size planning

- [ ] Use waitlist and test data to form a conservative demand range.
- [ ] Estimate how long each possible MOQ might take to sell.
- [ ] Calculate cash required before revenue begins.
- [ ] Calculate break-even units and cash-recovery timeline.
- [ ] Model downside cases with slower sales and higher freight.
- [ ] Refuse an MOQ that would create unacceptable unsold-inventory risk.
- [ ] Decide whether a smaller neutral-package pilot should precede custom packaging.

**Phase gate:** Enough has a plausible price, margin, cash requirement, and inventory risk that Ash knowingly accepts.

---

## Phase 10 — Legal, safety, and operational foundation

**Objective:** Be ready to sell a physical personal-care tool responsibly.

### Business setup

- [ ] Decide business structure with appropriate professional advice.
- [ ] Register the business and any assumed business name as required.
- [ ] Obtain an EIN if appropriate.
- [ ] Open a separate business bank account.
- [ ] Create basic bookkeeping and receipt-retention processes.
- [ ] Determine sales-tax registration and collection obligations for the chosen sales channels.
- [ ] Create a business mailing/return address that does not unnecessarily expose a home address.

### Brand and contracts

- [ ] Complete a professional trademark search before investing substantially in packaging.
- [ ] Decide whether and where to file trademark applications.
- [ ] Secure relevant domains and social handles defensively without creating unnecessary channels to maintain.
- [ ] Put supplier specifications, quality expectations, remedies, and ownership of artwork in writing.
- [ ] Confirm who owns custom packaging files, tooling, and molds.
- [ ] Review significant manufacturing agreements professionally before signing.

### Product safety and compliance

- [ ] Determine the exact U.S. regulatory classification and requirements for the final razor and any lubrication-strip ingredients.
- [ ] Verify current federal, state, import, labeling, and consumer-product obligations with qualified advice.
- [ ] Confirm required country-of-origin marking.
- [ ] Confirm packaging warnings and safe-use instructions.
- [ ] Maintain supplier test reports, material specifications, certificates, and batch records.
- [ ] Establish complaint, injury, defect, and recall documentation procedures.
- [ ] Establish lot/batch traceability.
- [ ] Purchase appropriate product-liability and general business insurance before sales.
- [ ] Never make unsupported medical, safety, hypoallergenic, or performance claims.

### Customer policies

- [ ] Create Terms of Sale/Terms of Service appropriate to the final channel.
- [ ] Update the Privacy Policy for ecommerce, payments, shipping, analytics, and email tools.
- [ ] Create shipping, return, replacement, and refund policies.
- [ ] Decide how opened personal-care products will be handled.
- [ ] Create customer-support templates for defects, irritation, injuries, refunds, and delivery problems.

**Phase gate:** Enough can lawfully receive inventory, sell it, respond to problems, and document what happened.

---

## Phase 11 — Production-ready product and packaging

**Objective:** Convert the validated concept into a controlled production specification.

### Final product specification

- [ ] Select the supplier and exact razor model.
- [ ] Freeze the blade, cartridge, handle, strip, color, and assembly specifications.
- [ ] Define acceptable tolerances and defect standards.
- [ ] Approve a signed/retained “golden sample.”
- [ ] Confirm production samples match the golden sample.
- [ ] Define unit and carton packaging requirements.
- [ ] Define lot coding and traceability placement.

### Final packaging

- [ ] Complete the supplier dieline artwork.
- [ ] Add final legally and factually accurate copy.
- [ ] Add instructions and warnings.
- [ ] Add company/contact and country-of-origin details.
- [ ] Obtain a GS1 barcode or appropriate channel-compliant barcode.
- [ ] Check barcode size, contrast, quiet zone, and scannability.
- [ ] Verify package durability and tamper evidence as appropriate.
- [ ] Review color proofs and physical prototypes under ordinary retail lighting.
- [ ] Confirm the product can be removed without unreasonable frustration or injury.
- [ ] Obtain final written production approval only after every element is verified.

### Pilot production

- [ ] Choose the smallest commercially useful pilot quantity.
- [ ] Approve the purchase order and payment milestones.
- [ ] Confirm the production schedule.
- [ ] Receive in-production photos or inspection reports.
- [ ] Complete pre-shipment inspection.
- [ ] Approve shipment only if the batch meets specifications.
- [ ] Document nonconformities and remedies.

**Phase gate:** A controlled pilot batch has passed inspection and is ready for sale.

---

## Phase 12 — Prepare direct-to-consumer launch

**Objective:** Sell and fulfill the first real orders without losing control of customer experience or cash.

### Ecommerce site

- [ ] Decide whether to extend the existing site or use a dedicated commerce platform.
- [ ] Add accurate product photography of the actual production item.
- [ ] Replace concept mockups wherever they could be mistaken for the final product.
- [ ] Add price, inventory status, product details, use instructions, and policies.
- [ ] Add secure payment processing.
- [ ] Add shipping-rate and tax calculation.
- [ ] Add order confirmations and fulfillment emails.
- [ ] Test checkout on phone and desktop.
- [ ] Test failed payments, address errors, refunds, cancellations, and out-of-stock states.
- [ ] Make the waitlist migration and launch-email process compliant and easy to unsubscribe from.

### Inventory and fulfillment

- [ ] Choose self-fulfillment or a fulfillment partner.
- [ ] Determine storage requirements and inventory controls.
- [ ] Choose mailers, labels, packing materials, and package inserts.
- [ ] Test packed weight and dimensions.
- [ ] Compare shipping services and tracking reliability.
- [ ] Create receiving, counting, damage-inspection, and reconciliation procedures.
- [ ] Create pick/pack quality checks.
- [ ] Create lost, damaged, returned, and undeliverable-order procedures.
- [ ] Set a reorder point based on lead time and sales rate.

### Launch communications

- [ ] Segment valid subscribed waitlist members.
- [ ] Prepare a short launch sequence rather than indiscriminate repeated email.
- [ ] Explain clearly what is available, at what price, and when it ships.
- [ ] Invite feedback from early customers.
- [ ] Avoid fake scarcity or invented testimonials.
- [ ] Prepare customer-support capacity for launch week.

**Phase gate:** A customer can place an order, receive the correct product, get help, and obtain a fair resolution if something goes wrong.

---

## Phase 13 — Learn from the first customers

**Objective:** Determine whether the real product delivers repeatable value beyond the concept’s emotional recognition.

### Product feedback

- [ ] Ask early customers about closeness, irritation, control, durability, and value.
- [ ] Separate packaging/positioning praise from razor-performance praise.
- [ ] Track complaints and adverse experiences by batch.
- [ ] Track defect rate and replacement rate.
- [ ] Track repeat purchase and time between purchases.
- [ ] Identify whether two razors per package is the right quantity.
- [ ] Identify whether instructions need improvement.

### Business performance

- [ ] Compare actual acquisition cost with contribution margin.
- [ ] Compare forecasted and actual fulfillment costs.
- [ ] Track refund, return, chargeback, and support rates.
- [ ] Track inventory sell-through and cash recovery.
- [ ] Determine whether paid search can scale without destroying margin.
- [ ] Identify organic/referral demand separately from paid demand.

### Iterate deliberately

- [ ] Prioritize changes supported by repeated evidence.
- [ ] Avoid redesigning the entire brand around one loud response.
- [ ] Correct safety or quality problems immediately.
- [ ] Update packaging or product specification only with version control.
- [ ] Decide whether to reorder, improve, change suppliers, or stop.

**Phase gate:** The real product—not only the message—shows enough customer value and operational viability to justify another production decision.

---

## Phase 14 — Explore retail placement

**Objective:** Pursue the original vision of reality receiving literal shelf space, after the product has evidence behind it.

### Retail readiness

- [ ] Establish reliable production capacity and lead times.
- [ ] Demonstrate sales history, conversion, repeat purchase, and customer feedback.
- [ ] Prepare wholesale pricing and minimum order quantities.
- [ ] Confirm margin works for both Enough and the retailer.
- [ ] Create case packs, carton labels, and retailer-compliant shipping configurations.
- [ ] Obtain all required barcodes, insurance, documentation, and vendor information.
- [ ] Prepare a concise line sheet.
- [ ] Prepare a retail pitch deck built around evidence rather than aspiration alone.

### Retail strategy

- [ ] Identify the best first channel:
  - Independent boutiques.
  - Local stores.
  - Specialty beauty retailers.
  - Drugstores.
  - Larger national chains.
- [ ] Start with retailers whose customers and merchandising fit the brand.
- [ ] Research buyer calendars and submission procedures.
- [ ] Prepare samples for buyers.
- [ ] Explain why Enough belongs specifically in the women’s aisle.
- [ ] Negotiate payment terms, returns, chargebacks, allowances, and promotional requirements carefully.
- [ ] Avoid accepting a large retail order that cannot be financed or fulfilled safely.

### In-store learning

- [ ] Verify actual shelf placement rather than assuming buyer intent controls store execution.
- [ ] Photograph and document placement with permission.
- [ ] Track sell-through by location where data is available.
- [ ] Learn whether the package communicates from normal shelf distance.
- [ ] Revise retail materials based on real buyer and customer behavior.

**Phase gate:** Enough can enter retail without threatening product quality, cash flow, or the integrity of its positioning.

---

## Phase 15 — Ongoing project management

**Objective:** Keep the project understandable, recoverable, and evidence-driven.

### Project records

- [ ] Maintain one decision log with date, decision, evidence, and reason.
- [ ] Maintain a test log for each ad or landing-page experiment.
- [ ] Maintain a supplier-contact and quote table.
- [ ] Maintain a sample-testing table.
- [ ] Maintain a current landed-cost model.
- [ ] Maintain a claims-evidence file linking every material claim to support.
- [ ] Maintain organized folders for:
  - Brand assets.
  - Editable source files.
  - Website.
  - Survey research.
  - Advertising.
  - Suppliers and quotes.
  - Samples and tests.
  - Compliance and insurance.
  - Production batches.
  - Customer issues.
  - Retail materials.

### Backups and version control

- [ ] Use Git for website source and meaningful code changes.
- [ ] Back up original photography and layered design files.
- [ ] Keep production artwork versions immutable after approval.
- [ ] Keep sensitive business and customer information out of public repositories.
- [ ] Export periodic backups of critical third-party data.
- [ ] Document credentials and account ownership securely outside the repository.

### Decision discipline

- [ ] Give each experiment one primary question.
- [ ] Decide success/inconclusive/failure criteria before reading results.
- [ ] Distinguish evidence about the ad, page, product, audience, price, and operations.
- [ ] Do not treat one failed component as proof that the entire idea—or Ash—is invalid.
- [ ] Do not treat emotional resonance alone as proof of a viable physical product.
- [ ] Do not place a large inventory order because the concept receives compliments.
- [ ] Do not let later-phase tasks delay a small, safe, informative validation test.

---

# Immediate critical path

These are the tasks that matter **now**, in order:

## A. Finish launch-readiness work

- [ ] Add and verify the Privacy page.
- [ ] Add footer and Privacy links near both forms.
- [ ] Add the early development/not-for-sale notice.
- [ ] Add metadata, favicon, and social-sharing image.
- [ ] Compress large images.
- [ ] Complete mobile, accessibility, and browser QA.
- [ ] Run lint and production build.

## B. Publish a stable public version

- [ ] Create the GitHub repository.
- [ ] Check carefully for secrets and private files.
- [ ] Configure GitHub Pages and the Vite base path.
- [ ] Deploy and test the public URL on desktop and Pixel.
- [ ] Verify both forms, the survey, and all links from the deployed site.

## C. Make the first test measurable

- [ ] Choose and implement the minimum Google Ads conversion measurement.
- [ ] Preserve useful campaign attribution without connecting it to anonymous survey responses.
- [ ] Test every event before buying traffic.
- [ ] Update the Privacy Policy to match the enabled measurement tools.

## D. Write the test plan before launch

- [ ] Finalize the research question.
- [ ] Set the budget and stop rules.
- [ ] Define promising, inconclusive, and discouraging results.
- [ ] Clean and group the initial keywords.
- [ ] Write two ad-message variants.
- [ ] Record the launch configuration.

## E. Launch, observe, and decide

- [ ] Turn on the limited campaign.
- [ ] Protect the budget from irrelevant searches.
- [ ] Collect quantitative and qualitative responses.
- [ ] Write a short findings report.
- [ ] Choose the next experiment based on the weakest link.

## F. Continue sourcing in parallel without placing a production order

- [ ] Build the supplier comparison table.
- [ ] Request exact-model samples and missing commercial details.
- [ ] Test samples against the WinCo benchmark.
- [ ] Do not commit to custom production until both the audience evidence and physical product support it.

---

# Current definition of success

The immediate success condition is not “Enough becomes a national razor company.” It is:

> A woman Ash does not know encounters Enough through a deliberate campaign, recognizes that it was made with women like her in mind, and voluntarily chooses to respond.

That result would not finish the project. It would prove that the bridge between Ash’s idea and its intended audience can exist—and give the next phase real evidence to build on.
