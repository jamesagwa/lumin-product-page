import React from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCTS } from "../../gql";
import { useAppContext } from '../../hooks'
import "./style.css";

export function ProductGrid() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { addItem } = useAppContext()

  if (loading) {
    return <div>loading</div>;
  }

  if (error && !data) {
    return <div>There was an error displaying this page. Please try again later</div>
  }

  const { products } = data;

  return (
    <section className="p-grid">
      <div className="container">
        <div className="grid-row">
          {products.map((product) => (
            <div className="grid-column col-1 mt-2" key={product.id}>
              <div>
                <img src={product.image_url} alt="" />
              </div>
              <p className="mt-1">
                {product.title}
              </p>
              <p className="mt-small">From ${product.price}</p>
              <button className="btn mt-1" onClick={() => addItem({...product})}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
