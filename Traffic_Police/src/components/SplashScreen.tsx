import React, { useEffect } from 'react';
import logo from '../assets/logo.png'

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3초 후에 스플래시 화면 종료
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="w-screen h-screen flex items-center justify-center animate-fade-in-out">
      <img src={logo} alt="Logo" className="w-1/2 h-auto rounded-[15px] g-white/90 " />
    </div>
  );
};

export default SplashScreen;