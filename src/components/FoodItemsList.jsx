import React from "react";
import Image1 from "../../src/assets/close-up-appetizing-ramadan-meal.jpg";

const FoodItemsList = ({ foodData, onBackToScanner }) => {
  if (!foodData || !foodData.items) {
    return (
      <div className="no-data">
        <p>No food data available</p>
      </div>
    );
  }

  return (
    <div className="food-list-container">
      <div className="food-list-wrapper">
        <div className="food-grid">
          {foodData.items.map((item) => (
            <div className="food-card" key={item.id}>
              <div>
                {/* Conditionally render the image wrapper */}
                {item.image && (
                  <div className="food-image-wrapper">
                    <img
                      src={item.image} // Use the image URL from the item object
                      alt={item.name}
                      className="food-image"
                      width={350}
                      height={350}
                    />
                  </div>
                )}

                <div className="food-card-content">
                  <div className="food-header">
                    <div className="food-type">
                      <span
                        className={`food-dot ${
                          item.type === "Veg" ? "veg" : "non-veg"
                        }`}
                      ></span>
                      <h3 className="food-name">{item.name}</h3>
                    </div>
                  </div>

                  <div className="food-footer">
                    {/* Display category and subcategory if they exist */}
                    {item.category && (
                      <span className="food-category">{item.category}</span>
                    )}

                  </div>
                </div>
              </div>
              <div className="food-price">₹{item.price}</div>
            </div>
          ))}

        </div>

        <div className="food-footer-note">
          <p>
            Prices are subject to change. Please confirm with staff before
            ordering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItemsList;