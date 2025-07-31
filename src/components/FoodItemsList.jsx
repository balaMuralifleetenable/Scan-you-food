import React from 'react';

const FoodItemsList = ({ foodData, onBackToScanner }) => {
  if (!foodData || !foodData.items) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No food data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <button 
            onClick={onBackToScanner}
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            ← Scan Another QR Code
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {foodData.restaurant || 'Menu Items'}
          </h1>
          <p className="text-gray-600">Scanned from QR Code</p>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodData.items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Food Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
              </div>
              
              {/* Food Details */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                
                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">${item.price}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Prices are subject to change. Please confirm with staff before ordering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItemsList;