import React from "react";
import "./App.css";
import { Header, ProductGrid, OffCanvas } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductGrid />
      <OffCanvas />
    </div>
  );
}

export default App;
