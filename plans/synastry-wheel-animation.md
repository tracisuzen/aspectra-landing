# Aspectra Synastry Wheel — Hero Animation Plan

> **For:** `aspectra-landing` hero section
> **Date:** 2026-06-01
> **Stack:** SVG + Framer Motion + Tailwind CSS (no Three.js)

---

## 1. Concept

A half-circle (180°) synastry wheel showing 13 planets at 15° intervals. Animated aspect lines connect random planet pairs in alternating **harmonious (blue)** and **tense (red)** colors. Each connection pulses with a radial gradient glow at the center and displays the angle name.

### Why This Fits Aspectra

The app's core feature is calculating planetary aspects between two people's charts. This animation visualizes exactly that: planets positioned on an arc, with colored aspect lines between them — the fundamental building block of synastry analysis.

---

## 2. Visual Design

### Layout

```
                    ┌──────────────────────────┐
                    │     ☉  ☽  ☿  ♀  ♂       │
                    │   ♃                ♄     │
                    │  ⛢      60°       ♆     │
                    │  ♇     Sextile    ⚷     │
                    │  ☊                ♇     │
                    │   ♆               ☊     │
                    │     ⚷  ♄  ♃  ♂          │
                    │        180° yarım daire  │
                    └──────────────────────────┘
```

- Half-circle arc at the top (0° left → 180° right)
- 13 planet symbols evenly placed along the arc at 15° intervals
- Center: rotating angle label + radial gradient glow
- Aspect lines: curved paths inside the arc connecting planet pairs

### Color System

| Category | Angles | Line Color | Glow Color | Label |
|---|---|---|---|---|
| **Harmonious** | 60°, 120° | `#4FC3F7` (light blue) | `#4FC3F7` at 15% opacity | "Sextile" / "Trine" |
| **Tense** | 45°, 90°, 180° | `#E53935` (red) | `#E53935` at 15% opacity | "Semi-Square" / "Square" / "Opposition" |

### Component Layers (z-index)

```
3. Zodyak sembolleri (üstte, tıklanamaz dekoratif)
2. Gezegen ikonları + aspect çizgileri (ana animasyon)
1. Merkez glow gradienti (arka plan)
0. Yarım daire çizgisi (sabit, ince gri)
```

---

## 3. Algorithm

### 3.1 Planet Placement

```
GEZEGENLER = [
  { key: "sun",        symbol: "☉", name: "Sun" },
  { key: "moon",       symbol: "☽", name: "Moon" },
  { key: "mercury",    symbol: "☿", name: "Mercury" },
  { key: "venus",      symbol: "♀", name: "Venus" },
  { key: "mars",       symbol: "♂", name: "Mars" },
  { key: "jupiter",    symbol: "♃", name: "Jupiter" },
  { key: "saturn",     symbol: "♄", name: "Saturn" },
  { key: "uranus",     symbol: "⛢", name: "Uranus" },
  { key: "neptune",    symbol: "♆", name: "Neptune" },
  { key: "pluto",      symbol: "♇", name: "Pluto" },
  { key: "chiron",     symbol: "⚷", name: "Chiron" },
  { key: "northNode",  symbol: "☊", name: "North Node" },
  { key: "asc",        symbol: "AC", name: "Ascendant" },
]

SLOTS = 13    // 0° → 180°, 15° adımlarla
              // slot[0]=0°, slot[1]=15°, ..., slot[12]=180°

init() {
  shuffled = shuffle(GEZEGENLER)
  // Her slot'a bir gezegen ata
  placements[0..12] = shuffled
}
```

Her sayfa yüklemesinde gezegenler farklı pozisyonlarda.

### 3.2 Aspect Angle Pool

```
HARMONIOUS_ANGLES = [
  { angle: 60,  steps: 4,  label: "Sextile",   color: "#4FC3F7" },
  { angle: 120, steps: 8,  label: "Trine",     color: "#4FC3F7" },
]

TENSE_ANGLES = [
  { angle: 45,  steps: 3,  label: "Semi-Square", color: "#E53935" },
  { angle: 90,  steps: 6,  label: "Square",      color: "#E53935" },
  { angle: 180, steps: 12, label: "Opposition",    color: "#E53935" },
]
```

### 3.3 Animation Loop

```
TOTAL_ITERATIONS = 30  // 30 harmonious + 30 tense = 60 çizgi animasyonu

for i in 0..TOTAL_ITERATIONS:
  
  // HARMONIOUS (mavi)
  h = random(HARMONIOUS_ANGLES)
  p1 = random(0..12 - h.steps)
  p2 = p1 + h.steps
  drawLine(p1, p2, h.color, h.label, h.angle)
  animateGlow(h.color)
  displayLabel(h.label, h.angle)
  wait(2.5s)
  
  // TENSE (kırmızı)
  t = random(TENSE_ANGLES)
  p1 = random(0..12 - t.steps)
  p2 = p1 + t.steps
  drawLine(p1, p2, t.color, t.label, t.angle)
  animateGlow(t.color)
  displayLabel(t.label, t.angle)
  wait(2.5s)
```

Her çizgi için:
1. **Çizgi belirir:** `stroke-dashoffset` animasyonu (SVG path çiziliyor efekti)
2. **Merkez parlıyor:** Radial gradient opacity 0→%15→0 (Framer Motion)
3. **Etiket beliriyor:** "120° Trine" yazısı fade-in
4. **2.5 saniye dur**
5. **Hepsi fade-out**
6. **Sıradaki**

Toplam süre: 60 × 2.5s = 150 saniye (2.5 dakika), sonra loop başa döner.

---

## 4. SVG Implementation

### Ark Yapısı

```svg
<svg viewBox="0 0 600 400">
  <!-- Yarım daire arkı -->
  <path d="M 50,350 A 250,250 0 0,1 550,350" 
        fill="none" stroke="#E8E8E8" stroke-width="1" />
  
  <!-- Gezegen konumları (13 nokta, 250px yarıçaplı daire üstünde) -->
  <!-- Açı: -π → 0 (sol → sağ, 180° yay) -->
  <!-- x = 300 + 250 * cos(θ), y = 350 | 250 * sin(θ) -->
</svg>
```

### Matematik

```
Merkez: (300, 350)
Yarıçap: 250px

slot[i] için açı: θ = -π + i * (π / 12)   // -180° → 0°

x[i] = 300 + 250 * cos(θ)
y[i] = 350 + 250 * sin(θ)
```

### Aspect Çizgileri

```svg
<!-- slot[p1] ↔ slot[p2] arası düz çizgi -->
<line x1={x[p1]} y1={y[p1]} x2={x[p2]} y2={y[p2]}
      stroke={color} stroke-width="2.5" stroke-linecap="round"
      opacity={lineOpacity} />
```

### Merkez Glow

```svg
<!-- Merkezden dışa doğru şeffaflaşan radial gradient -->
<defs>
  <radialGradient id={`glow-${i}`}>
    <stop offset="0%" stop-color={color} stop-opacity="0.2" />
    <stop offset="50%" stop-color={color} stop-opacity="0.05" />
    <stop offset="100%" stop-color={color} stop-opacity="0" />
  </radialGradient>
</defs>
<circle cx="300" cy="350" r="180" fill={`url(#glow-${i})`} />
```

### Etiket

```svg
<!-- Merkezde, dairenin içinde -->
<text x="300" y="340" text-anchor="middle" 
      font-family="Inter" font-weight="600" font-size="18" fill={color}>
  {angle}°
</text>
<text x="300" y="362" text-anchor="middle"
      font-family="Inter" font-weight="400" font-size="13" fill={color} opacity="0.8">
  {label}
</text>
```

---

## 5. Framer Motion Animasyon Detayları

### Çizgi Görünme (draw effect)

```tsx
<motion.line
  initial={{ pathLength: 0, opacity: 0 }}
  animate={{ pathLength: 1, opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  strokeDasharray="1000"
  strokeDashoffset={pathLength}  // animated by framer-motion
/>
```

### Merkez Glow Pulse

```tsx
<motion.circle
  initial={{ opacity: 0 }}
  animate={{ opacity: [0, 0.8, 0.4, 0] }}
  transition={{ duration: 2.5, times: [0, 0.15, 0.7, 1] }}
/>
```

### Etiket Fade

```tsx
<motion.g
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3, delay: 0.4 }}
>
  <text>...</text>
</motion.g>
```

### Gezegen Pop-in (sayfa yüklemesinde)

```tsx
{motion.div variants={stagger} initial="hidden" animate="visible"}
  {placements.map((planet, i) => (
    <motion.text
      key={planet.key}
      variants={{ hidden: { opacity: 0, scale: 0 }, 
                  visible: { opacity: 1, scale: 1 } }}
      transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
      x={x[i]} y={y[i]}
    />
  ))}
```

---

## 6. Component API

```tsx
// Hero.tsx içinde:
import { SynastryWheel } from "@/components/SynastryWheel";

// Kullanım:
<SynastryWheel className="w-full max-w-[600px] mx-auto" />
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Tailwind wrapper classes |
| `iterations` | `number` | `30` | Kaç harmonious+tense çifti |
| `lineDuration` | `number` | `2500` | Her çizgi gösterim süresi (ms) |
| `planetSize` | `number` | `24` | Gezegen ikon font büyüklüğü (px) |
| `radius` | `number` | `250` | Daire yarıçapı (px) |

---

## 7. Dosya Değişiklikleri

| Dosya | İşlem | Açıklama |
|---|---|---|
| `src/components/SynastryWheel.tsx` | 🆕 CREATE | Ana animasyon bileşeni |
| `src/components/Hero.tsx` | ✏️ MODIFY | Three.js kodu sil, SynastryWheel ekle |
| `package.json` | ✏️ MODIFY | `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three` — sil |

### package.json'dan silinecekler

```diff
- "three": "^0.171.0",
- "@react-three/fiber": "^9.6.1",
- "@react-three/drei": "^9.120.0",
- "@types/three": "^0.171.0",
```

**Kalan bağımlılıklar:** next, react, react-dom, framer-motion, tailwindcss, typescript. Hepsi standart. Sıfır uyumluluk sorunu.

---

## 8. Uygulama Adımları

### Adım 1: SynastryWheel Bileşeni (Tek seferde)

Tüm animasyonu tek bir `'use client'` bileşende topla:

1. `useMemo` ile gezegen yerleşimi (shuffle)
2. SVG: ark + gezegen ikonları
3. `useEffect` + `setInterval` ile animasyon döngüsü
4. Her iterasyonda: random açı seç → slot hesapla → state güncelle
5. Framer Motion `AnimatePresence` ile çizgi/glow/etiket geçişleri

Bölmeye gerek yok — tek bileşen, ~150-200 satır.

### Adım 2: Hero.tsx'i Güncelle

Three.js Canvas + CelestialZodiacSphere bileşenlerini sil. Yerine:

```tsx
import { SynastryWheel } from "@/components/SynastryWheel";
```

Hero'nun sağ tarafında SynastryWheel render et.

### Adım 3: package.json Temizliği

4 Three.js paketini sil.

### Adım 4: Build Test

`npm run build` → 2-3 saniyede tamamlanmalı. Sıfır hata bekleniyor.

---

## 9. Riskler & Notlar

| Risk | Derece | Not |
|---|---|---|
| SVG performansı | Düşük | 13 text + 1 line + 1 circle. SVG'de 60fps sorunsuz. |
| Animasyon zamanlaması | Düşük | `setInterval` + state updates. Framer Motion handle eder. |
| Mobil görünüm | Düşük | SVG viewBox responsive. `max-w-[600px]` ile sınırla. |

---

## 10. Başarı Kriterleri

- [ ] `npm run build` sıfır hata ile tamamlanır
- [ ] Sayfa yüklendiğinde 13 gezegen aynı anda pop-in olur
- [ ] 60 çizgi animasyonu sırayla oynar (mavi → kırmızı → mavi...)
- [ ] Merkezde açı değeri ve adı okunur
- [ ] Glow gradyanı çizgiyle eş zamanlı parlıp söner
- [ ] Her sayfa yüklemesinde gezegenler farklı pozisyonlarda
- [ ] Mobilde küçülür ama okunaklı kalır
- [ ] `package.json`'da Three.js bağımlılığı kalmaz