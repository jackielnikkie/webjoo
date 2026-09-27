# DRONE AERIAL PORTFOLIO - PROJECT STRUCTURE SUMMARY

## 📁 **Core Structure**
```
D:\webjoo\
├── src/                    # React source code
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles (Tailwind + custom animations)
│   │   ├── layout.tsx      # Root layout (Inter font, GSAP/Lenis CDN)
│   │   └── page.tsx        # Main page (Navbar + Sections + SmoothScroll)
│   │
│   ├── components/         # Reusable React components
│   │   ├── Hero.tsx        # Full-screen hero with GSAP scroll animation
│   │   ├── Navbar.tsx      # Glassmorphism navigation bar
│   │   ├── Portfolio.tsx   # Horizontal scrollytelling slider with lazy video
│   │   ├── Services.tsx    # Service offerings grid
│   │   ├── About.tsx       # Company info section (PENDING: foto + bio)
│   │   ├── Location.tsx    # Magetan location display
│   │   ├── Contact.tsx     # CTA & social links
│   │   ├── Footer.tsx      # Site footer
│   │   └── SmoothScroll.tsx # Lenis smooth scroll integration
│   │
│   ├── config/             # Configuration files
│   │   └── site.ts         # Brand settings (name, location, drone)
│   │
│   └── lib/                # Utility functions
│       └── utils.ts        # Helper functions (cn utility)
│
├── public/                 # Static assets
│   ├── videos/
│   │   ├── drone_video.mp4 # Hero background video
│   │   └── portfolio/      # Individual portfolio videos
│   │       ├── 01-landscape.mp4
│   │       ├── 02-property.mp4
│   │       ├── 03-tourism.mp4
│   │       └── 04-commercial.mp4
│   ├── images/             # Image assets (PENDING: profile.jpg)
│   └── icons/              # Social media icons
│
├── AGENTS.md               # This file - project documentation
├── PRD.md                  # Product requirements document
├── backup.md               # Previous version backups
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS config
└── postcss.config.js       # PostCSS plugin config
```

---

## 🎨 **Key Features Implemented**

### **Hero Section (src/components/Hero.tsx)**
- ✅ Fullscreen video background (`object-cover` full coverage)
- ✅ GSAP ScrollTrigger parallax video (y: 100px, scrub: true)
- ✅ Scroll-triggered text fade out + translateY + scale down
- ✅ IntersectionObserver: pause video saat keluar viewport, play saat masuk
- ✅ Optimasi: `preload="metadata"`, tidak pakai `autoPlay` attribute
- ✅ Stagger animation per elemen (CAPTURE THE → WORLD → FROM ABOVE)

### **Navigation (src/components/Navbar.tsx)**
- ✅ Liquid glass effect (`backdrop-blur-md`)
- ✅ Fixed positioning with smooth transitions
- ✅ Responsive: mobile menu dengan hamburger
- ✅ Scroll state: bg lebih opaque saat scroll

### **Portfolio Scrollytelling (src/components/Portfolio.tsx)**
- ✅ Horizontal scroll dengan GSAP ScrollTrigger pinning
- ✅ Pin section, geser track ke kiri (x: -scrollAmount)
- ✅ Lazy video: `preload="none"`, play hanya saat 30% terlihat
- ✅ Pause + reset currentTime saat keluar viewport
- ✅ `rootMargin: 100px` untuk preload sebelum masuk viewport
- ✅ 4 portfolio cards: Landscape, Property, Tourism, Commercial

### **Services Section (src/components/Services.tsx)**
- ✅ 3-column grid: Aerial Photography, Videography, Custom Production
- ✅ Tags untuk setiap service
- ✅ Hover effect: border + bg color change

### **About Section (src/components/About.tsx)**
- ⏳ PENDING: Redesign dengan foto + bio data
- ⏳ PENDING: Foto profile Jonathan (grayscale, cinematic)
- ⏳ PENDING: Label "Æro Vagus" dengan font klasik
- ⏳ PENDING: Bio: "Seorang freelance videographer drone..."

### **Location Section (src/components/Location.tsx)**
- ✅ Display lokasi: Magetan, Jawa Timur
- ✅ Subtitle: "Available for aerial projects across East Java"

### **Contact Section (src/components/Contact.tsx)**
- ✅ CTA: "READY TO TAKE YOUR PROJECT HIGHER?"
- ✅ Social links: Instagram, TikTok, WhatsApp
- ✅ Hover effects pada social buttons

### **Footer (src/components/Footer.tsx)**
- ✅ Copyright dengan tahun dinamis
- ✅ Lokasi brand

---

## ⚙️ **Tech Stack**
- **Framework:** Next.js 16.x (App Router)
- **Language:** TypeScript 5.x
- **UI:** Tailwind CSS 4.x
- **Animation:** GSAP 3.12.5 + ScrollTrigger (CDN)
- **Smooth Scroll:** Lenis 1.1.18 (CDN)
- **Icons:** Lucide React

---

## 🔧 **Configuration Files**

### `src/config/site.ts`
```typescript
{
  name: "NEON AERIALS",
  tagline: "Aerial Cinematography",
  location: "Magetan, Jawa Timur",
  drone: { brand: "DJI", model: "Lito 1" },
  social: { instagram, tiktok, whatsapp },
}
```

### `package.json` Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## 🎯 **Current Status**
✅ All core sections functional  
✅ GSAP ScrollTrigger animations working  
✅ Video lazy loading & optimization active  
✅ Mobile responsive layouts  
✅ SEO metadata configured  
⏳ About section redesign (foto + bio Jonathan)  
⏳ Social media links activation  
⏳ Profile image upload (`public/images/profile.jpg`)  

---

## 📝 **Notes for Future AI Sessions**

### **CRITICAL RULES:**
1. **Do NOT kill node processes** — user has separate 9router server
2. **Do NOT restart dev server** unless absolutely necessary
3. **Always test in browser** (localhost:3000) before declaring done
4. **Backup before major changes** — use `backup.md` or git

### **Performance Optimizations Applied:**
- Hero video: `preload="metadata"`, pause saat keluar viewport
- Portfolio videos: `preload="none"`, lazy play via IntersectionObserver
- Hapus CSS animations yang redundant (GSAP handle semua)
- Hapus `* { padding: 0 }` dari globals.css (nge-override Tailwind)
- Gunakan `gsap.context()` + `revert()` untuk cleanup

### **Animation Patterns:**
- Hero: Parallax video + fade out text on scroll (scrub: 1)
- Portfolio: Horizontal scroll pinning (pin: true, scrub: 0.8)
- About (PENDING): Fade in + slide from sides
- Services: Static (no animation needed)
- Contact: Static (no animation needed)

### **Common Issues & Solutions:**
- **Hydration mismatch**: Jangan pakai conditional render di server (useEffect only)
- **GSAP not found**: Tunggu dengan `setTimeout` loop, jangan pakai `window.gsap` langsung
- **Video tidak play**: Pastikan `muted` attribute ada (autoplay policy browser)
- **ScrollTrigger tidak jalan**: Cek `gsap.registerPlugin(ScrollTrigger)` dan trigger element exists

### **File Locations:**
- Dev server: `http://localhost:3000`
- Chrome Puppeteer: `C:\Users\nzeex\.cache\puppeteer\chrome\win64-154.0.8037.57\chrome-win64\chrome.exe`
- Temp folder: `C:\Users\nzeex\AppData\Local\Temp\opencode`

---

## 🚀 **Next Tasks (Priority Order):**
1. **About Section Redesign** — Foto Jonathan + bio data
   - Upload foto ke `public/images/profile.jpg`
   - Label "Æro Vagus" dengan font klasik/serif
   - Bio text: "Seorang freelance videographer drone..."
   - Layout: Split columns (foto kiri, teks kanan)
   - Grayscale filter pada foto
   
2. **Social Media Links** — Update URL di `src/config/site.ts`
   - Instagram: real URL
   - TikTok: real URL
   - WhatsApp: real number

3. **Performance Audit** — Cek Lighthouse score
   - Image optimization
   - Font loading strategy
   - Core Web Vitals

---

**Last Updated:** 2026-09-25  
**Version:** 1.1  
**Status:** About section redesign pending (user mau tidur, lanjut besok)
