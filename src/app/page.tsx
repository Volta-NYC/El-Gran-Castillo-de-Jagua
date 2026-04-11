import Link from "next/link";
import { SITE } from "@/lib/data";

const reviews = [
  {
    quote: "El Gran Castillo never disappoints. It will always remain my number one go to for Spanish food. With reasonable and fair pricing, excellent service and quality preparation, you can never go wrong!",
    headline: "You won't be sorry that you made the trip.",
    name: "Sean L.",
    location: "Brooklyn, NY",
  },
  {
    quote: "There's a long menu that I don't know much about since I'm always drawn to the pork chops with yellow rice and red beans. I've enjoyed the mofongo and chicken soup.",
    headline: "El Gran Castillo De Jagua is a must-visit.",
    name: "Josh B.",
    location: "Jersey City, NJ",
  },
  {
    quote: "They have plenty of good food, steak, fried chicken and pork. So many to list you would need to check it out for yourself.",
    headline: "Love the Sancocho.",
    name: "Sharon B.",
    location: "Brooklyn, NY",
  },
];

export default function HomePage() {
  return (
    <main>
      {}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">FLATBUSH AVE · BROOKLYN · EST. 1983</p>
          <h1 className="hero-title">{SITE.name}</h1>
          <p className="hero-sub">
            New York&apos;s outstanding Dominican restaurant &mdash; authentic island specialties,
            served with love every day.
          </p>
          <div className="hero-actions">
            <Link href="/menu" className="btn-primary">View Menu</Link>
            <Link href="/contact" className="btn-ghost">Find Us</Link>
          </div>
        </div>
      </section>

      {}
      <section className="split-section container">
        <div className="split-image">
          <img
            src="/dish.jpeg"
            alt="Delicious Dominican food"
          />
        </div>
        <div className="split-text">
          <p className="eyebrow dark">OUR STORY</p>
          <h2>A Neighborhood Gem Since 1983</h2>
          <p>
            El Gran Castillo de Jagua is Brooklyn&apos;s home for authentic Dominican cuisine,
            proudly serving Flatbush Avenue in the laid-back, family-oriented atmosphere
            of a true island restaurant.
          </p>
          <p>
            Enjoy the variety of flavors across our American and Dominican dishes &mdash; all
            naturally seasoned. We&apos;re famous for our once-tasted, never-forgotten rotisserie
            chicken and roast pork, best paired with rice and beans, fresh vegetables, or
            other island accompaniments. Finish with a homemade dessert for a complete
            taste of the Caribbean.
          </p>
          <p>Open daily for breakfast, lunch, and dinner. Come hungry.</p>
          <Link href="/menu" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            Explore the Menu
          </Link>
        </div>
      </section>

      {}
      <section className="reviews-section">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>WHAT PEOPLE SAY</p>
          <h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Loved by the Neighborhood</h2>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.name} className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-headline">&ldquo;{r.headline}&rdquo;</p>
                <p className="review-text">{r.quote}</p>
                <p className="review-name">&mdash; {r.name}, {r.location} &middot; Yelp</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}