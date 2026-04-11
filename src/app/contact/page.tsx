import { SITE } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">VISIT US</p>
          <h1>Hours & Contact</h1>
        </div>
      </section>

      <section className="container contact-body">
        <div className="contact-combined">

          <div className="contact-row">
            <span className="contact-icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>{SITE.address}</p>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                Get Directions →
              </a>
            </div>
          </div>

          <div className="contact-divider" />

          <div className="contact-row">
            <span className="contact-icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>{SITE.phone || "Coming soon"}</p>
            </div>
          </div>

          <div className="contact-divider" />

          <div className="contact-row">
            <span className="contact-icon">🕐</span>
            <div>
              <h3>Hours</h3>
              <div className="hours-list">
                <div className="hours-row">
                  <span>{SITE.hours.weekdays.label}</span>
                  <span className="hours-time">{SITE.hours.weekdays.time}</span>
                </div>
                <div className="hours-row">
                  <span>{SITE.hours.sunday.label}</span>
                  <span className="hours-time">{SITE.hours.sunday.time}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}