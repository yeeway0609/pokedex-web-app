import { useState } from 'react';

export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // 防止表單跳轉頁面
    props.onSubmit(searchInput); // 傳送表單輸入給父元件處理
  };

  return (
    <div className="w-full">
      <form className="flex h-12 items-center rounded-[30px] border-2 border-gray-300" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for Pókemon..."
          className="ml-4 w-full outline-none"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">
          <svg className="mr-5 h-5 w-5 text-blue-1 hover:text-[#666666]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.0005 15.9998L12.3755 12.3748" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  );
}
