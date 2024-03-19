import React, { useState, useEffect } from "react";

export default function App() {

  const [menuIndex, setMenuIndex] = useState(0);
  const [openTabs, setOpenTabs] = useState([]);
  
  useEffect(() => {
    window.api.db.getOpenTabs()
    .then((tabs) => {
      console.log(tabs);
      setOpenTabs(tabs);
    });
  }, []);

  // window.api.printTest(JSON.stringify(openTabs.url));
  return (
    <div className="p-4 bg-neutral-800">
      
      <div className="flex">
        <button onClick={() => {setMenuIndex(0)}}>
          <svg
            className="w-10 h-10"
            fill="#Ffffff"
            viewBox="0 0 24 24"
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M18 4h-10c-1.104 0-2 .896-2 2v2h-1c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h9c1.104 0 2-.896 2-2v-1h2c1.104 0 2-.896 2-2v-10c0-1.104-.896-2-2-2zm-13 15v-9h8.5c.275 0 .5.225.5.5v8.5h-9zm13-3h-3v-5.5c0-.827-.673-1.5-1.5-1.5h-5.5v-3h10v10z"></path>
            </g>
          </svg>
        </button>
        <button onClick={() => {setMenuIndex(1)}}>
          <svg
            className="w-10 h-10"
            fill="#Ffffff"
            viewBox="0 0 24 24"
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M13 5l.855 3.42 3.389-.971 1.501 2.6-2.535 2.449 2.535 2.451-1.5 2.6-3.39-.971-.855 3.422h-3l-.855-3.422-3.39.971-1.501-2.6 2.535-2.451-2.534-2.449 1.5-2.6 3.39.971.855-3.42h3m0-2h-3c-.918 0-1.718.625-1.939 1.516l-.354 1.412-1.4-.4c-.184-.053-.369-.078-.552-.078-.7 0-1.368.37-1.731 1l-1.5 2.6c-.459.796-.317 1.802.342 2.438l1.047 1.011-1.048 1.015c-.66.637-.802 1.643-.343 2.438l1.502 2.6c.363.631 1.031 1 1.731 1 .183 0 .368-.025.552-.076l1.399-.401.354 1.415c.222.885 1.022 1.51 1.94 1.51h3c.918 0 1.718-.625 1.939-1.516l.354-1.414 1.399.4c.184.053.369.077.552.077.7 0 1.368-.37 1.731-1l1.5-2.6c.459-.796.317-1.8-.342-2.438l-1.047-1.013 1.047-1.013c.66-.637.801-1.644.342-2.438l-1.5-2.6c-.365-.631-1.031-1-1.732-1-.184 0-.368.025-.551.076l-1.4.401-.354-1.413c-.22-.884-1.02-1.509-1.938-1.509zM11.5 10.5c1.104 0 2 .895 2 2 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.105.896-2 2-2m0-1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"></path>
            </g>
          </svg>
        </button>
      </div>
      
      {menuIndex === 0 ? (
        <ul className="dark:text-neutral-100">
          {openTabs.map((tab, index) => (
            <li><button className="border rounded-md bg-gray-800" onClick={()=>{window.api.setMainWindow(tab.dataValues.url)}}>{tab.dataValues.url}</button></li>
          ))}
        </ul>
      ) : ( <div>{menuIndex}</div> )}
      
 
      {menuIndex === 1 ? (
         <aside id="default-sidebar" className="" aria-label="Sidebar">
         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
           <ul className="space-y-2 font-medium">
             <li>
               <a
                 href="#"
                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
               >
                 <svg
                   className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 22 21"
                 >
                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                 </svg>
                 <span className="ms-3">Dashboard</span>
               </a>
             </li>
           </ul>
         </div>
       </aside>
      ) : ( <div>{menuIndex}</div> )}

    </div>
  );
}
