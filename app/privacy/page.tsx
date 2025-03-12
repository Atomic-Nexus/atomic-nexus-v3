import type { Metadata } from "next"
import LegalPageLayout from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | Atomic Nexus",
  description: "Learn about how Atomic Nexus handles your data and privacy.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy & Cookie Policy"
      dates={{
        effectiveDate: "March 10th, 2025",
        lastUpdated: "March 10th, 2025",
      }}
    >
      <p className="mb-6">
        Welcome to Atomic Nexus ("Company," "we," "us," or "our"). We are committed to protecting your privacy and
        ensuring transparency in how we handle your data.
      </p>

      <p className="mb-6">This Privacy & Cookie Policy explains:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>What data we collect and how we use it</li>
        <li>Your rights regarding your personal information</li>
        <li>How we use analytics and tracking technologies</li>
      </ul>

      <p className="mb-6">By using atomicnexus.io ("Website"), you consent to the practices described below.</p>

      <h2 className="text-xl font-semibold mb-4 mt-8">1. Information We Collect</h2>
      <p className="mb-4">We collect only the minimum necessary data to provide our services.</p>

      <h3 className="text-lg font-medium mb-2">a. Information You Provide to Us</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Contact Information: Name, email address (e.g., for newsletter signup or inquiries)</li>
        <li>Payment Information: Processed securely via Stripe (we do not store payment details)</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">b. Information Collected Automatically</h3>
      <p className="mb-4">
        We use Simple Analytics to understand website traffic without tracking users. Unlike traditional analytics
        tools, Simple Analytics does not use cookies or collect personal data. Instead, it provides anonymous insights
        such as:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>The number of visitors</li>
        <li>The pages visited</li>
        <li>Approximate location (on a country-level, not city or IP-based)</li>
        <li>Referring websites (if any)</li>
        <li>Device type (mobile, desktop, etc.)</li>
      </ul>

      <p className="mb-6">This information is fully GDPR-compliant and respects user privacy.</p>

      <h2 className="text-xl font-semibold mb-4 mt-8">2. How We Collect Your Data</h2>
      <p className="mb-4">We collect data through:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Forms: Newsletter signups, contact requests</li>
        <li>Payments: Transactions via Stripe</li>
        <li>Privacy-friendly analytics: Collected through Simple Analytics</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">3. Purpose of Data Collection</h2>
      <p className="mb-4">We process your data to:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Provide consulting services</li>
        <li>Process payments securely</li>
        <li>Analyze website traffic anonymously</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">4. Data Sharing & Third-Party Services</h2>
      <p className="mb-4">We do not sell, trade, or misuse your data. However, we share data with:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Payment Processor: Stripe (for secure payment transactions)</li>
        <li>Analytics Provider: Simple Analytics (for privacy-friendly website insights)</li>
      </ul>

      <p className="mb-6">We do not collect IP addresses or personally identifiable browsing data.</p>

      <h2 className="text-xl font-semibold mb-4 mt-8">5. Data Retention</h2>
      <p className="mb-4">We keep data only as long as necessary:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Newsletter subscriptions: Until you unsubscribe</li>
        <li>Payment records: Retained for tax/legal compliance</li>
        <li>Analytics data: Processed anonymously (no personal data is stored)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">6. Your GDPR Rights (For EU Users)</h2>
      <p className="mb-4">Under GDPR, you have the right to:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Access your data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to data processing</li>
      </ul>

      <p className="mb-6">To exercise your rights, email info@atomicnexus.io.</p>

      <h2 className="text-xl font-semibold mb-4 mt-8">7. Cookies & Tracking Technologies</h2>
      <p className="mb-4">Unlike most websites, we do not use tracking cookies for analytics.</p>

      <h3 className="text-lg font-medium mb-2">a. What Cookies We Use</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Essential Cookies (if applicable): Required for the Website to function</li>
        <li>No Tracking Cookies: Our analytics tool does not use cookies</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">b. How to Manage Cookies</h3>
      <p className="mb-6">Since we do not use tracking cookies, no cookie consent banner is needed for analytics.</p>

      <h2 className="text-xl font-semibold mb-4 mt-8">8. Data Transfers Outside the EU</h2>
      <p className="mb-4">
        Your payment data is processed by Stripe, which may store data outside the EU. Stripe complies with GDPR via:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Standard Contractual Clauses (SCCs)</li>
        <li>EU-U.S. Data Privacy Framework (if applicable)</li>
      </ul>

      <p className="mb-6">Analytics data stays within the EU (Simple Analytics does not transfer personal data).</p>

      <h2 className="text-xl font-semibold mb-4 mt-8">9. Security Measures</h2>
      <p className="mb-4">We implement strict security measures, including:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Encryption for transactions</li>
        <li>Secure access controls</li>
        <li>Privacy-first analytics (Simple Analytics)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">10. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy & Cookie Policy periodically. Any changes will be posted on this page.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">11. Contact Us</h2>
      <p className="mb-6">
        For questions, contact us at:
        <br />
        Email:{" "}
        <a href="mailto:info@atomicnexus.io" className="text-electric-cyan hover:underline">
          info@atomicnexus.io
        </a>
      </p>
    </LegalPageLayout>
  )
}

