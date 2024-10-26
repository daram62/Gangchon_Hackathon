// src/pages/CameraView.tsx
import React from 'react';
import CameraContainer from '../components/CameraContainer';

const CameraView: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <CameraContainer />
    </div>
  );
};

export default CameraView;