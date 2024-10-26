import React from 'react';

interface RouteSummaryProps {
  origin: string;
  destination: string;
  onStartNavigation: () => void;
}

const RouteSummary: React.FC<RouteSummaryProps> = ({
  origin,
  destination,
  onStartNavigation,
}) => {
  // 예시 데이터를 사용합니다.
  const estimatedTime = '30분';
  const distance = '15km';

  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-4 bg-white">
      {/* 제목 */}
      <h1 className="text-2xl font-bold mb-4">경로 요약</h1>

      {/* 출발지와 목적지 */}
      <div className="w-full max-w-md mb-4">
        <div className="flex items-center mb-2">
          <span className="text-gray-500">출발지:</span>
          <span className="ml-2">{origin}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500">목적지:</span>
          <span className="ml-2">{destination}</span>
        </div>
      </div>

      {/* 예상 소요 시간 및 거리 */}
      <div className="w-full max-w-md mb-4">
        <div className="flex items-center mb-2">
          <span className="text-gray-500">예상 소요 시간:</span>
          <span className="ml-2">{estimatedTime}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500">거리:</span>
          <span className="ml-2">{distance}</span>
        </div>
      </div>

      {/* 경로 요약 이미지 또는 지도 */}
      <div className="w-full max-w-md h-64 bg-gray-200 mb-4 flex items-center justify-center">
        {/* 실제 지도 또는 경로 이미지를 넣을 수 있습니다. */}
        <span className="text-gray-500">경로 요약 이미지 또는 지도</span>
      </div>

      {/* 출발하기 버튼 */}
      <button
        onClick={onStartNavigation}
        className="w-full max-w-md p-2 bg-blue-500 text-white rounded"
      >
        출발하기
      </button>
    </div>
  );
};

export default RouteSummary;