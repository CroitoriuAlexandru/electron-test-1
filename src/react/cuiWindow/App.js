import React, { useState, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function App() {
  const [cui, setCui] = useState("19");
  const [data, setData] = useState({ nume_companie: "Loading..." });
  const [cifraAfaceri, setCifraAfaceri] = useState({ cifraAfaceri: "Loading..." });
  const [profit, setProfit] = useState({ profit: "Loading..." });
  const [angajati, setAngajati] = useState({ angajati: "Loading..." });
  const [caen, setCaen] = useState({ caen: "Loading..." });
  const [desCaen, setDesCaen] = useState({ desCaen: "Loading..." });
  const [stocuri, setStocuri] = useState({ stocuri: "Loading..." });
  const [casa, setCasa] = useState({ casa: "Loading..." });
  const [capitalTotal, setCapitalTotal] = useState({ capitalTotal: "Loading..." });
  const [adresa, setAdresa] = useState({ adresa: "Loading..." });
  const [nrRegCom, setNrRegCom] = useState({ nrRegCom: "Loading..." });

  const fetchData = async () => {
    let endpoint = "https://api.aipro.ro/get?cui=" + cui;
    await fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCifraAfaceri(data.an2022?.i[7]?.val_indicator);
        setCifraAfaceri(data.an2022?.i[2]?.val_indicator);
        setAngajati(data.an2022?.i[0]?.val_indicator);
        setCaen(data.an2022?.caen);
        setDesCaen(data.an2022?.den_caen);
        setStocuri(data.an2022?.i[17]?.val_indicator);
        setCasa(data.an2022?.i[15]?.val_indicator);
        setCapitalTotal(data.an2022?.i[10]?.val_indicator);
        setAdresa(data.date_generale?.adresa);
        setNrRegCom(data.date_generale?.nrRegCom);
      });
  };

  const addressAnaf = encodeURIComponent(data.date_generale?.adresa || "");
  const mapUrl = `https://maps.google.com/maps?width=100%25&height=400&hl=en&q=${addressAnaf}&t=k&z=17&ie=UTF8&iwloc=B&output=embed`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="relative p-4 ">
      <form class="mb-6" onSubmit={handleSubmit}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <input
            type="search"
            id="default-search"
            value={cui}
            onChange={(e) => setCui(e.target.value)}
            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by CUI"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <h1 class="text-3xl font-bold text-[#00CCFF] mb-4">
        {data.nume_companie}
      </h1>
      <hr class="liniuta mb-4"></hr>
      <h2 class="text-2xl font-bold text-[#00CCFF] mb-4">
        Situatii financiare
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 mb-4">
        <div class="flex flex-col justify-center items-center">
          <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Nume companie:
            </h5>
            <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
              {data.nume_companie}
            </h3>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center">
          <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Profit net:
            </h5>
            <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
              {data.an2022?.i[2]?.val_indicator}
            </h3>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cod CAEN:
            </h5>
            <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
              {data.an2022?.caen} -{" "}
              <span class="text-sm">{data.an2022?.den_caen}</span>
            </h3>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Casa si conturi in banci:
            </h5>
            <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
              {data.an2022?.i[15]?.val_indicator}
            </h3>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cifra de afaceri:
          </h5>
          <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
            {data.an2022?.i[7]?.val_indicator}
          </h3>
        </div>
        <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Angajati:
          </h5>
          <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
            {data.an2022?.i[0]?.val_indicator}
          </h3>
        </div>
        <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Stocuri:
          </h5>
          <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
            {data.an2022?.i[17]?.val_indicator}
          </h3>
        </div>
        <div class="casute-date-firma block max-w-sm mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-full overflow-auto">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Capital total:
          </h5>
          <h3 class="font-extrabold text-xl text-gray-700 dark:text-gray-400">
            {data.an2022?.i[10]?.val_indicator}
          </h3>
        </div>
      </div>
      <div class="casute-date-generale mb-4 mt-8 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 class="text-2xl font-bold text-[#00CCFF] mb-4">Adresa fiscala:</h2>
        <div style={{ width: "100%", height: "350px" }}>
          <iframe
            title="Anaf Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={mapUrl}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div class="casute-date-generale h-96 mb-4 mt-8 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 class="text-2xl font-bold text-[#00CCFF] mb-4">Date generale:</h2>
        <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CUI: <span class="font-extrabold text-xl text-gray-700 dark:text-gray-400">{cui}</span></p>
        <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Nr. Reg. Com. <span class="font-extrabold text-xl text-gray-700 dark:text-gray-400">{data.date_generale?.nrRegCom}</span></p>
        <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> Adresa: <span class="font-extrabold text-xl text-gray-700 dark:text-gray-400">{data.date_generale?.adresa}</span></p>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
