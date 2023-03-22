import { useState } from 'react';
import search from '@/img/icons/search.svg';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // 防止表單預設行為
    props.onSubmit(searchTerm); // 傳送表單輸入給父元件處理
  };

  return (
    <div className="w-full">
      <form
        className="flex h-12 items-center rounded-[30px] border-2 border-gray-300 "
        onSubmit={handleSubmit}
      >
        <img src={search} className="ml-4 h-5 w-5" />
        <input
          className="ml-2"
          type="text"
          placeholder="Search for Pókemon..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {/* <button
          className="bg-gray-300 rounded-l"
          type="submit"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
}
