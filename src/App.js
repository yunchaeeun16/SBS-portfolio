import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
