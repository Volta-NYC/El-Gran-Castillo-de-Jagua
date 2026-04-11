import { SITE } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hours & Contact', 
};

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
          <div className="contact-split">

            {}
            <div className="contact-info">
              <div className="contact-block">
                <p className="contact-info-label">Address</p>
                {}
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

            {}
            <div className="contact-vertical-divider" />

            {}
            <div className="contact-hours">
              <div className="hours-block">
                <p className="hours-day-label">{SITE.hours.weekdays.label}</p>
                <p className="hours-time">{SITE.hours.weekdays.time}</p>
              </div>
              <div className="hours-block">
                <p className="hours-day-label">{SITE.hours.sunday.label}</p>
                <p className="hours-time">{SITE.hours.sunday.time}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}