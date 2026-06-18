# Masjid Agung Batam - Digital Profile

Website profil digital modern untuk Masjid Agung Batam, dibuat sebagai project portfolio frontend menggunakan React, Vite, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, React Leaflet, dan Lucide React.

Project ini menampilkan informasi masjid, sejarah, arsitektur, fasilitas, galeri foto/video, informasi kegiatan, lokasi peta interaktif, FAQ, serta mode siang/malam.

> Dibuat oleh Zulhendry MS.

## Fitur Utama

- Hero visual dengan mode siang dan malam.
- Dark mode / light mode dengan toggle di navbar.
- Smooth scroll untuk navigasi menu.
- Navbar glassmorphism responsive.
- Scroll reveal animation.
- Animated counter untuk statistik.
- Timeline sejarah masjid.
- Section arsitektur dan fasilitas.
- Galeri foto/video dengan modal.
- Informasi terbaru dengan modal detail.
- Peta lokasi interaktif menggunakan React Leaflet.
- FAQ accordion.
- Floating back to top.
- SEO basic: meta tag, Open Graph, Twitter Card, favicon, `robots.txt`, dan `sitemap.xml`.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lenis Smooth Scroll
- React Leaflet
- Leaflet
- Lucide React

## Struktur Folder

```text
src/
|-- assets/
|   |-- gallery/
|   `-- media/
|-- components/
|-- constants/
|-- contexts/
|-- data/
|-- features/
|-- hooks/
|-- layouts/
|-- pages/
|-- styles/
|-- App.jsx
`-- main.jsx
```

## Cara Menggunakan

Pastikan Node.js sudah terinstall. Project ini dibuat dan diuji dengan Node.js versi modern.

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka website di browser:

```text
http://127.0.0.1:5173/
```

Jika port `5173` sedang dipakai, Vite akan menawarkan port lain. Bisa juga tentukan port manual:

```bash
npm run dev -- --port 5174
```

## Build Production

Untuk membuat build production:

```bash
npm run build
```

Hasil build akan dibuat di folder:

```text
dist/
```

Untuk preview hasil build:

```bash
npm run preview
```

## Deploy ke Cloudflare Pages

Pengaturan yang disarankan:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```

## Mengubah Konten

Konten website dipisahkan dalam file data agar mudah diedit:

- Profil masjid: `src/data/mosque.js`
- Galeri dan hero image: `src/data/gallery.js`
- Fasilitas: `src/data/facilities.js`
- Informasi terbaru: `src/data/news.js`
- FAQ: `src/data/faq.js`
- Menu navigasi: `src/constants/navigation.js`

## Mengubah Gambar Siang dan Malam

Gambar mode siang dan malam diatur di:

```text
src/data/gallery.js
```

Saat ini:

- Mode siang: `src/assets/gallery/exterior-courtyard-blue.jpg`
- Mode malam: `src/assets/gallery/night-milky-way.png`

## Catatan

Project ini adalah frontend static. Semua data masih disimpan di file JavaScript lokal, sehingga mudah dikembangkan lagi menjadi fullstack dengan CMS, REST API, jadwal sholat, donasi online, multi language, PWA, atau dashboard admin.
