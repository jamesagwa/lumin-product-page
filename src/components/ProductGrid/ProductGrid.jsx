import React from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCTS } from "../../gql";
import "./style.css";

export function ProductGrid() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <div>loading</div>;
  }

  const { products } = data;

  return (
    <section className="p-grid">
      <div className="container">
        <div className="grid-row">
          {products.map((product) => (
            <div className="grid-column col-1" key={product.id}>
              <div>
                <img src={product.image_url} width="300px" alt="" />
              </div>
              {product.title}
              <p>From ${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
