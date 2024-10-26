// src/components/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  iconSrc?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = '목적지를 입력해주세요.',
  value,
  onChange,
  onFocus,
  onBlur,
  iconSrc = 'https://via.placeholder.com/35x35',
}) => {
  return (
    <div className="relative w-full max-w-[1000px] h-[86px] z-20">
      {/* 배경 박스 */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 rounded-[40px] shadow"></div>
      
      {/* 아이콘 */}
      <div className="absolute left-[40px] top-[25px] flex items-center justify-center w-[35px] h-[35px]">
        <img
          src={iconSrc}
          alt="검색 아이콘"
          className="w-[35px] h-[35px]"
        />
      </div>

      {/* 입력 필드 */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={() => {
          console.log('Input focused');
          if (onFocus) onFocus();
        }}
        onBlur={() => {
          console.log('Input blurred');
          if (onBlur) onBlur();
        }}
        placeholder={placeholder}
        className="relative w-full h-full pl-[103px] pr-[40px] bg-transparent rounded-[40px] text-[#000000] placeholder-[#666] text-2xl font-semibold font-Pretendard leading-snug focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="목적지 검색"
      />
    </div>
  );
};

export default SearchBar;