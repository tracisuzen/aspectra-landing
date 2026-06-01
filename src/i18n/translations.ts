export interface Translations {
  site: { title: string; description: string };
  nav: { home: string; features: string; archetypes: string; pricing: string; cta: string };
  hero: { headline: string; subheadline: string; cta: string; secondary: string };
  features: { title: string; subtitle: string; items: { title: string; description: string }[] };
  archetypes: { title: string; subtitle: string; cta: string };
  pricing: { title: string; subtitle: string; trial: string; tiers: { name: string; price: string; period: string; features: string[]; cta: string; featured?: boolean }[] };
  cta: { headline: string; subheadline: string; button: string };
  footer: { tagline: string; links: { label: string; href: string }[]; copyright: string };
}

export const en: Translations = {
  site: {
    title: "Aspectra — Relationship Astrology, Reimagined",
    description: "Unlimited synastry readings, as deep as a professional session — for less than the cost of one. Discover your relationship archetype with Swiss Ephemeris precision.",
  },
  nav: {
    home: "Home",
    features: "Features",
    archetypes: "Archetypes",
    pricing: "Pricing",
    cta: "Get the App",
  },
  hero: {
    headline: "Your Relationship, Written in the Stars",
    subheadline: "Unlimited synastry analysis powered by Swiss Ephemeris. Discover your archetype across 24 unique relationship dynamics — deeper than a professional session, for less than the cost of one.",
    cta: "Get Started Free",
    secondary: "Explore Archetypes",
  },
  features: {
    title: "Why Aspectra",
    subtitle: "Professional-grade synastry analysis, reimagined for everyone.",
    items: [
      { title: "Synastry Grid", description: "Full planet-by-planet aspect grid across 13 celestial bodies. Tap any cell for deep interpretation." },
      { title: "24 Archetypes", description: "From Soul Resonance to Phoenix Union — discover your unique relationship dynamic among 24 distinct archetypes." },
      { title: "Life Area Breakdown", description: "See how your synastry plays out across Communication, Emotional Bond, Attraction, Conflict, Growth, and Healing." },
      { title: "Share as Story", description: "Generate a beautiful 9:16 story card with your archetype and top aspects — share to Instagram, TikTok, or WhatsApp." },
      { title: "Swiss Ephemeris", description: "All calculations use professional-grade Swiss Ephemeris data via AstroAPI — the same source professional astrologers trust." },
      { title: "Cross-Platform", description: "Available on iOS, Android, and Web. Your data syncs seamlessly across all your devices via Supabase." },
    ],
  },
  archetypes: {
    title: "24 Relationship Dynamics",
    subtitle: "Every connection tells a unique story. Here are six of the archetypes you might discover.",
    cta: "Discover All 24 Archetypes in the App",
  },
  pricing: {
    title: "Simple Pricing",
    subtitle: "Start with a 3-day free trial. No credit card required.",
    trial: "3-day free trial on all plans",
    tiers: [
      {
        name: "Core",
        price: "$9.99",
        period: "/month",
        features: [
          "Synastry grid (5 inner planets)",
          "Relationship Archetype",
          "Aspect Story Cards",
          "3 of 6 Life Areas",
          "Strengths & Shadows",
          "Daily Insight",
          "1 saved partner",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Premium",
        price: "$19.99",
        period: "/month",
        featured: true,
        features: [
          "Full synastry grid (13 planets)",
          "All 6 Life Areas",
          "Unlimited saved partners",
          "Private Journal / Notes",
          "Shareable Premium Card",
          "Astro Chat AI",
          "Priority support",
        ],
        cta: "Start Free Trial",
      },
    ],
  },
  cta: {
    headline: "Your Synastry Awaits",
    subheadline: "Download Aspectra and discover what the stars reveal about your relationships.",
    button: "Open App",
  },
  footer: {
    tagline: "Relationship Astrology, Reimagined.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    copyright: "© 2026 Torus Plus. All rights reserved.",
  },
};

export const tr: Translations = {
  site: {
    title: "Aspectra — İlişki Astrolojisi, Yeniden Tasarladı",
    description: "Profesyonel bir seans kadar derin, sınırsız sinastri analizi — bir seans ücretinden daha azına. İsviçre Efemeris hassasiyetiyle ilişki arketipinizi keşfedin.",
  },
  nav: {
    home: "Ana Sayfa",
    features: "Özellikler",
    archetypes: "Arketipler",
    pricing: "Fiyatlandırma",
    cta: "Uygulamayı İndir",
  },
  hero: {
    headline: "İlişkiniz, Yıldızlarda Yazılı",
    subheadline: "İsviçre Efemeris destekli sınırsız sinastri analizi. 24 benzersiz ilişki dinamiği arasından arketipinizi keşfedin — profesyonel bir seanstan daha derin, bir seans ücretinden daha azına.",
    cta: "Ücretsiz Başlayın",
    secondary: "Arketipleri Keşfet",
  },
  features: {
    title: "Neden Aspectra",
    subtitle: "Profesyonel seviye sinastri analizi, herkes için yeniden tasarlandı.",
    items: [
      { title: "Sinastri Tablosu", description: "13 gök cismi arasında tam gezegen-gezegen açı tablosu. Derin yorum için herhangi bir hücreye dokunun." },
      { title: "24 Arketip", description: "Soul Resonance'dan Phoenix Union'a — 24 farklı arketip arasından benzersiz ilişki dinamiğinizi keşfedin." },
      { title: "Yaşam Alanı Analizi", description: "İletişim, Duygusal Bağ, Çekim, Çatışma, Büyüme ve Şifa alanlarında sinastrinizin nasıl çalıştığını görün." },
      { title: "Hikaye Olarak Paylaş", description: "Arketipiniz ve en güçlü açılarınızla 9:16 güzel bir hikaye kartı oluşturun — Instagram, TikTok veya WhatsApp'ta paylaşın." },
      { title: "İsviçre Efemeris", description: "Tüm hesaplamalar AstroAPI üzerinden profesyonel seviye İsviçre Efemeris verisi kullanır — profesyonel astrologların güvendiği kaynak." },
      { title: "Çoklu Platform", description: "iOS, Android ve Web'de kullanılabilir. Verileriniz Supabase aracılığıyla tüm cihazlarınızda sorunsuz senkronize olur." },
    ],
  },
  archetypes: {
    title: "24 İlişki Dinamiği",
    subtitle: "Her bağlantı benzersiz bir hikaye anlatır. İşte keşfedebileceğiniz arketiplerden altısı.",
    cta: "24 Arketipin Tamamını Uygulamada Keşfedin",
  },
  pricing: {
    title: "Basit Fiyatlandırma",
    subtitle: "3 günlük ücretsiz deneme ile başlayın. Kredi kartı gerekmez.",
    trial: "Tüm planlarda 3 günlük ücretsiz deneme",
    tiers: [
      {
        name: "Core",
        price: "$9.99",
        period: "/ay",
        features: [
          "Sinastri tablosu (5 iç gezegen)",
          "İlişki Arketipi",
          "Açı Hikaye Kartları",
          "6 Yaşam Alanından 3'ü",
          "Güçlü Yönler ve Gölgeler",
          "Günlük İçgörü",
          "1 kayıtlı partner",
        ],
        cta: "Ücretsiz Denemeye Başla",
      },
      {
        name: "Premium",
        price: "$19.99",
        period: "/ay",
        featured: true,
        features: [
          "Tam sinastri tablosu (13 gezegen)",
          "Tüm 6 Yaşam Alanı",
          "Sınırsız kayıtlı partner",
          "Özel Günlük / Notlar",
          "Paylaşılabilir Premium Kart",
          "Astro Sohbet AI",
          "Öncelikli destek",
        ],
        cta: "Ücretsiz Denemeye Başla",
      },
    ],
  },
  cta: {
    headline: "Sinastriniz Sizi Bekliyor",
    subheadline: "Aspectra'yı indirin ve yıldızların ilişkileriniz hakkında neler söylediğini keşfedin.",
    button: "Uygulamayı Aç",
  },
  footer: {
    tagline: "İlişki Astrolojisi, Yeniden Tasarladı.",
    links: [
      { label: "Gizlilik Politikası", href: "/privacy" },
      { label: "Kullanım Koşulları", href: "/terms" },
    ],
    copyright: "© 2026 Torus Plus. Tüm hakları saklıdır.",
  },
};