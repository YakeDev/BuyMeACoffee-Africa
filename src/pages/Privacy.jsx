import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useI18n } from "../context/I18nContext";
import BackToTop from "../components/BackToTop";
import PrivacySidebar from "../components/PrivacySidebar";


const Privacy = () => {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      {/* Use flex layout similar to Guide.jsx */}

      <main id="privacy-top" className="page-shell pt-32 pb-24 scroll-mt-20">
        <div className="flex w-full max-w-7xl px-20 gap-32 relative"> {/* Adjusted padding/gap */}

          {/* Sidebar Area */}
          <aside className="hidden lg:block w-60 xl:w-64 sticky top-42 self-start max-h-[calc(100vh-150px)] overflow-y-auto pr-2"> {/* Adjusted top offset */}
            <PrivacySidebar />
          </aside>

          {/* Main Content Area - Wrap in article */}
          <article className="flex-1 space-y-12 text-[var(--text-secondary)] min-w-0"> {/* Use article, add space-y */}
            <section className="text-center">
            <img
                src={t('guide.header.imageUrl', {defaultValue: '/Download premium vector of Cup of cappuccino with tree vector about latte art, coffee cup, coffee, coffee logo, and latte art vector 503390 (1) (1).png'})}
                alt={t('guide.header.imageAlt', {defaultValue: 'Logo'})}
                className="w-40 h-40 mx-auto mb-1" // Adjusted size
              />
              {/* Note: ID added here for potential linking, though usually linked via sections below */}
              <h1 id="buymeacoffee-africa-title" className="text-xl font-heading font-bold text-[var(--text-primary)] mb-4 scroll-mt-24">
                 {t('guide.header.title', {defaultValue: 'BuyMeACoffee-Africa'})}
              </h1>
            {/* Header */}
            <div className="mb-10">
              <div className="mx-auto h-px w-full max-w-lg mb-6 "></div>
              <h1 className="text-4xl font-heading font-bold text-[var(--text-primary)] mb-4 scroll-mt-28 border-b border-[var(--surface-card-border)] pb-3 mt-4"> {/* Added scroll-mt */}
                Privacy Policy
              </h1>
              <div className="text-sm text-[var(--text-muted)] space-y-1">
                <p>Effective Date: January 1, 2025</p>
                <p>Last Updated: January 1, 2025</p>
              </div>
            </div>
            </section>
            {/* Content Sections */}
            <div className="space-y-10"> {/* Removed outer div, relying on article's space-y */}
              {/* Introduction */}
              <section id="introduction"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Welcome to BuyMeACoffee-Africa ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our platform.
                </p>
                <p className="leading-relaxed mt-4">
                  By using BuyMeACoffee-Africa, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              {/* Section 1 */}
              <section id="info-collected"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  Information We Collect
                </h2>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24"> {/* Added scroll-mt */}
                  Personal Information
                </h3>
                {/* ... rest of section 1 content ... */}
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, username, and password</li>
                  <li><strong>Profile Information:</strong> Profile picture, bio, creator description, and links to your social media or website</li>
                  <li><strong>Payment Information:</strong> Mobile Money number, transaction details, and payment history</li>
                  <li><strong>Communication Data:</strong> Messages, support inquiries, and feedback you send to us</li>
                </ul>


                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24"> {/* Added scroll-mt */}
                  Automatically Collected Information
                </h3>
                 {/* ... rest of section 1.2 content ... */}
                 <p className="leading-relaxed mb-3">
                   We automatically collect certain information when you use our platform:
                 </p>
                 <ul className="list-disc pl-6 space-y-2">
                   <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, and navigation patterns</li>
                   <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                   <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience</li>
                 </ul>

                 <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24"> {/* Added scroll-mt */}
                   Third-Party Information
                 </h3>
                 {/* ... rest of section 1.3 content ... */}
                  <p className="leading-relaxed mb-3">
                    If you sign in using third-party services (e.g., GitHub, Google), we may receive:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Basic profile information (name, email, profile picture)</li>
                    <li>Public repository information (for GitHub authentication)</li>
                    <li>Any other information you authorize the third-party service to share</li>
                  </ul>
              </section>

              {/* Section 2 */}
              <section id="info-use"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  How We Use Your Information
                </h2>
                {/* ... rest of section 2 content ... */}
                  <p className="leading-relaxed mb-4">
                    We use your personal information for the following purposes:
                  </p>
                   {/* ... rest of section 2 sub-sections ... */}
                   <div className="space-y-4">
                     {/* ... (Service Delivery, Platform Improvement, etc.) ... */}
                      <div>
                        <h3 className="text-2x1 font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">Service Delivery</h3> {/* Add scroll-mt */}
                        {/* ... ul ... */}
                         <ul className="list-disc pl-6 space-y-1">
                           <li>Creating and managing your account</li>
                           <li>Processing donations and payments</li>
                           <li>Enabling communication between creators and supporters</li>
                           <li>Providing customer support</li>
                         </ul>
                      </div>
                      {/* Add scroll-mt-24 to other h3 elements in this section too */}
                      <div>
                        <h3 className="text-2x1 font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">Platform Improvement</h3>
                         <ul className="list-disc pl-6 space-y-1">
                           <li>Analyzing usage patterns to improve our services</li>
                           <li>Developing new features and functionality</li>
                           <li>Conducting research and analytics</li>
                         </ul>
                      </div>
                      <div>
                        <h3 className="text-2x1 font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">Communication</h3>
                         <ul className="list-disc pl-6 space-y-1">
                           <li>Sending transactional emails (donation confirmations, account updates)</li>
                           <li>Providing important service announcements</li>
                           <li>Responding to your inquiries and support requests</li>
                           <li>Sending marketing communications (with your consent)</li>
                         </ul>
                      </div>
                       <div>
                         <h3 className="text-2x1 font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">Security and Compliance</h3>
                         <ul className="list-disc pl-6 space-y-1">
                           <li>Detecting and preventing fraud, abuse, and security incidents</li>
                           <li>Enforcing our Terms of Service</li>
                           <li>Complying with legal obligations and regulations</li>
                         </ul>
                       </div>
                   </div>
              </section>

              {/* Section 3 */}
              <section id="info-share"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  How We Share Your Information
                </h2>
                {/* ... rest of section 3 content ... */}
                  <p className="leading-relaxed mb-4">
                    <strong>We do not sell your personal information.</strong> We may share your data only in the following circumstances:
                  </p>
                  {/* ... rest of section 3 ul ... */}
                   <div className="bg-[rgba(225,169,72,0.1)] border border-[rgba(225,169,72,0.3)] rounded-lg p-4 mb-4">
                      <p className="text-sm text-[var(--color-coffee)]">
                       <strong>Important:</strong> Your privacy is our priority. We only share information when necessary to provide services or comply with legal requirements.
                     </p>
                   </div>
                   <ul className="list-disc pl-6 space-y-3">
                     <li><strong>With Your Consent:</strong> When you explicitly authorize us to do so</li>
                     <li><strong>Service Providers:</strong> Payment processors, cloud hosting, authentication services, and analytics providers</li>
                     <li><strong>Public Information:</strong> Creator profiles and usernames you choose to make public</li>
                     <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                     <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                   </ul>
              </section>

              {/* Section 4 */}
              <section id="data-security"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  Data Storage and Security
                </h2>
                {/* ... rest of section 4 content ... */}
                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 scroll-mt-24">Security Measures</h3> {/* Add scroll-mt */}
                {/* ... rest of 4.1 content ... */}
                 <p className="leading-relaxed mb-3">
                   We implement industry-standard security measures to protect your data:
                 </p>
                 <ul className="list-disc pl-6 space-y-2">
                   <li>Encryption of data in transit (HTTPS/TLS)</li>
                   <li>Encryption of sensitive data at rest</li>
                   <li>Password hashing using bcrypt</li>
                   <li>Regular security audits and updates</li>
                   <li>Access controls and authentication mechanisms</li>
                   <li>Secure token-based authentication (JWT)</li>
                 </ul>

                 <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">Data Retention</h3> {/* Add scroll-mt */}
                 {/* ... rest of 4.2 content ... */}
                  <p className="leading-relaxed">
                    We retain your personal information for as long as your account is active or as needed to provide services. If you delete your account, we will delete or anonymize your data within 90 days, except where we must retain it for legal or regulatory purposes.
                  </p>
              </section>

              {/* Section 5 */}
              <section id="rights-choices"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  Your Rights and Choices
                </h2>
                {/* ... rest of section 5 content ... */}
                 <p className="leading-relaxed mb-4">
                   Depending on your location, you may have the following rights regarding your personal data:
                 </p>
                 {/* ... rest of section 5 grid ... */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* ... (Access, Correction, etc.) ... */}
                     <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                       <h4 className="font-medium text-[var(--text-primary)] mb-2">Access & Portability</h4>
                       <ul className="text-sm space-y-1">
                         <li>• Request a copy of your data</li>
                         <li>• Receive data in a portable format</li>
                       </ul>
                     </div>
                     {/* Add scroll-mt-24 to other h4 elements if needed */}
                      <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                        <h4 className="font-medium text-[var(--text-primary)] mb-2">Correction & Deletion</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Update inaccurate information</li>
                          <li>• Request deletion of your data</li>
                        </ul>
                      </div>
                      <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                        <h4 className="font-medium text-[var(--text-primary)] mb-2">Consent Management</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Withdraw consent anytime</li>
                          <li>• Opt-out of marketing emails</li>
                        </ul>
                      </div>
                      <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                        <h4 className="font-medium text-[var(--text-primary)] mb-2">Restriction & Objection</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Request limited processing</li>
                          <li>• Object to certain uses</li>
                        </ul>
                      </div>
                  </div>
                 <p className="leading-relaxed">
                   To exercise any of these rights, please contact us at <a href="mailto:privacy@buymeacoffee-africa.com" className="font-medium text-[var(--color-coffee)] hover:text-[var(--color-espresso)]">privacy@buymeacoffee-africa.com</a>
                 </p>
              </section>

              {/* Section 6 */}
              <section id="childrens-privacy"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  Children's Privacy
                </h2>
                {/* ... rest of section 6 content ... */}
                <p className="leading-relaxed">
                   BuyMeACoffee-Africa is not intended for children under 13 years of age (or under 16 in the European Union). We do not knowingly collect personal information from children. If we discover that we have collected data from a child, we will delete it immediately. If you believe we have collected information from a child, please contact us.
                 </p>
              </section>

              {/* Contact Section */}
              <section id="contact-us" className="mt-12 pt-8 border-t border-[var(--surface-card-border)]"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  Contact Us
                </h2>
                {/* ... rest of contact section content ... */}
                  <p className="leading-relaxed mb-4">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-[var(--surface-card-bg)] border border-[var(--surface-card-border)] rounded-lg p-6 space-y-2">
                    <p className="text-[var(--text-secondary)]">
                      <strong>Email:</strong> <a href="mailto:privacy@buymeacoffee-africa.com" className="text-[var(--color-coffee)] hover:text-[var(--color-espresso)] hover:underline">privacy@buymeacoffee-africa.com</a>
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      <strong>Support:</strong> <a href="mailto:support@buymeacoffee-africa.com" className="text-[var(--color-coffee)] hover:text-[var(--color-espresso)] hover:underline">support@buymeacoffee-africa.com</a>
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      <strong>GitHub:</strong> <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa" target="_blank" rel="noopener noreferrer" className="text-[var(--color-coffee)] hover:text-[var(--color-espresso)] hover:underline">github.com/2MJ-DEV/BuyMeACoffee-Africa</a>
                    </p>
                  </div>
              </section>
            </div>
          </article> {/* End Article */}
        </div> {/* End Main Container Div */}
      </main>

      <BackToTop t={t} />

      <Footer />
    </>
  );
};

export default Privacy;