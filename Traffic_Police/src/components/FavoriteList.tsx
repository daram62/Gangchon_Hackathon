// src/components/FavoritesList.tsx

import React from 'react';

// 아이콘 이미지 파일 임포트
import homeIcon from '../assets/icnHome.png';
import workIcon from '../assets/icnCompany.png';
import nearbyStationIcon from '../assets/icBus.png';
import elysianIcon from '../assets/icPoint_red.png';
import cafeIcon from '../assets/icPoint_ye.png';
import icnPlus from '../assets/icnPlus2.png';
import icnClose from '../assets/icnClose.png';

interface FavoritesListProps {
  onSelectFavorite: (destination: string) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({ onSelectFavorite }) => {
  const favoritesGroup1 = [
    { name: '집', address: '서울시 종로구 성균관로 25-2', icon: homeIcon },
    { name: '회사', address: '서울시 종로구 성균관로 25-2', icon: workIcon },
  ];

  const favoritesGroup2 = [
    { name: '내 주변 정류장', address: '모든 대중교통 정보', icon: nearbyStationIcon },
    { name: '엘리시안 강촌', address: '강원 춘천시 남산면 북한강변길 688', icon: elysianIcon },
    { name: '카페 감자밭', address: '현 위치에서 20.8km / 카페', icon: cafeIcon },
  ];

  return (
    <div className="w-[375px] h-[550px] pb-6 bg-[#f7f7f6] rounded-[10px] shadow flex flex-col items-center gap-5">

      {/* 즐겨찾기 헤더 */}
      <div className="w-full p-4 flex justify-between items-center bg-[#f7f7f6] rounded-t-[10px]">
        <h2 className="text-black text-[28px] font-bold font-['Pretendard']">즐겨찾기</h2>
        <div className="w-[30px] h-[30px] bg-[#e7e7e7] rounded-full flex justify-center items-center">
          <img className="w- h-4 rotate-45" src={icnPlus} alt="삭제 아이콘" />
        </div>
      </div>

      {/* 첫 번째 그룹 */}
      <div className="w-[350px] bg-white rounded-[10px] border border-gray-200 flex flex-col px-4">        {favoritesGroup1.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectFavorite(item.name)}
            className={`w-[327px] py-4 px-4 flex items-center gap-3 ${
              index < favoritesGroup1.length - 1 ? 'border-b border-[#bdbdbd]' : ''
            } cursor-pointer`}
          >
            <div className="w-[30px] h-[30px] flex justify-center items-center mr-3">
              <img src={item.icon} alt={`${item.name} 아이콘`} className="w-[30px] h-[30px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-black text-[17px] font-semibold font-['Pretendard']">{item.name}</span>
              <span className="text-[#868782] text-[15px] font-normal font-['Pretendard']">{item.address}</span>
            </div>
          </div>
        ))}
      </div>
        
        
      {/* 두 번째 그룹 */}
      <div className="w-[350px] bg-white rounded-[10px] flex flex-col px-4 gap-2.5">
        {favoritesGroup2.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectFavorite(item.name)}
            className={`w-[327px] py-4 px-4 flex items-center gap-3 ${
              index < favoritesGroup2.length - 1 ? 'border-b border-[#bdbdbd]' : ''
            } cursor-pointer`}
          >
            <div className="w-[30px] h-[30px] flex justify-center items-center mr-3">
              <img src={item.icon} alt={`${item.name} 아이콘`} className="w-[30px] h-[30px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-black text-[17px] font-semibold font-['Pretendard']">{item.name}</span>
              <span className="text-[#868782] text-[15px] font-normal font-['Pretendard']">{item.address}</span>
            </div>
            <img className="w-4 h-4 ml-auto" src={icnClose} alt="더 보기 아이콘" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;