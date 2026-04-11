import Link from "next/link";
import { SITE } from "@/lib/data";

const reviews = [
  {
    name: "Maria T.",
    text: "The mofongo here is the best I've had outside of Santo Domingo. Feels like home every single time.",
    stars: 5,
  },
  {
    name: "James R.",
    text: "Been coming here for years. The rotisserie chicken and rice is unbeatable — huge portions, great price.",
    stars: 5,
  },
  {
    name: "Lisette C.",
    text: "Sancocho on Tuesdays is a must. Rich, hearty, authentic. This place never misses.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">FLATBUSH AVE · BROOKLYN</p>
          <h1 className="hero-title">{SITE.name}</h1>
          <p className="hero-sub">Authentic Dominican cuisine, made with love since day one.</p>
          <div className="hero-actions">
            <Link href="/menu" className="btn-primary">View Menu</Link>
            <Link href="/contact" className="btn-ghost">Find Us</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="split-section container">
        <div className="split-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
            alt="Delicious Dominican food"
          />
        </div>
        <div className="split-text">
          <p className="eyebrow dark">OUR STORY</p>
          <h2>A Taste of the Caribbean in Brooklyn</h2>
          <p>
            El Gran Castillo de Jagua has been a cornerstone of Flatbush Avenue for decades.
            From our legendary mofongo to our slow-roasted meats and fresh seafood, every dish
            is made the way it was meant to be — with tradition, care, and real ingredients.
          </p>
          <p>
            Open every day, serving breakfast, lunch, and dinner. Come hungry.
          </p>
          <Link href="/menu" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            Explore the Menu
          </Link>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="reviews-section">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>WHAT PEOPLE SAY</p>
          <h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Loved by the Neighborhood</h2>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{"★".repeat(r.stars)}</div>
                <p className="review-text">"{r.text}"</p>
                <p className="review-name">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}