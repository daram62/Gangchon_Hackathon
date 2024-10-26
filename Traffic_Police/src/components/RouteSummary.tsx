// src/components/RouteSummary.tsx

import React, { useState } from 'react';
import bg from '../assets/route_map.png';

import carIcon from '../assets/r_car.png';
import bikeIcon from '../assets/r_bike.png';
import walkIcon from '../assets/r_man.png';
import startIcon from '../assets/r_start.png';
import DesIcon from '../assets/r_des.png';

interface RouteSummaryProps {
  destination: string;
  onBack: () => void; // 뒤로 가기 핸들러
  onStartNavigation: () => void; // CameraContainer로 이동하는 핸들러
}

const RouteSummary: React.FC<RouteSummaryProps> = ({
  destination,
  onBack,
  onStartNavigation,
}) => {
  const origin = '강촌역';
  
  // 각 이동 수단별 시간과 거리 데이터
  const transportModes = [
    { name: '자동차', icon: carIcon, estimatedTime: '43분', distance: '30km' },
    { name: '자전거', icon: bikeIcon, estimatedTime: '2시간 20분', distance: '30km' },
    { name: '도보', icon: walkIcon, estimatedTime: '10시간 10분', distance: '30km' },
  ];

  // 상태를 통해 선택된 이동 수단, 시간, 거리 관리
  const [selectedMode, setSelectedMode] = useState(transportModes[0]);

  const handleModeChange = (mode: typeof transportModes[0]) => {
    setSelectedMode(mode);
  };

  return (
    <div className="relative w-[1280px] h-[832px] bg-[#f9f9f9] rounded-[15px] shadow-lg flex items-center justify-center">
      {/* 배경 지도 이미지 */}
      <img
        src={bg}
        alt="경로 배경 지도"
        className="absolute inset-0 w-full h-full object-cover rounded-[15px] shadow-lg"
      />
  
      {/* 뒤로 가기 버튼 - 왼쪽 위 고정 */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center active:scale-95"
      >
        <img src={DesIcon} alt="뒤로 가기" className="w-6 h-6" />
      </button>

      {/* 경로 요약 박스 - 왼쪽 하단 고정 */}
      <div className="absolute bottom-6 left-6 w-[374px] h-[423px] bg-white rounded-[20px] shadow-lg p-6 z-10">
        <div className="text-center text-black opacity-50 text-medium font-extrabold mb-6">
          경로 요약
        </div>

        {/* 출발지 및 도착지 */}
        <div className="w-[330px] h-[90px] mx-auto relative mb-6">
          <div className="w-[266px] h-[37px] px-5 py-2.5 rounded-[50px] border border-black/20 flex items-center mx-auto mb-3">
            <span className="text-[#505050] text-sm font-semibold">{origin}</span>
          </div>
          <div className="w-[266px] h-[37px] px-5 py-2.5 rounded-[50px] border border-black/20 flex items-center mx-auto">
            <span className="text-[#505050] text-sm font-semibold">{destination}</span>
          </div>

          {/* 출발지 및 도착지 아이콘 */}
          <div className="absolute left-0 top-[5px] w-7 h-7">
            <img src={startIcon} alt="출발지 아이콘" className="w-full h-full" />
          </div>
          <div className="absolute left-0 top-[58px] w-7 h-7">
            <img src={DesIcon} alt="도착지 아이콘" className="w-full h-full" />
          </div>
        </div>

        {/* 예상 시간 및 거리 */}
        <div className="flex justify-center items-center text-[#4b4b4b] text-[28px] font-semibold mb-2">
          <span>{selectedMode.estimatedTime}</span>
          <span className="ml-2 font-large">({selectedMode.distance})</span>
        </div>
        <div className="text-s text-black opacity-50 text-center mb-6">
          교통 상황에 따라 시간은 달라질 수 있습니다.
        </div>

        {/* 이동 수단 선택 */}
        <div className="flex justify-around mb-6">
          {transportModes.map((mode) => (
            <div
              key={mode.name}
              onClick={() => handleModeChange(mode)}
              className={`h-[38px] px-5 py-2.5 rounded-[50px] flex items-center justify-center cursor-pointer ${
                selectedMode.name === mode.name
                  ? 'bg-[#00be9b] text-white font-semibold'
                  : 'bg-black/10 text-black font-medium'
              }`}
            >
              <img src={mode.icon} alt={`${mode.name} 아이콘`} className="w-4 h-4 mr-2" />
              <span className="text-xs">{mode.name}</span>
            </div>
          ))}
        </div>

        {/* 주행 시작 버튼 */}
        <div className="flex justify-center">
          <button
            onClick={onStartNavigation} // 주행 시작 시 CameraContainer로 이동
            className="w-[102px] h-11 bg-[#00be9b] rounded-[10px] flex items-center justify-center text-white text-base font-semibold"
          >
            주행 시작
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteSummary;