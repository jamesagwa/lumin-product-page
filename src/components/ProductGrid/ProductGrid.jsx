import React from "react";

import "./style.css";

export function ProductGrid() {
  return (
    <section className="p-grid">
      <div className="container">
        <div className="grid-row">
          <div className="grid-column col-1">
            Age management Collection
            <p>From $48.00</p>
          </div>
          <div className="grid-column col-2">
            Classic maintenance Collection
            <p>From $48.00</p>
          </div>
          <div className="grid-column col-3">
            Collection Trio Collection
            <p>From $48.00</p>
          </div>
          <div className="grid-column col-4">
            The Complete Collection
            <p>From $48.00</p>
          </div>
          <div className="grid-column col-5">
            ANo-nonsense Charcoal Cleanser
            <p>From $48.00</p>
          </div>
          <div className="grid-column col-6">
            Premium-Grade Moisturizing Balm
            <p>From $48.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
