import React from 'react';

export default function DarkMode({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between w-full max-w-4xl">
      <h1 className="text-4xl font-bold font-serif mb-2 pt-4">
        The creative crew
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer ml-2 mb-7"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1.5M12 19.5V21M4.5 12H3m18 0h-1.5
                M6.364 6.364l-1.06-1.06m13.435 13.435-1.06-1.06
                M6.364 17.636l-1.06 1.06m13.435-13.435-1.06 1.06"
            />
            <circle cx="12" cy="12" r="4.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 text-[#22315c]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75
                c-5.385 0-9.75-4.365-9.75-9.75
                0-1.33.266-2.597.748-3.752
                A9.753 9.753 0 0 0 3 11.25
                C3 16.635 7.365 21 12.75 21
                a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
