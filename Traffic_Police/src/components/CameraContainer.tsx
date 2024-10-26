import React, { useState, useEffect } from 'react';

import video1 from '../assets/real_video.mp4';
import video2 from '../assets/real_video_2.mp4';

import map from '../assets/map_image.png'

import weather from '../assets/weather.png';

import song2 from '../assets/song2.png';
import song3 from '../assets/song3.png';
import song4 from '../assets/song4.png';
import share from '../assets/share.png';

import home from '../assets/Home.png';
import call from '../assets/Call.png';
import setting from '../assets/Setting.png';

import route from '../assets/Route.png';
import front from '../assets/front.png';
import left from '../assets/left.png';

import stop from '../assets/stop.png';
import right_dir from '../assets/right_dir.png';
import st_dir from '../assets/st_dir.png';


interface CameraContainerProps {
  destination: string;
  onExitNavigation: () => void;
}

const CameraContainer: React.FC<CameraContainerProps> = ({ destination, onExitNavigation }) => {
  const [overlayIndex, setOverlayIndex] = useState<number>(0);
  const [isVideoOne, setIsVideoOne] = useState<boolean>(true); // 비디오 소스를 교체할 상태 추가

  const handleImageClick = (): void => {
    setOverlayIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  const handleOverlayClick = (): void => {
    setOverlayIndex((prevIndex) => (prevIndex + 1) % 6);
  };


  // 음성 재생 함수
  const speakText = (text: string) => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR'; // 한국어 설정
        window.speechSynthesis.cancel(); // 이전 음성 중단
        window.speechSynthesis.speak(utterance);
      } else {
        alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
      }
  };

  // overlayIndex 상태가 변경될 때 음성 안내 실행
  useEffect(() => {
    switch (overlayIndex) {
      case 1:
        speakText('전방 직진 신호입니다! 그대로 직진해주세요.');
        break;
      case 3:
        speakText('좌우측방 동시 정지 신호입니다! 경찰관의 지시에 따라 조심히 정지해주세요.');
        break;
      case 5:
        speakText('우회전 신호입니다! 경찰관의 지시에 따라 좌측에서 우측으로 이동해주세요.');
        break;
      default:
        break;
    }
  }, [overlayIndex]);

  // 디버깅을 위해 props 값 확인
  useEffect(() => {
    console.log('CameraContainer Props:', { destination, onExitNavigation });
  }, [destination, onExitNavigation]);

  const toggleVideo = () => {
    setIsVideoOne((prev) => !prev); // 클릭할 때마다 상태 전환
  };

  return (
    <div className="w-[1280px] h-[832px] pb-[18px] bg-[#818081] rounded-xl flex flex-col items-center">
      {/* 배경 비디오 - 클릭 시 비디오 소스 전환 */}
      <video
        className="w-[1280px] h-[450px] rounded-2xl object-cover mb-3"
        src={isVideoOne ? video1 : video2} // 상태에 따라 비디오 소스 선택
        autoPlay
        loop
        muted
        onClick={toggleVideo} // 클릭 시 비디오 전환
      />

    <div className="w-[1217px] h-[364px] relative rounded-xl flex flex-col items-start">
        {/* 지도 이미지와 오버레이를 감싸는 컨테이너 */}
        <div className="relative w-[1217px] h-[361px]">
          {/* 지도 이미지 */}
          <img
            className="w-full h-full rounded-xl shadow cursor-pointer"
            src={map}
            alt="지도 이미지"
            onClick={handleImageClick}
          />

   {/* 오버레이 레이어 */}
   {[1, 3, 5].includes(overlayIndex) && (
            <div
              className={`absolute inset-0 flex items-center justify-center z-50 rounded-[12px] cursor-pointer ${
                overlayIndex === 1
                  ? 'bg-[#96B4F4]/70 animate-blink'
                  : overlayIndex === 3
                  ? 'bg-[#cc544c]/70 animate-blink'
                  : 'bg-[#F7CB7F]/70 animate-blink'
              }`}
              onClick={handleOverlayClick}
            >
              <div className="w-[505px] h-[204px] relative">
                <div className="w-full h-full absolute bg-[#fff5f3] rounded-[11px]"></div>

                {/* 아이콘과 텍스트 컨테이너 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {overlayIndex === 1 && (
                    <img src={st_dir} alt="직진 아이콘" className="w-[100px] h-[100px] mb-4" />
                  )}
                  {overlayIndex === 3 && (
                    <img src={stop} alt="정지 아이콘" className="w-[100px] h-[100px] mb-4" />
                  )}
                  {overlayIndex === 5 && (
                    <img src={right_dir} alt="우회전 아이콘" className="w-[100px] h-[100px] mb-4" />
                  )}

                  <div className="text-center">
                    {overlayIndex === 1 && (
                      <>
                        <p className="text-black text-[28px] font-medium font-['Noto Sans KR'] leading-tight">
                          전방 직진 신호입니다!
                        </p>
                        <p className="text-[#2377c9] text-[28px] font-black font-['Noto Sans KR'] leading-tight mt-2">
                          그대로 직진해주세요.
                        </p>
                      </>
                    )}
                    {overlayIndex === 3 && (
                      <>
                        <p className="text-black text-[28px] font-medium font-['Noto Sans KR'] leading-tight">
                          좌우측방 동시정지 신호입니다!
                        </p>
                        <p className="text-[#c92d23] text-[28px] font-black font-['Noto Sans KR'] leading-tight mt-2">
                          정지해주세요.
                        </p>
                      </>
                    )}
                    {overlayIndex === 5 && (
                      <>
                        <p className="text-black text-[28px] font-medium font-['Noto Sans KR'] leading-tight">
                          우회전 신호입니다!
                        </p>
                        <p className="text-[#D78A17] text-[28px] font-black font-['Noto Sans KR'] leading-tight mt-2">
                          경찰관의 지시에 따라 이동해주세요.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 목적지 마커 */}
        <div className="absolute top-[20px] left-[400px] shadow-lg z-10 active:scale-95 w-[154px] h-14 pl-[15px] pr-5 py-[15px] bg-white rounded-[20px] shadow flex items-center gap-[15px]">
          <div className="w-7 h-7 relative">
            <div className="absolute w-7 h-7 bg-[#00be9b] opacity-10 rounded-full"></div>
            <div className="absolute w-3 h-3 bg-[#00be9b] rounded-full left-[8px] top-[8px]"></div>
          </div>
          <div className="flex flex-col">
            <div className="opacity-50 text-black text-xs font-medium font-['Pretendard']">
              목적지
            </div>
            <div className="text-black text-xs font-semibold font-['Pretendard']">
              {destination}
            </div>
          </div>
        </div>

        {/* 출발지 마커 */}
        <div className="absolute top-[20px] left-[400px] shadow-lg z-10 active:scale-95 w-[154px] h-14 pl-[15px] pr-5 py-[15px] bg-white rounded-[20px] shadow flex items-center gap-[15px]">
          <div className="w-7 h-7 relative">
            <div className="absolute w-7 h-7 bg-[#00be9b] opacity-10 rounded-full"></div>
            <div className="absolute w-3 h-3 bg-[#00be9b] rounded-full left-[8px] top-[8px]"></div>
          </div>
          <div className="flex flex-col">
            <div className="opacity-50 text-black text-xs font-medium font-['Pretendard']">
              출발지
            </div>
            <div className="text-black text-xs font-semibold font-['Pretendard']">
              엘리시안 강촌
            </div>
          </div>
        </div>

        {/* 날씨 정보 */}
        <div className="absolute top-[20px] right-[20px] shadow-lg active:scale-95 bg-[#96B4F4]/70 rounded-[15px] z-10 w-[302px] h-[100px]">
          <div className="absolute left-[20px] top-[64px] text-[#87888c] text-xs font-medium font-['Poppins']">
            Partly Cloudy
          </div>
          <div className="absolute w-[109px] h-[66.02px] left-[20px] top-[10px]">
            <div className="absolute text-white text-[45px] font-semibold font-['Poppins']">
              23&nbsp;°C
            </div>
            <div className="absolute w-3 h-3 left-[54px] top-[14.56px] bg-[#00be9b] rounded-full"></div>
          </div>
          {/* 날씨 아이콘 이미지 */}
          <div className="absolute w-[152px] h-[120px] left-[150px] top-[px]">
            <img
              src={weather}
              alt="날씨 아이콘"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 이동 시간 및 거리 */}
        <div className="absolute top-[20px] left-[20px] bg-[#000000]/15 shadow-lg active:scale-95 rounded-[15px] z-10 w-[210px] h-32">
          <div className="absolute w-[171px] h-[33px] left-[19px] top-[11px]">
            <div className="absolute text-[#4b4b4b] text-[22px] font-semibold font-['Poppins']">
              25 min
            </div>
            <div className="absolute left-[86px] top-0 text-[#4b4b4b] text-[22px] font-medium font-['Poppins']">
              (15 km)
            </div>
          </div>
          <div className="absolute w-[154px] h-[53.46px] left-[28px] top-[54px]">
            <img
              src={route}
              alt="경로 아이콘"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 음악 플레이어 */}
        <div className="absolute top-[140px] right-[20px] shadow-lg active:scale-95 z-10 w-[302px] h-[118px]">
          <div className="absolute w-full h-full bg-[#f3678d]/70 rounded-[15px]"></div>
          <div className="absolute left-[20px] top-[6.94px]">
            <div className="text-[#222124] text-lg font-medium font-['Poppins']">
              APT.
            </div>
            <div className="mt-1 text-[#1e1e1e] text-sm font-normal font-['Poppins']">
              ROSÉ &amp; Bruno
            </div>
          </div>
          <div className="absolute left-[30px] bottom-[10px] flex items-center w-[242px]">
            <div className="text-[#87888c] text-[11px] font-normal font-['Poppins']">
              0:00
            </div>
            <div className="flex-1 mx-2 h-[2px] bg-[#87888c]"></div>
            <div className="text-[#87888c] text-xs font-normal font-['Poppins']">
              2:50
            </div>
          </div>
          {/* 음악 컨트롤 아이콘 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[55px] flex items-center gap-[28.80px]">
            {/* 이전 곡 버튼 */}
            <button className="w-[21.60px] h-[21.60px] flex items-center justify-center">
              <img src={song2} alt="이전 곡" />
            </button>
            {/* 재생/일시정지 버튼 */}
            <button className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#87888c]/20"></div>
              <img
                src={song3}
                alt="재생"
                className="relative"
              />
            </button>
            {/* 다음 곡 버튼 */}
            <button className="w-[21.60px] h-[21.60px] flex items-center justify-center">
              <img src={song4} alt="다음 곡" />
            </button>
          </div>
          {/* 옵션 아이콘 */}
          <div className="absolute right-[10px] top-[11.28px]">
            <img src={share} alt="옵션" />
          </div>
        </div>

        {/* 거리 및 고도 정보 */}
        <div className="absolute top-[180px] left-[20px] z-10 bg-[#ECFFF9]/70 shadow-lg active:scale-95 rounded-[15px] w-[210px] h-[117.38px]">
          {/* 고도 */}
          <div className="absolute left-[21px] top-[13px] flex items-center">
            <img
              className="w-[19.18px] h-[38px]"
              src={front} // 고도 아이콘 경로
              alt="고도 아이콘"
            />
            <div className="ml-2 text-[#4b4b4b] text-[32px] font-semibold font-['Poppins']">
              24
            </div>
            <div className="ml-1 text-[#4b4b4b] text-2xl font-semibold font-['Poppins']">
              m
            </div>
          </div>
          
          {/* 구분선 */}
          <div className="absolute left-[0px] right-[0px] top-[60px] h-px bg-[#4b4b4b] opacity-50"></div>

          {/* 거리 */}
          <div className="absolute left-[21px] top-[75px] flex items-center">
            <img
              className="w-[15.45px] h-[19.86px]"
              src={left} // 거리 아이콘 경로
              alt="거리 아이콘"
            />
            <div className="ml-2 text-[#4b4b4b] text-xl font-semibold font-['Poppins']">
              2km
            </div>
          </div>
        </div>

        {/* 네비게이션 버튼 */}
        <div className="absolute bottom-[15px] right-[20px] z-10 w-[298px] h-20 flex justify-between items-center">
          {/* 버튼 1 */}
          <button className="relative w-20 h-20 flex items-center active:scale-95 justify-center">
            <div className="absolute inset-0 bg-[#57b99c]/90 rounded-full shadow z-0"></div>
            <img
              src={home} 
              alt="버튼 1"
              className="w-[30px] h-[30px] z-10"
            />
          </button>
          {/* 버튼 2 */}
          <button className="relative w-20 h-20 flex items-center active:scale-95 justify-center">
            <div className="absolute inset-0 bg-[#70dcbc]/90 rounded-full z-0"></div>
            <img
              src={call} 
              alt="버튼 2"
              className="w-[30px] h-[30px] z-10"
            />
          </button>
          {/* 버튼 3 */}
          <button className="relative w-20 h-20 flex items-center  active:scale-95 justify-center">
            <div className="absolute inset-0 bg-[#ebfff8]/90 rounded-full z-0"></div>
            <img
              src={setting}
              alt="버튼 3"
              className="w-[30px] h-[30px] z-10"
            />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CameraContainer;