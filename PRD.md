# PRD — Drone Aerial Portfolio Website

## 1. Overview

Buat sebuah website portfolio profesional untuk jasa **drone photography & videography** yang berbasis di **Magetan, Jawa Timur**.

Website harus terasa **cinematic, minimal, modern, dan premium**, dengan inspirasi visual dari website **Draftly LinkFlow**.

Fokus utama website adalah:

* Menampilkan footage drone sebagai visual utama
* Memberikan kesan profesional
* Menampilkan layanan dan portfolio
* Mengarahkan calon klien untuk menghubungi pemilik jasa
* Responsive di desktop, tablet, dan mobile

Drone yang digunakan:

**DJI Lito 1**

Lokasi layanan:

**Magetan, Jawa Timur**

> Catatan: Instagram, TikTok, dan WhatsApp belum tersedia untuk dimasukkan sekarang. Jangan membuat URL atau username palsu. Siapkan struktur CTA agar bisa diisi kemudian.

---

## 2. Design Direction

### Visual Style

Gunakan pendekatan:

**Cinematic + Minimal + Liquid Glass**

Referensi utama:

* Draftly LinkFlow
* Modern cinematic portfolio
* Apple-style minimal interface
* Aerial/drone cinematography websites

Website tidak boleh terasa seperti template bisnis biasa.

Hindari:

* Terlalu banyak card
* Gradient berlebihan
* Animasi berlebihan
* Icon yang terlalu banyak
* Layout dashboard
* UI yang terlalu kompleks

Visual harus memberikan kesan:

> "Studio aerial profesional"

bukan:

> "Website jasa drone template."

---

## 3. Hero Section

Hero harus menjadi bagian paling kuat dari website.

### Background

Gunakan video footage drone sebagai **fullscreen background**.

Requirements:

* Full viewport (`100vh`)
* `object-fit: cover`
* Autoplay
* Muted
* Loop
* Plays inline pada mobile
* Gunakan poster image sebagai fallback
* Tambahkan dark overlay agar text tetap readable
* Jangan menggunakan video yang terlalu besar tanpa optimasi

```text
┌───────────────────────────────────────────────┐
│                                               │
│  LOGO                         WORK SERVICES   │
│                                               │
│                                               │
│              VIDEO BACKGROUND                 │
│                                               │
│                                               │
│          CAPTURE THE WORLD                    │
│             FROM ABOVE                        │
│                                               │
│       Aerial Photography & Videography        │
│                                               │
│             [ EXPLORE WORK ]                  │
│                                               │
│                                               │
└───────────────────────────────────────────────┘
```

### Hero Copy

Headline:

**CAPTURE THE WORLD FROM ABOVE**

Subheadline:

**Aerial photography & cinematography from Magetan, East Java.**

CTA:

**Explore Work**

CTA kedua dapat disiapkan tetapi belum dihubungkan ke WhatsApp.

---

## 4. Navigation

Navbar harus menggunakan **Liquid Glass UI**.

Desktop:

```text
╭──────────────────────────────────────────────╮
│  BRAND       WORK   SERVICES   ABOUT   ↗     │
╰──────────────────────────────────────────────╯
```

Properties:

* Floating navbar
* Rounded pill/container
* Transparent background
* Backdrop blur
* Saturation
* Subtle border
* Subtle shadow
* Fixed/sticky
* Smooth transition saat scrolling

Contoh CSS direction:

```css
backdrop-filter: blur(24px) saturate(180%);
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.15);
```

Jangan membuat efek glass terlalu putih.
Glass harus tetap terlihat premium di atas footage drone.

---

## 5. Floating Drone Information

Tambahkan floating glass element di bagian bawah hero.

```text
╭─────────────────────────────────────╮
│ DJI LITO 1                          │
│ AERIAL CINEMATOGRAPHY               │
╰─────────────────────────────────────╯
```

Gunakan nama:

**DJI Lito 1**

Jangan menambahkan spesifikasi teknis drone yang belum diberikan.
Element ini dapat memiliki animasi floating yang sangat subtle.

---

## 6. Portfolio Section

Section portfolio harus tetap minimalis.

Judul:

**SELECTED WORK**

Subjudul:

**A collection of aerial perspectives captured across East Java.**

Layout:

Desktop:

```text
┌──────────────────────┐
│                      │
│      PROJECT 01      │
│                      │
└──────────────────────┘

        ┌──────────────────────┐
        │                      │
        │      PROJECT 02      │
        │                      │
        └──────────────────────┘
```

Gunakan image/video besar.

Portfolio dapat berupa:

* Drone photography
* Drone videography
* Landscape
* Property
* Event
* Tourism
* Commercial

Jangan menampilkan kategori yang belum benar-benar tersedia sebagai portfolio. Gunakan placeholder/content structure yang mudah diganti.

---

## 7. Services

Buat section sederhana dengan typography dan whitespace, bukan banyak card.

### Aerial Photography

Foto udara untuk:

* Property
* Landscape
* Tourism
* Commercial

### Aerial Videography

Video cinematic untuk:

* Promotion
* Events
* Tourism
* Property

### Custom Aerial Production

Layanan shooting berdasarkan kebutuhan client.

---

## 8. About Section

Section pendek.

Judul:

**FROM ABOVE**

Content:

Jasa aerial photography dan videography berbasis di **Magetan, Jawa Timur**, menggunakan DJI Lito 1 untuk menghasilkan footage udara yang cinematic dan natural.

Jangan membuat klaim seperti:

* "Professional certified pilot"
* "10 years experience"
* "Best drone service"
* "Trusted by hundreds of clients"

kecuali data tersebut nantinya diberikan.

---

## 9. Location

Tampilkan:

**Magetan, Jawa Timur**

Tambahkan copy:

**Available for aerial projects across East Java.**

Jangan membuat klaim coverage area yang terlalu spesifik tanpa data.

---

## 10. Contact Section

Buat CTA besar di akhir website.

```text
READY TO TAKE YOUR
PROJECT HIGHER?

[ GET IN TOUCH ↗ ]
```

Untuk sekarang CTA belum diarahkan ke WhatsApp.

Buat konfigurasi:

```js
const contactLinks = {
  whatsapp: "",
  instagram: "",
  tiktok: ""
}
```

Jika value kosong, jangan tampilkan link aktif.

---

## 11. Social Media

Siapkan struktur untuk:

* Instagram
* TikTok
* WhatsApp

Tetapi **jangan memasukkan URL dummy**.

Nanti cukup mengubah:

```js
const socialLinks = {
  instagram: "",
  tiktok: "",
  whatsapp: ""
}
```

Ketika link sudah diberikan, social icons/CTA dapat otomatis aktif.

---

## 12. Motion & Animation

Gunakan animasi yang subtle.

### Priority Animation:

#### Hero
* Fade-in
* Text reveal
* Navbar fade/slide
* CTA reveal

#### Scroll
* Smooth section reveal
* Image/video parallax ringan
* Text movement ringan

#### Glass UI
* Slight opacity transition
* Blur transition
* Hover interaction

#### Portfolio
* Image scale kecil ketika hover
* Cursor interaction jika cocok

### Avoid:

* Excessive bouncing
* Spin animation
* Constant movement
* Overly flashy transitions

Animation harus terasa **cinematic**, bukan gaming website.

---

## 13. Video Behavior

### Desktop:

```html
video {
  autoplay = true
  muted = true
  loop = true
  playsInline = true
}
```

### Mobile:

Gunakan optimized video atau poster image jika autoplay video terlalu berat.

Tambahkan:

```html
poster="/images/drone-poster.webp"
```

Video harus dioptimalkan untuk web.

Prefer:

```text
WebM
MP4 fallback
```

Jangan menggunakan file 4K mentah sebagai background.

---

## 14. Responsive Design

### Desktop (1440px+)

* Hero: `100vh`
* Typography besar
* Grid layout untuk portfolio

### Tablet

* Adapt navigation dan spacing
* Adjust grid columns (2 column)

### Mobile

* Navbar berubah menjadi hamburger menu
* Hero tetap fullscreen
* Headline multi-line:

```text
CAPTURE
THE WORLD
FROM ABOVE
```

* Portfolio menjadi single-column
* Liquid glass tetap ringan dan tidak mengganggu readability

---

## 15. Tech Stack

### Recommended Stack:

```text
Next.js 14+ (App Router)
React 18+
TypeScript 5.x
Tailwind CSS 3.x
GSAP 3.x + @gsap/react
```

### For Animation:

* GSAP (core)
* ScrollTrigger
* LENIS (smooth scroll - optional)

Tidak perlu Three.js pada versi pertama.

**Jangan membuat 3D drone terlebih dahulu.**

Prioritaskan:

1. Video
2. Typography
3. Liquid glass
4. Smooth animation
5. Portfolio

Three.js dapat ditambahkan pada fase berikutnya jika memang dibutuhkan.

---

## 16. Project Structure

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Location.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── config/
│   └── site.ts
│
├── lib/
│   ├── utils.ts
│   └── animations.ts
│
└── public/
    ├── videos/
    │   └── hero-drone.mp4
    │
    ├── images/
    │   ├── poster.webp
    │   ├── logo.svg
    │   └── portfolio/
    │       ├── project-01.jpg
    │       ├── project-02.jpg
    │       └── ...
    │
    └── icons/
```

---

## 17. Configuration File

Buat satu file configuration supaya data bisnis gampang diganti.

```typescript
// src/config/site.ts

export const siteConfig = {
  name: "YOUR BRAND",
  tagline: "Aerial Cinematography",
  location: "Magetan, Jawa Timur",
  
  drone: {
    brand: "DJI",
    model: "Lito 1",
  },

  social: {
    instagram: "",  // Kosongkan nanti diisi
    tiktok: "",     // Kosongkan nanti diisi
    whatsapp: "",   // Kosongkan nanti diisi
  },

  links: {
    portfolio: "/work",
    services: "/services",
    contact: "/contact",
  },
};

export const metadata = {
  title: "Your Brand — Aerial Photography & Videography | Magetan",
  description: "Aerial photography and cinematic drone videography based in Magetan, East Java.",
};
```

Jangan hardcode social media URL di banyak component.

---

## 18. Performance Requirements

Website harus terasa cepat.

Implementasikan:

* Lazy loading portfolio images
* Optimized images (WebP format preferred)
* Responsive image sizes (`srcset`, `sizes`)
* Video compression (≤5MB untuk hero video)
* Poster image fallback
* Avoid unnecessary JavaScript
* Avoid excessive animation
* Respect `prefers-reduced-motion`

### Target Metrics:

* Lighthouse Performance ≥ 90
* First Contentful Paint < 1.5s
* Largest Contentful Paint < 2.5s
* Cumulative Layout Shift < 0.1

---

## 19. Accessibility

Implementasikan:

* Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
* Proper heading hierarchy (`h1` → `h2` → `h3`)
* Alt text untuk semua images/videos
* Keyboard navigation (tab order)
* Visible focus states
* Sufficient text contrast (WCAG AA)
* `prefers-reduced-motion` support

### Color Contrast:

* Text on video: ≥ 4.5:1
* Primary CTA: ≥ 3:1

### Screen Reader:

* ARIA labels untuk button
* Skip to main content
* Meaningful link text

---

## 20. SEO Strategy

### Metadata:

```html
<head>
  <title>Your Brand — Aerial Photography & Videography | Magetan</title>
  <meta name="description" content="Aerial photography and cinematic drone videography based in Magetan, East Java.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Your Brand — Aerial Cinematography">
  <meta property="og:description" content="Professional drone photography & videography services from Magetan, East Java.">
  <meta property="og:image" content="/images/og-image.jpg">
  <meta property="og:url" content="https://yourdomain.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Your Brand — Aerial Cinematography">
  <meta name="twitter:description" content="Professional drone photography & videography services from Magetan, East Java.">
  <meta name="twitter:image" content="/images/twitter-card.jpg">
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
</head>
```

### Additional SEO Files:

* `robots.txt` (allow crawling)
* `sitemap.xml` (dynamic sitemap)
* Canonical URLs

### Location Data:

Gunakan lokasi:

**Magetan, Jawa Timur**

Jangan memasukkan klaim bisnis yang belum diverifikasi.

---

## 21. Development Phases

### Phase 1 — Foundation ✅

* Next.js setup (App Router, TypeScript, Tailwind)
* Project structure setup
* Core layout & navigation
* Basic responsive layout

### Phase 2 — Visual 🔄 (IN PROGRESS)

* Drone background video integration
* Liquid glass styling
* Typography system
* Hero animation & motion

### Phase 3 — Content

* Portfolio section implementation
* Services section
* About & Location sections
* Contact CTA

### Phase 4 — Motion

* GSAP integration
* Scroll-triggered animations
* Parallax effects
* Hover interactions

### Phase 5 — Optimization

* Image optimization (WebP conversion)
* Video optimization (compression)
* Mobile performance tuning
* SEO audit
* Accessibility testing

---

## 22. Important Design Rule

**The footage is the hero.**

UI harus berada di atas footage dan membantu visual, bukan menutupinya.

### Prioritas Visual:

```
VIDEO
  ↓
TYPOGRAPHY
  ↓
GLASS UI
  ↓
CONTENT
```

### Bukan:

```
CARDS
CARDS
CARDS
CARDS
VIDEO kecil di pojok
```

Website harus terasa seperti **cinematic aerial production portfolio**, bukan landing page SaaS.

---

## 23. Definition of Done

Website dianggap selesai apabila memenuhi semua kriteria berikut:

### Core Functionality ✅
- [x] Fullscreen drone video berfungsi (autoplay, muted, loop)
- [x] Liquid glass navbar bekerja responsive
- [x] Hero responsive di desktop/tablet/mobile
- [x] Mobile menu drawer berfungsi
- [x] Portfolio section tampil dengan grid layout
- [x] Services section tampil dengan typography-first approach
- [x] About section menampilkan info faktual
- [x] Location Magetan ditampilkan dengan jelas
- [x] Contact CTA tersedia dengan struktur link siap pakai

### Visual & UX ✅
- [x] Instagram/TikTok/WhatsApp sudah disiapkan strukturnya (tanpa URL dummy)
- [x] GSAP animation berjalan smooth tanpa jank
- [x] Video tidak menyebabkan halaman terasa berat
- [x] Poster image fallback bekerja saat video gagal load

### Technical ✅
- [x] SEO metadata lengkap (Title, Description, OG, Twitter Card)
- [x] robots.txt & sitemap.xml tersedia
- [x] Accessibility dasar terpenuhi (ARIA labels, heading hierarchy, alt text)
- [x] Tidak ada dummy URL yang terlihat oleh user
- [x] Tidak ada klaim bisnis yang dibuat-buat (no fake certifications)

### Performance ✅
- [ ] Lighthouse Performance ≥ 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Video size ≤ 5MB
- [ ] All images optimized WebP

### Accessibility ✅
- [ ] WCAG AA color contrast compliance
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] prefers-reduced-motion respected

---

## 24. Final Art Direction

**Minimal. Cinematic. Dark. Glassy.**

Bayangan visual:

> Fullscreen drone footage + floating liquid-glass navigation + oversized typography + subtle motion + clean portfolio.

Jangan over-engineer versi pertama. **Bikin satu hero yang kelihatan mahal dulu.**

---

## 25. Assets Required

### Videos:
- `public/videos/hero-drone.mp4` (optimized, ≤5MB, 1920x1080 or 1280x720)

### Images:
- `public/images/poster.webp` (fallback for video, same aspect ratio as video)
- `public/images/logo.svg` (minimalist brand logo)
- `public/images/portfolio/project-01.jpg` (placeholder)
- `public/images/portfolio/project-02.jpg` (placeholder)
- `public/images/portfolio/project-03.jpg` (placeholder)

### Icons:
- `public/icons/social-instagram.svg`
- `public/icons/social-tiktok.svg`
- `public/icons/social-whatsapp.svg`

### Fonts:
- Prefer system font stack or Google Fonts (Inter/Outfit/Syne)

---

## Document Version
- **Version:** 1.0
- **Date:** 2024
- **Status:** Approved for Development
