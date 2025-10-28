import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Assuming path is correct
import Footer from '../components/Footer'; // Assuming path is correct
import { useI18n } from '../context/I18nContext'; // Assuming path is correct
import { Link } from 'react-router-dom';
import { ArrowUpCircle } from 'lucide-react'; // Import the icon
import GuideSidebar from '../components/GuideSidebar'; // Import the new sidebar

// Assuming the logo image is moved to public and path updated in guide.md/en.json
// Or import it if moved to src/assets:
// import logoImage from '/Download premium vector of Cup of cappuccino with tree vector about latte art, coffee cup, coffee, coffee logo, and latte art vector 503390 (1) (1).png';
// Import other images similarly if needed, e.g.:
// import overviewScreenshot from '/Preview.png'; // Example using an existing image
// import gettingStartedScreenshot from '/About1.png'; // Example

const Guide = () => {
  const { t } = useI18n();

  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  // Helper for "Back to top" links and button
  const scrollToTop = (e) => {
    e.preventDefault();
    const topElement = document.getElementById('guide-top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      {/* Changed container: Use flex, wider max-width, gap */}
      <main id="guide-top" className="page-shell pt-32 pb-24 scroll-mt-20">
        {/* MODIFIED container div */}
        <div className="flex w-full max-w-7xl px-20 gap-30 relative"> {/* Increased gap */}

          {/* Sidebar Area */}
          <aside className="hidden lg:block w-60 xl:w-64 sticky top-42 self-start max-h-[calc(100vh-150px)] overflow-y-auto pr-2"> {/* Adjusted top, added max-height/overflow */}
            <GuideSidebar />
          </aside>

          {/* Main Content Area */}
          {/* Use 'flex-1' to take remaining space, min-w-0 prevents overflow issues */}
          <article className="flex-1 space-y-12 text-[var(--text-secondary)] min-w-0">

            {/* --- Header/Intro --- */}
            <section className="text-center">
               {/* Use the actual image path from public */}
              <img
                src={t('guide.header.imageUrl', {defaultValue: '/Download premium vector of Cup of cappuccino with tree vector about latte art, coffee cup, coffee, coffee logo, and latte art vector 503390 (1) (1).png'})}
                alt={t('guide.header.imageAlt', {defaultValue: 'Logo'})}
                className="w-40 h-40 mx-auto mb-4" // Adjusted size
              />
              {/* Note: ID added here for potential linking, though usually linked via sections below */}
              <h1 id="buymeacoffee-africa-title" className="text-4xl font-heading font-bold text-[var(--text-primary)] mb-4 scroll-mt-24">
                 {t('guide.header.title', {defaultValue: 'BuyMeACoffee-Africa'})}
              </h1>
              <p className="mb-4 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
                {t('guide.header.description_prefix', { defaultValue: "Welcome to " })}
                <strong>{t('guide.header.description_bold', { defaultValue: 'BuyMeACoffee Africa' })}</strong>
                {t('guide.header.description_suffix', { defaultValue: ", an African platform inspired by Buy Me a Coffee..." })}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold">
                   {t('guide.header.exploreDocs', {defaultValue: 'Explore the docs »'})}
                 </a>
                <a href="https://buymeacoffeeafrica.vercel.app/en" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold">
                   {t('guide.header.viewDemo', {defaultValue: 'View Demo'})}
                 </a>
                <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa/issues/new?labels=bug&template=bug-report---.md" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold">
                   {t('guide.header.reportBug', {defaultValue: 'Report Bug'})}
                 </a>
                <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa/issues/new?labels=enhancement&template=feature-request---.md" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold">
                   {t('guide.header.requestFeature', {defaultValue: 'Request Feature'})}
                 </a>
              </div>
            </section>

             {/* --- Overview Section --- */}
            <section id="overview"> {/* <-- ADD ID HERE */}
              <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                {t('guide.overview.title', { defaultValue: 'Overview' })}
              </h2>
               {/* Example using an image from public */}
              <img src={"https://github.com/user-attachments/assets/b6d48b35-e38a-4746-a2a2-b7fec63bff65"} alt={t('guide.overview.imageAlt', { defaultValue: 'Overview Screenshot' })} className="w-full rounded-lg shadow-md my-6 border border-[var(--surface-card-border)]"/>
              <p className="leading-relaxed mb-4">
                 {t('guide.overview.intro', {defaultValue: 'BuyMeACoffee Africa offers a simple, fast, and local way to support your favorite creators.'})}
              </p>
              <p className="leading-relaxed mb-4">
                 {t('guide.overview.creatorProfile', {defaultValue: 'Each creator has their own profile page where visitors can:'})}
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>{t('guide.overview.discover', {defaultValue: 'Discover their work'})}</li>
                <li>{t('guide.overview.donate', {defaultValue: 'Send them a donation'})}</li>
                <li>{t('guide.overview.encourage', {defaultValue: 'Encourage them with a message'})}</li>
              </ul>
              <p className="leading-relaxed">
                 {t('guide.overview.platform', {defaultValue: 'The platform is 100% web and optimized for use on mobile, tablet, and PC.'})}
              </p>
              {/* Removed BackToTopLink */}
            </section>

            {/* --- Getting Started Section --- */}
            <section id="getting-started"> {/* <-- ADD ID HERE */}
              <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                 {t('guide.gettingStarted.title', { defaultValue: 'Getting Started' })}
              </h2>
              <p className="leading-relaxed mb-4">
                 {t('guide.gettingStarted.intro', { defaultValue: 'To start supporting your favourite creator, you first need to:' })}
              </p>
               <h3 id="create-account" className="text-2xl font-heading font-medium text-[var(--text-primary)] mt-6 mb-3 scroll-mt-24"> {/* Added ID and scroll-mt */}
                {t('guide.gettingStarted.createAccount.title', { defaultValue: 'Create an account' })}
              </h3>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                 <li>{t('guide.gettingStarted.createAccount.step1', {defaultValue: 'Go to the homepage'})} (<a href="https://buymeacoffeeafrica.vercel.app/en" target="_blank" rel="noopener noreferrer" className="text-[var(--color-coffee)] hover:underline">link</a>)</li>
                 <li>{t('guide.gettingStarted.createAccount.step2', {defaultValue: 'Click on "Get Started Free".'})}</li>
                 <li>{t('guide.gettingStarted.createAccount.step3', {defaultValue: 'Choose your registration method via:'})}
                   <ul className="list-disc pl-6 mt-1">
                     <li>{t('guide.gettingStarted.createAccount.methodGoogle', {defaultValue: 'Google Account (quick login)'})}</li>
                     <li>{t('guide.gettingStarted.createAccount.methodEmail', {defaultValue: 'email address'})}</li>
                   </ul>
                 </li>
              </ol>
               {/* --- Add the Video Here --- */}
              <div className="my-6"> {/* Add margin */}
                  <video
                      src="https://github.com/user-attachments/assets/564a6f32-a243-493c-91c3-25a4e39ad1c5"
                      loop // Add this attribute to make it loop
                      autoPlay // Add this to make it start playing automatically
                      muted
                      playsInline
                      className="w-full rounded-lg shadow-md border border-[var(--surface-card-border)]" // Style with Tailwind, maybe wider max-w-xl
                  >
                      {/* Fallback text */}
                      {t('guide.gettingStarted.videoNotSupported', { defaultValue: 'Your browser does not support the video tag.' })}
                  </video>
              </div>
              <p className="leading-relaxed mb-4 mt-6">{t('guide.gettingStarted.completeProfile', { defaultValue: 'Once logged in, complete your profile with:' })}</p>
              <ul className="list-disc pl-6 space-y-1">
                 <li>{t('guide.gettingStarted.profilePic', {defaultValue: 'A profile picture'})}</li>
                 <li>{t('guide.gettingStarted.profileBio', {defaultValue: 'A short bio'})}</li>
                 <li>{t('guide.gettingStarted.profileSocial', {defaultValue: 'Your social media links'})}</li>
                 <li>{t('guide.gettingStarted.profileMobileMoney', {defaultValue: 'Your Mobile Money number (to receive endorsements)'})}</li>
              </ul>
              {/* Removed BackToTopLink */}
            </section>

             {/* --- Discover Creators Section --- */}
            <section id="discover-creators"> {/* <-- ADD ID HERE */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                    {t('guide.discover.title', { defaultValue: 'Discover the creators' })}
                </h2>
                <p className="leading-relaxed mb-4">{t('guide.discover.intro', { defaultValue: 'From the homepage or dashboard, you can:' })}</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>{t('guide.discover.explore', { defaultValue: 'Explore the most popular creators' })}</li>
                    <li>{t('guide.discover.search', { defaultValue: 'Search for a creator by name or category' })}</li>
                    <li>{t('guide.discover.accessProfile', { defaultValue: 'Access their profile to learn more about them' })}</li>
                </ul>
                {/* Removed BackToTopLink */}
            </section>

             {/* --- Support a Creator Section --- */}
            <section id="support-creator"> {/* <-- ADD ID HERE */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                    {t('guide.support.title', { defaultValue: 'Support a creator' })}
                </h2>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                    <li>{t('guide.support.step1', { defaultValue: "Go to the creator's profile." })}</li>
                    <li>{t('guide.support.step2', { defaultValue: 'Click on “Give a coffee”.' })}</li>
                    <li>{t('guide.support.step3', { defaultValue: 'Select the amount to send (e.g., 1, 3, or 5 coffees).' })}</li>
                    <li>{t('guide.support.step4', { defaultValue: 'Choose your Mobile Money payment method:' })}
                        <ul className="list-[circle] pl-6 mt-1">
                            <li>{t('guide.support.methodAirtel', { defaultValue: 'Airtel Money' })}</li>
                            <li>{t('guide.support.methodOrange', { defaultValue: 'Orange Money' })}</li>
                            <li>{t('guide.support.methodMpesa', { defaultValue: 'M-Pesa' })}</li>
                        </ul>
                    </li>
                    <li>{t('guide.support.step5', { defaultValue: 'Confirm the transaction.' })}</li>
                </ol>
                <p className="leading-relaxed">{t('guide.support.confirmation', { defaultValue: 'Once the payment is validated, the creator receives an instant notification.' })}</p>
                {/* Removed BackToTopLink */}
            </section>

             {/* --- Dashboard Section --- */}
            <section id="dashboard"> {/* <-- ADD ID HERE */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                    {t('guide.dashboard.title', { defaultValue: 'Dashboard (for creators)' })}
                </h2>
                <p className="leading-relaxed mb-4">{t('guide.dashboard.intro', { defaultValue: 'The dashboard allows each creator to:' })}</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>{t('guide.dashboard.viewBackers', { defaultValue: 'View their total amount of backers received' })}</li>
                    <li>{t('guide.dashboard.viewMessages', { defaultValue: 'View messages from their backers' })}</li>
                    <li>{t('guide.dashboard.manageProfile', { defaultValue: 'Manage their profile and payment information' })}</li>
                    <li>{t('guide.dashboard.downloadReport', { defaultValue: 'Download an earnings report' })}</li>
                </ul>
                {/* Removed BackToTopLink */}
            </section>

             {/* --- Security & Privacy Section --- */}
            <section id="security-privacy"> {/* <-- ADD ID HERE */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                    {t('guide.security.title', { defaultValue: 'Security & Privacy' })}
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>{t('guide.security.payments', { defaultValue: 'Payments are processed securely via Mobile Money APIs.' })}</li>
                    <li>{t('guide.security.storage', { defaultValue: 'No banking information is stored on our servers.' })}</li>
                    <li>{t('guide.security.disablePage', { defaultValue: 'Creators can temporarily disable their public page if they wish.' })}</li>
                </ul>
                {/* Removed BackToTopLink */}
            </section>

            {/* --- FAQ Section --- */}
            <section id="faq"> {/* <-- ADD ID HERE */}
              <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                {t('guide.faq.title', { defaultValue: 'FAQ — Frequently Asked Questions' })}
              </h2>
              <div className="space-y-6"> {/* Increased spacing for Q&A */}
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{t('guide.faq.q1', { defaultValue: 'Q: Can I use multiple Mobile Money accounts?' })}</p>
                  <p className="mt-2 pl-4 border-l-4 border-[var(--surface-card-border)] text-[var(--text-muted)] italic">
                    {t('guide.faq.a2', { defaultValue: 'Yes, withdrawals are made automatically to your configured Mobile Money account.' }).replace(/^>\s*/, '')}
                  </p>
                </div>
                 <div>
                  <p className="font-semibold text-[var(--text-primary)]">{t('guide.faq.q2', { defaultValue: 'Q: Can I withdraw my funds directly?' })}</p>
                  <p className="mt-2 pl-4 border-l-4 border-[var(--surface-card-border)] text-[var(--text-muted)] italic">
                    {t('guide.faq.a2', { defaultValue: 'Yes, withdrawals are made automatically to your configured Mobile Money account.' }).replace(/^>\s*/, '')}
                  </p>
                </div>
                 <div>
                  <p className="font-semibold text-[var(--text-primary)]">{t('guide.faq.q3', { defaultValue: 'Q: Does the app work on smartphones?' })}</p>
                  <p className="mt-2 pl-4 border-l-4 border-[var(--surface-card-border)] text-[var(--text-muted)] italic">
                    {t('guide.faq.a3', { defaultValue: 'Yes! The app is fully responsive and optimized for all screens.' }).replace(/^>\s*/, '')}
                  </p>
                </div>
              </div>
              {/* Removed BackToTopLink */}
            </section>

             {/* --- Contact & Support Section --- */}
            <section id="contact-support"> {/* <-- ADD ID HERE */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                    {t('guide.contact.title', { defaultValue: 'Contact & Support' })}
                </h2>
                <p className="leading-relaxed mb-4">{t('guide.contact.intro', { defaultValue: 'If you encounter a problem or would like to suggest an improvement:' })}</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>{t('guide.contact.email', { defaultValue: 'Email:' })} <a href="mailto:support@buymeacoffee.africa" className="text-[var(--color-coffee)] hover:underline">support@buymeacoffee.africa</a></li>
                    <li>{t('guide.contact.discord', { defaultValue: 'Discord Community:' })} <a href="#" className="text-[var(--color-coffee)] hover:underline">{t('guide.contact.discordLinkText', { defaultValue: 'Join the server' })}</a></li> {/* Kept placeholder link */}
                </ul>
                {/* Removed BackToTopLink */}
            </section>

             {/* --- Coming Soon Section --- */}
            <section id="coming-soon"> {/* <-- ADD ID HERE */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                    {t('guide.comingSoon.title', { defaultValue: 'Coming Soon' })}
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>{t('guide.comingSoon.creditCard', { defaultValue: 'Integration of credit card payments' })}</li>
                    <li>{t('guide.comingSoon.subscription', { defaultValue: '"Monthly Subscription" feature' })}</li>
                    <li>{t('guide.comingSoon.discover', { defaultValue: '"Discover" section to highlight new creators' })}</li>
                </ul>
                <p className="font-semibold text-[var(--text-primary)]">
                    <a href="https://buymeacoffeeafrica.vercel.app/en" target="_blank" rel="noopener noreferrer" className="text-[var(--color-coffee)] hover:underline">
                      {t('guide.comingSoon.appName', { defaultValue: 'BuyMeACoffee Africa' })}
                    </a> — {t('guide.comingSoon.tagline', { defaultValue: 'Because supporting a creator should be as simple as buying them a coffee.' })}
                </p>
                {/* Removed BackToTopLink */}
            </section>

            {/* --- License Section --- */}
            <section id="license"> {/* <-- ADD ID HERE */}
              <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                 {t('guide.license.title', { defaultValue: 'License' })}
              </h2>
              <p className="leading-relaxed">
                 {t('guide.license.text', { defaultValue: 'Distributed under the MIT License. See' })} {' '}
                 <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--color-coffee)] hover:underline underline-offset-2">
                    LICENSE
                 </a> {' '}
                {t('guide.license.moreInfo', { defaultValue: 'for more information.' })}
              </p>
              {/* Removed BackToTopLink */}
            </section>

          </article> {/* End Article */}

          {/* Back to Top button Wrapper - Positioned inside main container */}
          <div className="fixed bottom-8 inset-x-0 z-50 pointer-events-none">
            <div className="mx-auto max-w-7xl px-6 flex justify-end pl-6 pr-8 md:pr-12"> {/* Match max-w-7xl */}
              <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-[var(--color-coffee)] text-[var(--color-cream)] shadow-lg
                         transition duration-200 ease-in-out // Ensure transition is present
                         hover:bg-[color-mix(in_srgb,var(--color-coffee)_88%,black)] // Darken bg on hover
                         hover:-translate-y-px // Slightly less movement than -1 if needed, or keep -1
                         hover:shadow-[0_22px_48px_rgba(107,62,38,0.28)] // More impactful shadow
                         mr-2 // Keep the margin adjustment if you liked it
                         pointer-events-auto"
                aria-label={t('guide.common.backToTop', { defaultValue: 'Back to top' })}
              >
                <ArrowUpCircle className="size-6" />
              </button>
            </div>
          </div>

        </div> {/* End Main Container Div */}
      </main>
      <Footer />
    </>
  );
};

export default Guide;