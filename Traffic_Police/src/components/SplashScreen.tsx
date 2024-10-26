// src/components/SplashScreen.tsx

import React, { useEffect } from 'react';
import logo from '../assets/logo.png'; // 필요한 이미지 경로로 수정하세요.

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3초 후에 스플래시 화면 종료
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      {/* 콘텐츠 컨테이너 */}
      <div className="w-[90%] max-w-[1280px] h-[80%] max-h-[832px] md:px-[100px] md:py-[80px] p-6 bg-white bg-opacity-90 rounded-xl shadow flex flex-col justify-start items-center gap-8 relative z-10">
        {/* 로고 이미지 */}
        <img
          className="w-[40%] max-w-[341px] h-auto object-contain"
          src={logo}
          alt="Logo"
        />

        {/* 텍스트 영역 */}
        <div className="self-stretch h-[136px] relative w-full">
          <div className="absolute inset-x-0 top-0 text-center text-black text-4xl md:text-5xl lg:text-[64px] font-bold font-Pretendard">
            Signify
          </div>
          <div className="absolute inset-x-0 top-[93px] text-center text-black text-xl md:text-2xl lg:text-4xl font-semibold font-Pretendard">
            AI 기반 교통 수신호 인식 시스템
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;