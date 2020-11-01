import React from "react";

import { Header, ProductGrid, OffCanvas } from "./components";
import { AppProvider } from './config'
import "./App.css";


function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <ProductGrid />
        <OffCanvas />
      </AppProvider>
    </div>
  );
}

export default App;
