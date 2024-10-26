// App.tsx

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
    console.log('SplashScreen 종료');
  };

  const handleSelectDestination = (destination: string) => {
    setDestination(destination);
    setShowRouteSummary(true);
    console.log('목적지 선택:', destination);
  };

  const handleStartNavigation = () => {
    setShowRouteSummary(false);
    console.log('내비게이션 시작');
  };

  const handleExitNavigation = () => {
    // 내비게이션 종료 시 상태 초기화
    setDestination(null);
    console.log('내비게이션 종료');
  };

  const renderContent = () => {
    if (isSplashVisible) {
      return <SplashScreen onFinish={handleSplashFinish} />;
    }
  
    if (showRouteSummary && destination) {
      return (
        <RouteSummary
          origin="현재 위치"
          destination={destination}
          onStartNavigation={handleStartNavigation}
        />
      );
    }
  
    if (destination) {
      return (
        <CameraContainer
          destination={destination}
          onExitNavigation={handleExitNavigation}
        />
      );
    }
  
    return <DestinationSearch onSelectDestination={handleSelectDestination} />;
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {renderContent()}
    </div>
  );
};

export default App;