import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

const QRScannerComponent = ({ onScanSuccess, onClose }) => {
  const [isScanning, setIsScanning] = useState(true);
  const [error, setError] = useState('');

  const handleScan = (result) => {
    if (result && result.length > 0) {
      setIsScanning(false);
      onScanSuccess(result[0].rawValue);
    }
  };

  const handleError = (error) => {
    console.log(error);
    setError('Failed to access camera. Please check permissions.');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Scan QR Code</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        {error ? (
          <div className="text-red-500 text-center py-8">
            <p>{error}</p>
            <button 
              onClick={() => setError('')}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="w-full h-64">
            {isScanning && (
              <Scanner
                onScan={handleScan}
                onError={handleError}
                style={{ width: '100%', height: '100%' }}
              />
            )}
          </div>
        )}
        
        <p className="text-sm text-gray-600 text-center mt-4">
          Point your camera at a QR code to scan
        </p>
      </div>
    </div>
  );
};

export default QRScannerComponent;