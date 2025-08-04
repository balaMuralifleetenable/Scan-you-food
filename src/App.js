import React, { useState, useEffect } from "react";
import newFoodData from "./sampleFoodData.json";
import FoodItemsList from "./components/FoodItemsList";
import "./App.css";

function App() {
  const [filterType, setFilterType] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000); // Show for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const getFilteredItems = () => {
    let allItems = [];
    newFoodData.menu.forEach((menuSection) => {
      const typeMatches = filterType === "All" || menuSection.type === filterType;
      const categoryMatches = filterCategory === "All" || menuSection.category === filterCategory;
      if (typeMatches && categoryMatches) {
        allItems = allItems.concat(
          menuSection.items.map((item) => ({
            ...item,
            category: menuSection.category,
            type: menuSection.type,
            subcategory: menuSection.subcategory,
          }))
        );
      }
    });
    return allItems;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="app-container">
      {showWelcome ? (
        <div className="welcome-message">
          <h1>Welcome to <span className="royal">Royal Kitchen</span></h1>
        </div>
      ) : (
        <>
          {/* Filter Buttons for Food Type */}
          <div className="filter-buttons">
            {["All", "Veg", "Non-Veg"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilterType(type);
                  setFilterCategory("All");
                }}
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

          {/* Filter Buttons for Category */}
          <div className="filter-buttons category-filters">
            {newFoodData.menu
              .filter((menuSection) => filterType === "All" || menuSection.type === filterType)
              .map((menuSection) => menuSection.category)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`filter-button ${
                    filterCategory === category ? "active-category" : ""
                  }`}
                >
                  {category}
                </button>
              ))}
          </div>

          {/* Food Items */}
          <div className="food-list-section">
            <FoodItemsList foodData={{ items: filteredItems }} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;