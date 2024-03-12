import React from "react";
const electron = window.api;
export default function App() {
  return (
    <div class=" w-full">
      <div class="flex items-center justify-center w-full h-[35px] rounded-lg focus-within:shadow-lg overflow-hidden">
        <div className="flex items-center justify-center m-2">
        <button
            className="mr-2 p-1.5 flex items-center justify-center dark:border-gray-900 dark:bg-gray-800 bg-gray-200 border rounded-md"
            onClick={() => {
              electron.topWindow.setTopView("cuiWindow");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f3f4f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
          <button className="mr-2 p-1.5 flex items-center justify-center dark:border-gray-900 dark:bg-gray-800 bg-gray-200 border rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f3f4f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="20" y1="12" x2="4" y2="12" />
              <polyline points="10 18 4 12 10 6" />
            </svg>
          </button>
          <button className="mr-2 p-1.5 flex items-center justify-center dark:border-gray-900 dark:bg-gray-800 bg-gray-200 border rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f3f4f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </button>
          <button className="p-1.5 flex items-center justify-center dark:border-gray-900 dark:bg-gray-800 bg-gray-200 border rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f3f4f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-refresh-ccw"
            >
              <polyline points="1 4 1 10 7 10"></polyline>
              <polyline points="23 20 23 14 17 14"></polyline>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
            </svg>
          </button>
        </div>
        <div class="relative w-full mx-4">
          <input
            class="outline-none text-sm text-gray-700 pr-2 m-1 w-full rounded-full p-1 pl-8"
            type="text"
            id="search"
            placeholder="url"
          />
          <button class="absolute left-4 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
