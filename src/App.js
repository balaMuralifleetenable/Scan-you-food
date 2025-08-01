import React, { useState } from "react";
import sampleFoodData from "./sampleFoodData.json";
import FoodItemsList from "./components/FoodItemsList";
import "./App.css";

function App() {
  const [filterType, setFilterType] = useState("All");

  const filteredItems = sampleFoodData.items.filter((item) => {
    if (filterType === "All") return true;
    return item.type === filterType;
  });

  const filteredData = {
    ...sampleFoodData,
    items: filteredItems,
  };

  return (
    <div className="app-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Veg", "Non-Veg"].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`filter-button ${
              filterType === type
                ? type === "Veg"
                  ? "active-veg"
                  : type === "Non-Veg"
                  ? "active-nonveg"
                  : "active-all"
                : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Food Items */}
      <div className="food-list-section">
        <FoodItemsList foodData={filteredData} />
      </div>
    </div>
  );
}

export default App;
