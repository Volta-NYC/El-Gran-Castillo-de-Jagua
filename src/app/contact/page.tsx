import { SITE } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hours & Contact', 
};

const mapQuery = encodeURIComponent(SITE.address);

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">VISIT US</p>
          <h1>Hours &amp; Contact</h1>
        </div>
      </section>

      <section className="contact-body">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-panel">
              <div className="contact-panel-header">
                <p className="eyebrow">Plan Your Visit</p>
                <h2>Find us in Prospect Heights</h2>
                <p className="contact-intro">
                  Stop by for Dominican breakfast, lunch, or dinner in the heart of Brooklyn.
                  We&apos;re easy to reach and open daily.
                </p>
              </div>

              <div className="contact-split">
                <div className="contact-info">
                  <div className="contact-block">
                    <p className="contact-info-label">Address</p>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-address-link"
                    >
                      355 Flatbush Ave<br />
                      Brooklyn, NY 11238
                    </a>
                  </div>

                  <div className="contact-divider-line" />

                  <div className="contact-block">
                    <p className="contact-info-label">Phone</p>
                    <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="contact-phone-link">
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-vertical-divider" />

                <div className="contact-hours">
                  <div className="hours-block">
                    <p className="hours-day-label">{SITE.hours.weekdays.label}</p>
                    <p className="hours-time">{SITE.hours.weekdays.time}</p>
                  </div>
                  <div className="hours-block">
                    <p className="hours-day-label">{SITE.hours.sunday.label}</p>
                    <p className="hours-time">{SITE.hours.sunday.time}</p>
                  </div>
                  <div className="hours-block">
                    <p className="hours-day-label">Nearby</p>
                    <p className="hours-time">Prospect Heights, Brooklyn</p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Directions
                </a>
                <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="contact-secondary-link">
                  Call Restaurant
                </a>
              </div>

              <div className="contact-notes">
                <div className="contact-note-card">
                  <p className="contact-info-label">Best For</p>
                  <p>Casual dine-in meals, quick takeout, and family-style favorites all day.</p>
                </div>
                <div className="contact-note-card">
                  <p className="contact-info-label">Neighborhood Tip</p>
                  <p>Located right on Flatbush Avenue for an easy stop before or after exploring Brooklyn.</p>
                </div>
              </div>
            </div>

            <div className="map-card">
              <div className="map-frame">
                <iframe
                  title={`${SITE.name} map`}
                  src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="map-card-body">
                <p className="contact-info-label">Map</p>
                <p>
                  Use the live map to preview the location, then open directions for turn-by-turn navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
