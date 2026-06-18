import L from 'leaflet';
import { ExternalLink, MapPinned, Navigation } from 'lucide-react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { mosqueProfile } from '../data/mosque';

const position = [mosqueProfile.coordinates.lat, mosqueProfile.coordinates.lng];

const mosqueIcon = L.divIcon({
  className: '',
  html: '<span class="map-marker" aria-hidden="true"></span>',
  iconAnchor: [15, 30],
  iconSize: [30, 30],
  popupAnchor: [0, -28]
});

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mosqueProfile.coordinates.lat},${mosqueProfile.coordinates.lng}`;

  return (
    <section id="location" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Lokasi"
              title="Berada di kawasan strategis Batam Centre."
              description={mosqueProfile.address}
            />

            <div className="mt-8 grid gap-4">
              <div className="rounded-lg border border-border bg-white p-5 shadow-soft">
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <MapPinned size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-text">Koordinat</p>
                    <p className="mt-1 font-bold text-heading">
                      {mosqueProfile.coordinates.lat}, {mosqueProfile.coordinates.lng}
                    </p>
                  </div>
                </div>
              </div>

              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-hover"
                href={mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Navigation size={18} />
                Buka Rute
                <ExternalLink size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-lg border border-border bg-white p-2 shadow-soft">
              <MapContainer center={position} className="h-[430px] w-full rounded-md" scrollWheelZoom={false} zoom={16}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={mosqueIcon} position={position}>
                  <Popup>
                    <strong>Masjid Agung Batam</strong>
                    <br />
                    Batam Centre
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
