import React from "react";
import "./App.css";
import { Menu } from "./components";
import recipes from "./data/recipes.json";

function App() {
  return (
    <div className="App">
      <Menu recipes={recipes} />
    </div>
  );
}

export default App;
