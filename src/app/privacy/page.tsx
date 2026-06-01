import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Aspectra",
  description: "How Aspectra collects, stores, and protects your personal data. Includes information about birth data processing, AstroAPI, Geoapify, and your rights.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-24 px-6">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-8">Privacy Policy</h1>
      <p className="text-[#666666] leading-relaxed mb-4">
        Last updated: June 1, 2026
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        We collect only the data necessary to provide our astrology relationship analysis services. This includes:
      </p>
      <ul className="text-[#666666] leading-relaxed mb-4 space-y-2 list-disc list-inside">
        <li><strong className="text-[#1A1A1A]">Birth data</strong> — Date of birth, time of birth, and place of birth for creating natal and synastry charts.</li>
        <li><strong className="text-[#1A1A1A]">Email address</strong> — Used to create your account and send you important service-related communications.</li>
      </ul>
      <p className="text-[#666666] leading-relaxed mb-4">
        We do not collect sensitive personal data, payment information (processed by third-party providers), or location data beyond what is required for the birth place coordinates.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Store Your Data</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        Your personal data is stored securely using the following technologies:
      </p>
      <ul className="text-[#666666] leading-relaxed mb-4 space-y-2 list-disc list-inside">
        <li><strong className="text-[#1A1A1A]">Supabase</strong> — Our primary database for user accounts, birth data, and chart results. All data is encrypted at rest and in transit.</li>
        <li><strong className="text-[#1A1A1A]">AsyncStorage</strong> — Used on-device to persist your session and temporary chart data locally on your device. This data never leaves your device.</li>
      </ul>
      <p className="text-[#666666] leading-relaxed mb-4">
        We retain your data only for as long as your account is active or as necessary to provide our services. You may request deletion of your data at any time by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Third-Party Services</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        We use the following third-party services to deliver our astrology features:
      </p>
      <ul className="text-[#666666] leading-relaxed mb-4 space-y-2 list-disc list-inside">
        <li><strong className="text-[#1A1A1A]">AstroAPI</strong> — Used to compute planetary positions, birth chart calculations, and aspect analysis. Your birth data is transmitted securely to AstroAPI&apos;s servers and is not stored by us beyond the computation cycle.</li>
        <li><strong className="text-[#1A1A1A]">Geoapify</strong> — Used to resolve birth place names to geographic coordinates (latitude and longitude) for chart calculations. This data is used solely for the purpose of generating accurate natal charts and is not retained longer than necessary.</li>
      </ul>
      <p className="text-[#666666] leading-relaxed mb-4">
        These third-party services are governed by their own privacy policies. We encourage you to review their respective privacy practices.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Your Rights</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        You have the following rights regarding your personal data:
      </p>
      <ul className="text-[#666666] leading-relaxed mb-4 space-y-2 list-disc list-inside">
        <li><strong className="text-[#1A1A1A]">Access</strong> — Request a copy of the personal data we hold about you.</li>
        <li><strong className="text-[#1A1A1A]">Correction</strong> — Request correction of any inaccurate or incomplete data.</li>
        <li><strong className="text-[#1A1A1A]">Deletion</strong> — Request deletion of your account and all associated personal data.</li>
        <li><strong className="text-[#1A1A1A]">Portability</strong> — Request your data in a machine-readable format for transfer to another service.</li>
        <li><strong className="text-[#1A1A1A]">Object</strong> — Object to the processing of your personal data for certain purposes.</li>
      </ul>
      <p className="text-[#666666] leading-relaxed mb-4">
        To exercise any of these rights, please contact us at the email address provided below. We will respond within 30 days.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Security</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        We implement industry-standard security measures to protect your personal data, including encryption in transit (TLS/SSL) and at rest, secure authentication via Supabase Auth, and regular security reviews. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Children&apos;s Privacy</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        Aspectra is not directed to individuals under the age of 13. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information promptly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes to This Policy</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the updated policy on this page with a new &quot;Last updated&quot; date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p className="text-[#666666] leading-relaxed mb-4">
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p className="text-[#666666] leading-relaxed mb-4">
        <strong className="text-[#1A1A1A]">Email:</strong> privacy@aspectra.app
      </p>
    </div>
  );
}
