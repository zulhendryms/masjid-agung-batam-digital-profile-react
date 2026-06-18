import courtyardBlue from '../assets/gallery/exterior-courtyard-blue.jpg';
import sunsetReflection from '../assets/gallery/exterior-sunset-reflection.jpg';
import domeClose from '../assets/gallery/dome-architecture-close.jpg';
import nightMilkyWay from '../assets/gallery/night-milky-way.png';
import interiorHall from '../assets/gallery/interior-prayer-hall.webp';
import ramadanTakjil from '../assets/gallery/ramadan-takjil.jpg';
import profileVideo from '../assets/media/masjid-profile-video.mp4';

export const heroSlides = [
  {
    src: nightMilkyWay,
    title: 'Ikon religi Batam di bawah langit malam',
    alt: 'Masjid Agung Batam pada malam hari dengan langit berbintang'
  },
  {
    src: courtyardBlue,
    title: 'Kubah biru dan plaza utama',
    alt: 'Fasad Masjid Agung Batam dengan kubah biru dan halaman reflektif'
  },
  {
    src: sunsetReflection,
    title: 'Suasana senja di Batam Centre',
    alt: 'Masjid Agung Batam saat senja dengan pantulan di halaman marmer'
  }
];

export const themeHeroImages = {
  light: {
    src: courtyardBlue,
    title: 'Mode siang di plaza utama',
    alt: 'Fasad Masjid Agung Batam pada siang hari dengan kubah biru dan halaman reflektif'
  },
  dark: {
    src: nightMilkyWay,
    title: 'Mode malam di bawah langit berbintang',
    alt: 'Masjid Agung Batam pada malam hari dengan langit berbintang'
  }
};

export const galleryItems = [
  {
    id: 'night-milky-way',
    type: 'image',
    category: 'Eksterior',
    title: 'Malam di Masjid Agung Batam',
    description: 'Fasad utama, menara, dan kubah biru yang menyala hangat pada malam hari.',
    src: nightMilkyWay,
    alt: 'Masjid Agung Batam pada malam hari'
  },
  {
    id: 'courtyard-blue',
    type: 'image',
    category: 'Eksterior',
    title: 'Plaza dan Kubah Utama',
    description: 'Tampilan simetris dari halaman utama dengan ornamen lantai yang reflektif.',
    src: courtyardBlue,
    alt: 'Halaman depan Masjid Agung Batam'
  },
  {
    id: 'sunset-reflection',
    type: 'image',
    category: 'Senja',
    title: 'Refleksi Senja',
    description: 'Kubah besar dan lengkung masjid terlihat dramatis saat cahaya senja turun.',
    src: sunsetReflection,
    alt: 'Masjid Agung Batam saat senja'
  },
  {
    id: 'dome-close',
    type: 'image',
    category: 'Arsitektur',
    title: 'Detail Kubah Biru',
    description: 'Pola putih geometris pada kubah menjadi ciri visual Masjid Agung Batam.',
    src: domeClose,
    alt: 'Detail kubah biru Masjid Agung Batam'
  },
  {
    id: 'interior-hall',
    type: 'image',
    category: 'Interior',
    title: 'Ruang Shalat Utama',
    description: 'Interior luas dengan mihrab, pencahayaan lembut, dan karpet biru bernuansa tenang.',
    src: interiorHall,
    alt: 'Ruang shalat utama Masjid Agung Batam'
  },
  {
    id: 'ramadan-takjil',
    type: 'image',
    category: 'Kegiatan',
    title: 'Suasana Ramadan',
    description: 'Dokumentasi kegiatan berbagi dan kebersamaan di lingkungan masjid.',
    src: ramadanTakjil,
    alt: 'Kegiatan Ramadan di Masjid Agung Batam'
  },
  {
    id: 'profile-video',
    type: 'video',
    category: 'Video',
    title: 'Cuplikan Suasana Masjid',
    description: 'Video pendek untuk memperkenalkan suasana Masjid Agung Batam.',
    src: profileVideo,
    poster: courtyardBlue,
    alt: 'Video suasana Masjid Agung Batam'
  }
];
