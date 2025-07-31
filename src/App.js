import React, { useState } from "react";

import sampleFoodData from "./sampleFoodData.json";
import QRScannerComponent from "./components/QRScannerComponent";
import FoodItemsList from "./components/FoodItemsList";

function App() {
  const [showScanner, setShowScanner] = useState(false);
  const [foodData, setFoodData] = useState(null);
  const [scannedUrl, setScannedUrl] = useState("");

  const handleScanSuccess = (result) => {
    console.log("Scanned QR Code:", result);
    setScannedUrl(result);
    setShowScanner(false);

    // For demo purposes, we'll use sample data
    // In a real app, you would fetch data from the scanned URL
    setTimeout(() => {
      setFoodData(sampleFoodData);
    }, 500);
  };

  const handleBackToScanner = () => {
    setFoodData(null);
    setScannedUrl("");
  };

  const startScanning = () => {
    setShowScanner(true);
  };

  return (
    <div className="App">
      {!foodData && !showScanner && (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Food Menu Scanner
            </h1>
            <div className="space-y-4">
              <button
                onClick={startScanning}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg block mx-auto"
              >
                📱 Scan QR Code
              </button>
              <button
                onClick={() => setFoodData(sampleFoodData)}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-600 transition-colors shadow-lg block mx-auto"
              >
                🍕 View Demo Menu
              </button>
            </div>
            <p className="text-white mt-4 opacity-90">
              Scan a restaurant's QR code or try the demo
            </p>
          </div>
        </div>
      )}

      {showScanner && (
        <QRScannerComponent
          onScanSuccess={handleScanSuccess}
          onClose={() => setShowScanner(false)}
        />
      )}

      {foodData && (
        <FoodItemsList
          foodData={foodData}
          onBackToScanner={handleBackToScanner}
        />
      )}
    </div>
  );
}

export default App;
