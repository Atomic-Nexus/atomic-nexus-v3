import type { Metadata } from "next"
import LegalPageLayout from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "Terms & Conditions | Atomic Nexus",
  description: "Terms and conditions for using Atomic Nexus services and website.",
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      dates={{
        effectiveDate: "March 10th, 2025",
        lastUpdated: "March 10th, 2025",
      }}
    >
      <p className="mb-6">
        Welcome to Atomic Nexus ("Company," "we," "us," or "our"). By accessing and using our website, atomicnexus.io
        ("Website"), you agree to comply with these Terms & Conditions ("T&C"). If you do not agree, please do not use
        our Website.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">1. Use of the Website</h2>

      <h3 className="text-lg font-medium mb-2">1.1 Eligibility</h3>
      <p className="mb-4">
        By using this Website, you confirm that you are at least 18 years old or have parental/guardian consent if under
        18.
      </p>

      <h3 className="text-lg font-medium mb-2">1.2 Prohibited Activities</h3>
      <p className="mb-4">You must not:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Violate any laws or regulations</li>
        <li>Use the Website for fraudulent purposes</li>
        <li>Distribute malware or attempt hacking</li>
        <li>Engage in harassment, hate speech, or unlawful activity</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">1.3 Account Registration (If Applicable)</h3>
      <p className="mb-6">
        If you create an account, you must provide accurate and complete information. You are responsible for
        maintaining account security and for all activities under your account.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">2. Purchases & Payments</h2>

      <h3 className="text-lg font-medium mb-2">2.1 Payment Processing</h3>
      <p className="mb-4">All transactions are securely processed via Stripe. We do not store payment details.</p>

      <h3 className="text-lg font-medium mb-2">2.2 Pricing & Taxes</h3>
      <p className="mb-4">
        Prices on the Website are displayed in [Currency] and may include/exclude taxes, depending on location.
      </p>

      <h3 className="text-lg font-medium mb-2">2.3 Refund Policy</h3>
      <p className="mb-6">
        Refund eligibility varies depending on the product/service purchased. See our{" "}
        <a href="/refund" className="text-electric-cyan hover:underline">
          Refund & Return Policy
        </a>{" "}
        for details.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">3. Intellectual Property</h2>

      <h3 className="text-lg font-medium mb-2">3.1 Ownership</h3>
      <p className="mb-4">
        All content, trademarks, logos, and intellectual property on this Website are owned by Atomic Nexus or licensed
        to us.
      </p>

      <h3 className="text-lg font-medium mb-2">3.2 Limited License</h3>
      <p className="mb-6">
        Users may access content for personal, non-commercial use only. Unauthorized use, reproduction, or distribution
        is prohibited.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">4. Disclaimers & Limitations of Liability</h2>

      <h3 className="text-lg font-medium mb-2">4.1 General Disclaimer</h3>
      <p className="mb-4">
        The information on this Website is provided "as is" without warranties of any kind. We do not guarantee that:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>The Website will be error-free or uninterrupted</li>
        <li>Information provided is 100% accurate or complete</li>
        <li>Services will meet your expectations</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">4.2 No Professional Advice</h3>
      <p className="mb-4">
        Content on this Website does not constitute legal, financial, or professional advice. Always consult a qualified
        professional before making decisions based on Website content.
      </p>

      <h3 className="text-lg font-medium mb-2">4.3 Limitation of Liability</h3>
      <p className="mb-6">To the fullest extent permitted by law, Atomic Nexus is not liable for:</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Indirect, incidental, or consequential damages</li>
        <li>Loss of data, profits, or business opportunities</li>
        <li>Unauthorized access to or use of your data</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">5. External Links & Third-Party Services</h2>
      <p className="mb-6">
        Our Website may contain links to third-party websites. We are not responsible for their content, policies, or
        practices. Use third-party services at your own risk.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">6. Data Protection & Privacy</h2>
      <p className="mb-6">
        Your use of the Website is governed by our{" "}
        <a href="/privacy" className="text-electric-cyan hover:underline">
          Privacy & Cookie Policy
        </a>
        , which explains how we collect and process data.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">7. User Comments & Community Guidelines</h2>

      <h3 className="text-lg font-medium mb-2">7.1 User-Generated Content</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Our blog allows visitors to post comments via Disqus.</li>
        <li>You are solely responsible for the content you post.</li>
        <li>We do not endorse or verify user comments.</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">7.2 Prohibited Content</h3>
      <p className="mb-4">You must not post comments that:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Contain hate speech, harassment, or threats</li>
        <li>Include spam, advertisements, or self-promotion</li>
        <li>Share illegal, defamatory, or false information</li>
        <li>Violate intellectual property rights (e.g., copyright infringement)</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">7.3 Moderation & Removal</h3>
      <p className="mb-4">
        We reserve the right to remove or moderate comments at our discretion. If you see inappropriate content, report
        it to{" "}
        <a href="mailto:info@atomicnexus.io" className="text-electric-cyan hover:underline">
          info@atomicnexus.io
        </a>
        .
      </p>

      <h3 className="text-lg font-medium mb-2">7.4 Liability Disclaimer</h3>
      <p className="mb-6">
        We are not responsible for any opinions or content shared by users in comments. Users post at their own risk and
        should not assume comments reflect our views.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">8. Termination of Use</h2>
      <p className="mb-6">
        We reserve the right to suspend or terminate your access if you violate these T&C or engage in prohibited
        activities.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">9. Changes to These Terms</h2>
      <p className="mb-6">
        We may update these T&C at any time. Continued use of the Website after changes means you accept the updated
        terms.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">10. Governing Law & Dispute Resolution</h2>
      <p className="mb-6">
        These T&C are governed by the laws of Finland. Any disputes shall be resolved in Finnish courts, unless
        otherwise required by applicable laws.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">11. Contact Information</h2>
      <p className="mb-6">
        If you have questions about these Terms, contact us at:
        <br />
        Email:{" "}
        <a href="mailto:info@atomicnexus.io" className="text-electric-cyan hover:underline">
          info@atomicnexus.io
        </a>
      </p>
    </LegalPageLayout>
  )
}

