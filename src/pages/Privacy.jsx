import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useI18n } from "../context/I18nContext";

const Privacy = () => {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[55%] mx-auto px-6 py-24">
          {/* Header */}
          <div className="mb-10 mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-yellow-500 transition mb-6"
            >
              ← {t("common.actions.backToHome")}
            </Link>
            <h1 className="text-4xl font-bold text-black/90 mb-4">
              Privacy Policy
            </h1>
            <div className="text-sm text-zinc-500 space-y-1">
              <p>Effective Date: January 1, 2025</p>
              <p>Last Updated: January 1, 2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-zinc max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                Introduction
              </h2>
              <p className="text-zinc-700 leading-relaxed">
                Welcome to BuyMeACoffee-Africa ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our platform.
              </p>
              <p className="text-zinc-700 leading-relaxed mt-4">
                By using BuyMeACoffee-Africa, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-black/85 mb-3 mt-6">
                1.1 Personal Information
              </h3>
              <p className="text-zinc-700 leading-relaxed mb-3">
                When you create an account or use our services, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li><strong>Account Information:</strong> Name, email address, username, and password</li>
                <li><strong>Profile Information:</strong> Profile picture, bio, creator description, and links to your social media or website</li>
                <li><strong>Payment Information:</strong> Mobile Money number, transaction details, and payment history</li>
                <li><strong>Communication Data:</strong> Messages, support inquiries, and feedback you send to us</li>
              </ul>

              <h3 className="text-xl font-medium text-black/85 mb-3 mt-6">
                1.2 Automatically Collected Information
              </h3>
              <p className="text-zinc-700 leading-relaxed mb-3">
                We automatically collect certain information when you use our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, and navigation patterns</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience</li>
              </ul>

              <h3 className="text-xl font-medium text-black/85 mb-3 mt-6">
                1.3 Third-Party Information
              </h3>
              <p className="text-zinc-700 leading-relaxed mb-3">
                If you sign in using third-party services (e.g., GitHub, Google), we may receive:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Basic profile information (name, email, profile picture)</li>
                <li>Public repository information (for GitHub authentication)</li>
                <li>Any other information you authorize the third-party service to share</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-black/85 mb-2">Service Delivery</h3>
                  <ul className="list-disc pl-6 space-y-1 text-zinc-700">
                    <li>Creating and managing your account</li>
                    <li>Processing donations and payments</li>
                    <li>Enabling communication between creators and supporters</li>
                    <li>Providing customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black/85 mb-2">Platform Improvement</h3>
                  <ul className="list-disc pl-6 space-y-1 text-zinc-700">
                    <li>Analyzing usage patterns to improve our services</li>
                    <li>Developing new features and functionality</li>
                    <li>Conducting research and analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black/85 mb-2">Communication</h3>
                  <ul className="list-disc pl-6 space-y-1 text-zinc-700">
                    <li>Sending transactional emails (donation confirmations, account updates)</li>
                    <li>Providing important service announcements</li>
                    <li>Responding to your inquiries and support requests</li>
                    <li>Sending marketing communications (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black/85 mb-2">Security and Compliance</h3>
                  <ul className="list-disc pl-6 space-y-1 text-zinc-700">
                    <li>Detecting and preventing fraud, abuse, and security incidents</li>
                    <li>Enforcing our Terms of Service</li>
                    <li>Complying with legal obligations and regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                3. How We Share Your Information
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                <strong>We do not sell your personal information.</strong> We may share your data only in the following circumstances:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-900">
                  <strong>Important:</strong> Your privacy is our priority. We only share information when necessary to provide services or comply with legal requirements.
                </p>
              </div>

              <ul className="list-disc pl-6 space-y-3 text-zinc-700">
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to do so</li>
                <li><strong>Service Providers:</strong> Payment processors, cloud hosting, authentication services, and analytics providers</li>
                <li><strong>Public Information:</strong> Creator profiles and usernames you choose to make public</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                4. Data Storage and Security
              </h2>

              <h3 className="text-xl font-medium text-black/85 mb-3">Security Measures</h3>
              <p className="text-zinc-700 leading-relaxed mb-3">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Encryption of data in transit (HTTPS/TLS)</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Password hashing using bcrypt</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure token-based authentication (JWT)</li>
              </ul>

              <h3 className="text-xl font-medium text-black/85 mb-3 mt-6">Data Retention</h3>
              <p className="text-zinc-700 leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide services. If you delete your account, we will delete or anonymize your data within 90 days, except where we must retain it for legal or regulatory purposes.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                5. Your Rights and Choices
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="border border-zinc-200 rounded-lg p-4">
                  <h4 className="font-medium text-black/85 mb-2">Access & Portability</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Request a copy of your data</li>
                    <li>• Receive data in a portable format</li>
                  </ul>
                </div>
                <div className="border border-zinc-200 rounded-lg p-4">
                  <h4 className="font-medium text-black/85 mb-2">Correction & Deletion</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Update inaccurate information</li>
                    <li>• Request deletion of your data</li>
                  </ul>
                </div>
                <div className="border border-zinc-200 rounded-lg p-4">
                  <h4 className="font-medium text-black/85 mb-2">Consent Management</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Withdraw consent anytime</li>
                    <li>• Opt-out of marketing emails</li>
                  </ul>
                </div>
                <div className="border border-zinc-200 rounded-lg p-4">
                  <h4 className="font-medium text-black/85 mb-2">Restriction & Objection</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Request limited processing</li>
                    <li>• Object to certain uses</li>
                  </ul>
                </div>
              </div>

              <p className="text-zinc-700 leading-relaxed">
                To exercise any of these rights, please contact us at <strong className="text-yellow-600">privacy@buymeacoffee-africa.com</strong>
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                6. Children's Privacy
              </h2>
              <p className="text-zinc-700 leading-relaxed">
                BuyMeACoffee-Africa is not intended for children under 13 years of age (or under 16 in the European Union). We do not knowingly collect personal information from children. If we discover that we have collected data from a child, we will delete it immediately. If you believe we have collected information from a child, please contact us.
              </p>
            </section>

            {/* Contact Section */}
            <section className="mt-12 pt-8 border-t border-zinc-200">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                Contact Us
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-zinc-50 rounded-lg p-6 space-y-2">
                <p className="text-zinc-800">
                  <strong>Email:</strong> <a href="mailto:privacy@buymeacoffee-africa.com" className="text-yellow-600 hover:underline">privacy@buymeacoffee-africa.com</a>
                </p>
                <p className="text-zinc-800">
                  <strong>Support:</strong> <a href="mailto:support@buymeacoffee-africa.com" className="text-yellow-600 hover:underline">support@buymeacoffee-africa.com</a>
                </p>
                <p className="text-zinc-800">
                  <strong>GitHub:</strong> <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">github.com/2MJ-DEV/BuyMeACoffee-Africa</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
