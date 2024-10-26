import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import CameraContainer from './components/CameraContainer';
import DestinationSearch from './components/DestinationSearch';
import RouteSummary from './components/RouteSummary';

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [destination, setDestination] = useState<string | null>(null);
  const [showRouteSummary, setShowRouteSummary] = useState(false);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  const handleSelectDestination = (destination: string) => {
    setDestination(destination);
    setShowRouteSummary(true);
  };

  const handleStartNavigation = () => {
    setShowRouteSummary(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : showRouteSummary && destination ? (
        <RouteSummary
          origin="현재 위치"
          destination={destination}
          onStartNavigation={handleStartNavigation}
        />
      ) : destination ? (
        <CameraContainer destination={destination} />
      ) : (
        <DestinationSearch onSelectDestination={handleSelectDestination} />
      )}
    </div>
  );
};

export default App;