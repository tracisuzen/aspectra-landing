import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Aspectra",
  description: "Terms and conditions for using Aspectra's relationship astrology service. Covers account usage, subscriptions, intellectual property, and liability.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-24 px-6">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-8">Terms of Service</h1>
      <p className="text-[#666666] leading-relaxed mb-4">
        Last updated: June 1, 2026
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        By accessing or using Aspectra (the &quot;Service&quot;) — including its website, mobile application, and any related features — you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        These Terms apply to all users, visitors, and anyone else who uses or accesses the Service. We may revise these Terms at any time, and continued use of the Service after such revisions constitutes acceptance of the updated Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Account and Registration</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        To access certain features of the Service, you must create an account by providing a valid email address. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        When creating your account, you must provide accurate and truthful information, including your birth data. You agree to update your information as necessary to keep it accurate and complete.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        You may cancel your account at any time by contacting support. Upon cancellation, your personal data will be deleted in accordance with our Privacy Policy, subject to any retention requirements imposed by law.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Subscriptions and Payments</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        Aspectra offers both free and paid subscription plans. Paid plans provide access to premium features such as detailed synastry reports, unlimited chart analyses, and advanced aspect insights.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        By subscribing to a paid plan, you agree to the following:
      </p>
      <ul className="text-[#666666] leading-relaxed mb-4 space-y-2 list-disc list-inside">
        <li>You will be charged the fee specified for your chosen subscription plan at the time of purchase.</li>
        <li>All payments are processed securely through our third-party payment providers. We do not store your payment card information.</li>
        <li>Subscriptions auto-renew unless cancelled before the renewal date. You may cancel at any time through your account settings or by contacting support.</li>
        <li>Refunds are handled on a case-by-case basis. Please contact us if you believe you are eligible for a refund.</li>
      </ul>
      <p className="text-[#666666] leading-relaxed mb-4">
        Aspectra reserves the right to change subscription pricing with prior notice. Any price increases will apply to new billing cycles only.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Intellectual Property</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        The Service and its original content, features, and functionality are and will remain the exclusive property of Aspectra and its licensors. This includes, but is not limited to:
      </p>
      <ul className="text-[#666666] leading-relaxed mb-4 space-y-2 list-disc list-inside">
        <li>The Aspectra name, logo, and all related trademarks and service marks.</li>
        <li>The design, structure, and visual presentation of the Service.</li>
        <li>Original astrological interpretations, chart visualizations, and analytical methodologies developed by Aspectra.</li>
      </ul>
      <p className="text-[#666666] leading-relaxed mb-4">
        You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial purposes. You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, or exploit any aspect of the Service without our express written permission.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        AstroAPI and Geoapify are used under license. Their proprietary algorithms and data are governed by their respective terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        Aspectra is an entertainment and educational tool. Astrological analyses, charts, and interpretations provided by the Service are for informational and entertainment purposes only. They are not a substitute for professional advice — including medical, legal, financial, or psychological advice — nor should they be relied upon for making critical life decisions.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        To the maximum extent permitted by applicable law, Aspectra and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
      </p>
      <ul className="text-[#666666] leading-relaxed mb-4 space-y-2 list-disc list-inside">
        <li>Loss of profits, data, use, goodwill, or other intangible losses.</li>
        <li>Any damages resulting from the use of, or inability to use, the Service.</li>
        <li>Any unauthorized access to or use of our servers or databases.</li>
        <li>Any interruptions, errors, or delays in the operation of the Service.</li>
      </ul>
      <p className="text-[#666666] leading-relaxed mb-4">
        In no event shall Aspectra&apos;s total liability to you for all claims exceed the amount you have paid us in the twelve (12) months preceding the claim, or $100, whichever is greater.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Governing Law</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Aspectra operates, without regard to its conflict of law provisions.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        Any disputes arising out of or relating to these Terms or the Service shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be settled by binding arbitration or in the appropriate courts, pursuant to applicable arbitration or court rules.
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
      </p>
    </div>
  );
}
