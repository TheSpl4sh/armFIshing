import React from 'react'

function FirstPage() {
  const handleClick = () => {
    const isConfirmed = window.confirm("Перезавантажити сторінку?");
    if (isConfirmed) {
      window.location.reload();
    }
  };


  return (
    <>
        <div className="flex flex-col items-center justify-center gap-2 min-h-screen bg-[#121212] text-white">
            <h2 className="text-lg font-semibold mb-4">Сторінка недоступна</h2>
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Повторити ще раз
            </button>
        </div>
    </>
  )
}

export default FirstPage