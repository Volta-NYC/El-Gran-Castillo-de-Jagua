"use client";

import { useState } from "react";
import { BREAKFAST_MENU_SECTIONS, LUNCH_DINNER_MENU_SECTIONS } from "@/lib/data";

export default function MenuPage() {
  const [tab, setTab] = useState<"breakfast" | "lunch">("breakfast");
  const sections = tab === "breakfast" ? BREAKFAST_MENU_SECTIONS : LUNCH_DINNER_MENU_SECTIONS;

  return (
    <main className="menu-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">EL GRAN CASTILLO DE JAGUA</p>
          <h1>Our Menu</h1>
        </div>
      </section>

      <section className="container menu-body">
        <div className="menu-tabs">
          <button
            className={`menu-tab ${tab === "breakfast" ? "active" : ""}`}
            onClick={() => setTab("breakfast")}
          >
            Breakfast
          </button>
          <button
            className={`menu-tab ${tab === "lunch" ? "active" : ""}`}
            onClick={() => setTab("lunch")}
          >
            Lunch &amp; Dinner
          </button>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="menu-section">
            <div className="menu-section-header">
              <h2>{section.title}</h2>
              {section.note ? (
                <p className="menu-section-subtitle">{section.note}</p>
              ) : null}
            </div>
            <div className="menu-grid">
              {section.items.map((item) => (
                <div key={item.name} className="menu-card">
                  <div className="menu-card-row">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  {item.desc ? <p>{item.desc}</p> : null}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="menu-disclaimer">
          Prices subject to change without notice. Consuming raw or undercooked meat, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
        </p>
      </section>
    </main>
  );
}