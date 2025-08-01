import React, { useState } from "react";
import sampleFoodData from "./sampleFoodData.json";
import FoodItemsList from "./components/FoodItemsList";

function App() {
  const [filterType, setFilterType] = useState("All"); // All | Veg | Non-Veg

  const filteredItems = sampleFoodData.items.filter((item) => {
    if (filterType === "All") return true;
    return item.type === filterType;
  });

  const filteredData = {
    ...sampleFoodData,
    items: filteredItems,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Filter Toggle */}
      <div className="flex justify-center pt-6 pb-4">
        <div className="flex gap-3 sm:gap-5 px-4 py-2 bg-white rounded-full shadow-md border">
          {["All", "Veg", "Non-Veg"].map((type) => {
            const isSelected = filterType === type;

            const baseClasses =
              "px-4 py-2 rounded-full font-medium text-sm sm:text-base border transition-all duration-200 cursor-pointer";

            const selectedStyles = {
              All: "bg-gray-800 text-white border-gray-800",
              Veg: "bg-green-600 text-white border-green-600",
              "Non-Veg": "bg-red-600 text-white border-red-600",
            };

            const defaultStyles = {
              All: "bg-white text-gray-800 border-gray-300 hover:bg-gray-100",
              Veg: "bg-white text-[#06730F] border-[#00FF14] hover:bg-green-50",
              "Non-Veg": "bg-white text-[#FF0000] border-[#FF0000] hover:bg-red-50",
            };

            return (
              <div
                key={type}
                onClick={() => setFilterType(type)}
                className={`${baseClasses} ${
                  isSelected ? selectedStyles[type] : defaultStyles[type]
                }`}
                style={{display:"flex"}}
              >
                {type === "Veg" && "🥦 "}
                {type === "Non-Veg" && "🍗 "}
                {type}
              </div>
            );
          })}
        </div>
      </div>

      {/* Food List */}
      <div className="px-4">
        <FoodItemsList foodData={filteredData} />
      </div>
    </div>
  );
}

export default App;
