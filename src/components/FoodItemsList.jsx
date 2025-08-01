import React from "react";
import Image1 from "../../src/assets/close-up-appetizing-ramadan-meal.jpg";

const FoodItemsList = ({ foodData, onBackToScanner }) => {
  if (!foodData || !foodData.items) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No food data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 flex justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Food Items Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {foodData.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex justify-center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={Image1}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    width={350}
                    height={350}
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between h-full">
                  {/* Name & Type */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <div className="flex items-center">
                      <span
                        className={`w-3 h-3 rounded-full mr-2 ${
                          item.type === "Veg" ? "bg-green-600" : "bg-red-600"
                        }`}
                      ></span>
                      <span className="text-sm text-gray-500">
                        {item.type === "Veg" ? "Veg" : "Non-Veg"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {/* <p className="text-sm text-gray-600 mb-4 w-[20%]">
                    {item.description}
                  </p> */}

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ₹{item.price}
                    </span>
                    <span className="text-xs text-gray-400 capitalize">
                      {item.food_type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Prices are subject to change. Please confirm with staff before
            ordering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItemsList;
