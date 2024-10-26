// src/components/DestinationSearch.tsx

import React, { useState } from 'react';
import SearchBar from './Searchbar';
import FavoritesList from './FavoriteList';
import bg from '../assets/Map_bg.png'; 
import icnSearch from '../assets/icnSearch.png'; 
import icnMap from '../assets/icnMap.png'; 
import icnCompas from '../assets/icnCompas.png';

interface DestinationSearchProps {
  onSelectDestination: (destination: string) => void;
}

const DestinationSearch: React.FC<DestinationSearchProps> = ({ onSelectDestination }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const mockResults = ['엘리시안 강촌', '성균관대', '강남역', '인천공항'];
    const filteredResults = mockResults.filter((place) =>
      place.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleSelect = (destination: string) => {
    onSelectDestination(destination);
    setSearchQuery('');
    setResults([]);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative w-[1280px] h-[832px]">
      {/* 배경 지도 이미지 */}
      <img
        src={bg}
        alt="지도 배경"
        className="absolute inset-0 w-full h-full object-cover z-[-1] rounded-xl shadow"
      />

      {/* 오버레이 레이어 */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start p-8 bg-transparent">
        {/* 검색 바와 버튼 그룹 */}
        <div className="flex items-start w-full max-w-[1000px] mt-4">
          {/* 검색 바 */}
          <div className="flex-grow">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="목적지를 입력해주세요."
              iconSrc={icnSearch} 
            />
          </div>

          {/* 수직 버튼 그룹 */}
          <div className="flex flex-col items-center ml-4 space-y-4">
            <button className="relative w-20 h-20 flex items-center justify-center active:scale-95">
              <div className="absolute inset-0 bg-[#FFFFFF]/90 rounded-[10px] shadow z-0"></div>
              <img
                src={icnMap} 
                alt="지도 아이콘"
                className="w-[30px] h-[30px] z-10"
              />
            </button>

            <button className="relative w-20 h-20 flex items-center justify-center active:scale-95">
              <div className="absolute inset-0 bg-[#FFFFFF]/90 rounded-[10px] shadow z-0"></div>
              <img
                src={icnCompas}
                alt="나침반 아이콘"
                className="w-[30px] h-[30px] z-10"
              />
            </button>
          </div>
        </div>

{/* 검색 결과 */}
{(searchQuery !== '' || isFocused) && (
  <>
    {/* 배경 레이어 */}
    <div 
      className="fixed inset-0 bg-black/20 z-10" 
      onClick={() => setIsFocused(false)} 
    ></div>

    {/* 검색 결과 창 */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] max-w-[100%] bg-white rounded-[20px] shadow-xl z-40 p-4">
            {results.length > 0 ? (
              <ul className="p-4 space-y-2">
                {results.map((result, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(result)}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition text-lg font-semibold p-2"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              isFocused && (
                <div className="text-center text-gray-500 p-4">검색 결과가 없습니다.</div>
              )
            )}
          </div>
        </>
      )}

        {/* 즐겨찾기 컴포넌트 고정 위치 설정 */}
        <div className="absolute bottom-4 left-4 z-5">
          <FavoritesList onSelectFavorite={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default DestinationSearch;