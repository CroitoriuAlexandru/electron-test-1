
import React from 'react';


export default function App() {

  return (
    <div className="flex flex-col items-center h-[calc(100vh-35px)] w-[50px] py-2 ">
      {/* Office Suite */}
      <button className="w-10 h-10 my-1 hover:bg-white rounded-md flex items-center justify-center "
        onClick={() => {
          let args = "https://www.google.com";
          ipcRenderer.invoke('my-invokable-ipc', args)
        }}
      >
        <svg className="w-8 h-8" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5036 1.55664C13.5232 1.54262 13.5428 1.5287 13.5626 1.51489C13.4214 1.57767 13.2821 1.64616 13.145 1.72036L5.14496 6.04849C3.20732 7.09679 2 9.12264 2 11.3257V20.6739C2 22.8771 3.20754 24.9031 5.14545 25.9513L7.08424 27H9L17.0011 22.5549L14.1058 20.9606C12.19 19.9056 11 17.8918 11 15.7048L11 12.8634C11.3135 12.2511 11.9524 11.0214 12 11C12.0476 10.9786 14.6865 10.3244 16 10V1.55664H13.5036Z" fill="url(#paint0_radial_2996_8828)"></path>
          <path d="M13.5036 1.55664C13.5232 1.54262 13.5428 1.5287 13.5626 1.51489C13.4214 1.57767 13.2821 1.64616 13.145 1.72036L5.14496 6.04849C3.20732 7.09679 2 9.12264 2 11.3257V20.6739C2 22.8771 3.20754 24.9031 5.14545 25.9513L7.08424 27H9L17.0011 22.5549L14.1058 20.9606C12.19 19.9056 11 17.8918 11 15.7048L11 12.8634C11.3135 12.2511 11.9524 11.0214 12 11C12.0476 10.9786 14.6865 10.3244 16 10V1.55664H13.5036Z" fill="url(#paint1_linear_2996_8828)"></path>
          <path d="M20.9999 11.7144V15.8079C20.9999 18.0111 19.7924 20.0371 17.8545 21.0853L9.8545 25.4125C8.24387 26.2837 6.33414 26.3671 4.66626 25.6626C4.82047 25.7657 4.98028 25.8621 5.14539 25.9514L13.1454 30.2785C14.9265 31.2419 17.0734 31.2419 18.8545 30.2785L26.8545 25.9514C28.7924 24.9032 29.9999 22.8772 29.9999 20.6739V18.1429L23.9999 13.0001L20.9999 11.7144Z" fill="url(#paint2_radial_2996_8828)"></path>
          <path d="M20.9999 11.7144V15.8079C20.9999 18.0111 19.7924 20.0371 17.8545 21.0853L9.8545 25.4125C8.24387 26.2837 6.33414 26.3671 4.66626 25.6626C4.82047 25.7657 4.98028 25.8621 5.14539 25.9514L13.1454 30.2785C14.9265 31.2419 17.0734 31.2419 18.8545 30.2785L26.8545 25.9514C28.7924 24.9032 29.9999 22.8772 29.9999 20.6739V18.1429L23.9999 13.0001L20.9999 11.7144Z" fill="url(#paint3_linear_2996_8828)"></path>
          <path d="M26.855 6.0485L18.855 1.72037C17.2108 0.830824 15.2548 0.762335 13.5626 1.5149C11.9677 2.62928 11 4.4606 11 6.43276V12.7023L13.294 11.5431C14.9956 10.6833 17.0044 10.6833 18.706 11.5431L26.706 15.5855C28.6864 16.5862 29.9496 18.5961 29.9985 20.8072C29.9995 20.7629 30 20.7184 30 20.6739V11.3257C30 9.12265 28.7927 7.09679 26.855 6.0485Z" fill="url(#paint4_radial_2996_8828)"></path>
          <path d="M26.855 6.0485L18.855 1.72037C17.2108 0.830824 15.2548 0.762335 13.5626 1.5149C11.9677 2.62928 11 4.4606 11 6.43276V12.7023L13.294 11.5431C14.9956 10.6833 17.0044 10.6833 18.706 11.5431L26.706 15.5855C28.6864 16.5862 29.9496 18.5961 29.9985 20.8072C29.9995 20.7629 30 20.7184 30 20.6739V11.3257C30 9.12265 28.7927 7.09679 26.855 6.0485Z" fill="url(#paint5_linear_2996_8828)"></path>
          <defs>
            <radialGradient id="paint0_radial_2996_8828" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.316 7.42295) rotate(112.787) scale(29.3949 36.8157)">
              <stop offset="0.0598494" stopColor="#AE7FE2"></stop>
              <stop offset="1" stopColor="#0078D4"></stop>
            </radialGradient>
            <linearGradient id="paint1_linear_2996_8828" x1="13.2917" y1="24.5789" x2="11.0955" y2="19.3382" gradientUnits="userSpaceOnUse">
              <stop stopColor="#114A8B"></stop>
              <stop offset="1" stopColor="#0078D4" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient id="paint2_radial_2996_8828" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.57931 25.0399) rotate(-18.7226) scale(20.2985 15.5984)">
              <stop offset="0.110651" stopColor="#D59DFF"></stop>
              <stop offset="1" stopColor="#5E438F"></stop>
            </radialGradient>
            <linearGradient id="paint3_linear_2996_8828" x1="27.4264" y1="16.2694" x2="23.7685" y2="21.4561" gradientUnits="userSpaceOnUse">
              <stop stopColor="#493474"></stop>
              <stop offset="1" stopColor="#8C66BA" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient id="paint4_radial_2996_8828" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5885 16.39) rotate(-160.555) scale(24.4188 24.2273)">
              <stop offset="0.0960063" stopColor="#50E6FF"></stop>
              <stop offset="1" stopColor="#436DCD"></stop>
            </radialGradient>
            <linearGradient id="paint5_linear_2996_8828" x1="11" y1="1.71803" x2="15.9242" y2="1.71803" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2D3F80"></stop>
              <stop offset="1" stopColor="#436DCD" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </button>
      {/* Gmail */}
      <button className="w-10 h-10 my-1 hover:bg-white rounded-md flex items-center justify-center "
        onClick={() => {
          let args = "https://www.google.com";
          ipcRenderer.invoke('my-invokable-ipc', args)
        }}
      >
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
          <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
          <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
          <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
          <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
          <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
        </svg>
      </button>
      {/* Facebook */}
      <button className="w-10 h-10 my-1 hover:bg-white rounded-md flex items-center justify-center "
        onClick={() => {
          let args = "https://www.google.com";
          ipcRenderer.invoke('my-invokable-ipc', args)
        }}
      >
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
        </svg>
      </button>
      {/* Youtube */}
      <button className="w-10 h-10 my-1 hover:bg-white rounded-md flex items-center justify-center "
        onClick={() => {
          let args = "https://www.google.com";
          ipcRenderer.invoke('my-invokable-ipc', args)
        }}
      >
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>
      </button>
      {/* Whatsup */}
      <button className="w-10 h-10 my-1 hover:bg-white rounded-md flex items-center justify-center "
        onClick={() => {
          let args = "https://www.google.com";
          ipcRenderer.invoke('my-invokable-ipc', args)
        }}
      >
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  )
}

