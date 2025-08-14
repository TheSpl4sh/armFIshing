import React from 'react'
import { useState } from 'react'

const AllUsersPage = () => {
  const [text, setText] = useState(""); // состояние для текста

  const handleClick = () => {
    setText("48.116307, 36.384305");
  };

  return (
    <div className="p-6">
      {/* Кнопка */}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Показати координати
      </button>

      {/* Поле для текста */}
      <div className="mt-4 p-3 border rounded bg-gray-100 min-h-[40px]">
        {text}
      </div>
    </div>
  );
}

export default AllUsersPage