import type { Metadata } from "next"
import LegalPageLayout from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Atomic Nexus",
  description: "Refund and cancellation policy for Atomic Nexus services.",
}

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      dates={{
        effectiveDate: "March 10th, 2025",
        lastUpdated: "March 10th, 2025",
      }}
    >
      <p className="mb-6">
        At Atomic Nexus ("Company," "we," "us," or "our"), we provide consulting calls via Zoom or other video
        conferencing platforms. To ensure a smooth experience, please review our Refund & Cancellation Policy before
        booking a session.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">1. Payment & Booking</h2>

      <h3 className="text-lg font-medium mb-2">1.1 Prepaid Sessions</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>All consulting calls must be paid in full at the time of booking.</li>
        <li>Payments are securely processed via Stripe. We do not store payment details.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">2. Cancellation & Rescheduling</h2>

      <h3 className="text-lg font-medium mb-2">2.1 Client-Initiated Cancellations</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>You may cancel or reschedule your call at least 24 hours before the scheduled time.</li>
        <li>If you cancel within this period, you may request to reschedule the session for a later date.</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">2.2 Late Cancellations & No-Shows</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Cancellations made less than 24 hours before the call are non-refundable.</li>
        <li>If you do not show up for the scheduled session, no refund or rescheduling will be offered.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">3. Refund Policy</h2>

      <h3 className="text-lg font-medium mb-2">3.1 No Refunds After Completed Sessions</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Once a consulting call has taken place, no refunds will be issued.</li>
        <li>We do not provide refunds for dissatisfaction with the advice or outcomes of the session.</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">3.2 Refund Eligibility</h3>
      <p className="mb-4">Refunds will only be considered under the following circumstances:</p>
      <ul className="mb-6">
        <li className="flex items-start mb-2">
          <span className="text-electric-cyan mr-2">✓</span>
          <span>
            <strong>Technical Failure on Our End:</strong> If a technical issue (e.g., server failure, Zoom outage)
            prevents the session from occurring, we will reschedule or offer a refund.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-neon-magenta mr-2">✗</span>
          <span>
            <strong>Client-Side Issues:</strong> Refunds will not be issued for missed sessions due to personal reasons,
            scheduling conflicts, or technical issues on the client's end.
          </span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">4. Exceptional Cases</h2>
      <p className="mb-6">
        In rare cases of emergencies or extenuating circumstances, we may offer a partial refund or rescheduling at our
        discretion. Contact us at{" "}
        <a href="mailto:info@atomicnexus.io" className="text-electric-cyan hover:underline">
          info@atomicnexus.io
        </a>{" "}
        for special requests.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">5. Contact Us</h2>
      <p className="mb-6">
        If you have questions regarding this policy, contact us at:
        <br />
        Email:{" "}
        <a href="mailto:info@atomicnexus.io" className="text-electric-cyan hover:underline">
          info@atomicnexus.io
        </a>
      </p>
    </LegalPageLayout>
  )
}

