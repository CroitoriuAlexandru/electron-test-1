
import React from 'react';

export default function App() {

  return (
    <div class=' w-full'>
      <div class="flex items-center justify-center w-full h-[35px] rounded-lg focus-within:shadow-lg overflow-hidden">
        <div class="relative w-full mx-4">
          <input
            class="outline-none text-sm text-gray-700 pr-2 m-1 w-full rounded-full p-1 pl-8"
            type="text"
            id="search"
            placeholder="url" />
          <button class="absolute left-4 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}


