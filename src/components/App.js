import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Single state variable to toggle between light and dark
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Class name depends on isDarkMode
  const appClass = isDarkMode ? "App dark" : "App light";

  // Toggle function
  function toggleMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
