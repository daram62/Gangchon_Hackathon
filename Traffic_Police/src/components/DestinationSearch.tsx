import React, { useState } from 'react';

interface DestinationSearchProps {
  onSelectDestination: (destination: string) => void;
}

const DestinationSearch: React.FC<DestinationSearchProps> = ({ onSelectDestination }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  // 즐겨찾기 목록을 상수로 선언합니다.
  const favorites: string[] = ['집', '회사', '즐겨찾는 장소 1', '즐겨찾는 장소 2'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // 실제 API 호출을 통해 검색 결과를 가져올 수 있습니다.
    // 여기서는 예시로 간단히 필터링된 결과를 사용합니다.
    const mockResults = ['서울역', '강남역', '잠실역', '인천공항'];
    const filteredResults = mockResults.filter((place) =>
      place.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleSelect = (destination: string) => {
    onSelectDestination(destination);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-4 bg-white">
      {/* 제목 */}
      <h1 className="text-2xl font-bold mb-4">목적지 검색</h1>

      {/* 검색 입력 */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="목적지를 입력하세요"
        className="w-full max-w-md p-2 border border-gray-300 rounded mb-4"
      />

      {/* 검색 결과 */}
      {searchQuery !== '' && (
        <div className="w-full max-w-md">
          {results.length > 0 ? (
            <ul className="bg-white border border-gray-200 rounded shadow-md mb-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(result)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500 mb-4">검색 결과가 없습니다.</div>
          )}
        </div>
      )}

      {/* 즐겨찾기 */}
      <h2 className="text-xl font-semibold mt-4 mb-2">즐겨찾기</h2>
      <ul className="w-full max-w-md">
        {favorites.map((favorite, index) => (
          <li
            key={index}
            onClick={() => handleSelect(favorite)}
            className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
          >
            {favorite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationSearch;