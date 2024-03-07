"use client";

import { useEffect, useState } from "react";
import Producer from "./Producer";

function RegionMap({ regions }: any) {
  const [currentLang, setCurrentLang] = useState<string>("fr");
  const [openProducer, setOpenProducer] = useState<any>(null);

  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };
  const openOrClose = (producer: any) => {
    setOpenProducer(openProducer === producer ? null : producer);
  };

  useEffect(() => {}, [currentLang]);

  return (
    <div>
      <button onClick={toggleLanguage}>
        {currentLang === "fr" ? "Version française" : "English Version"}
      </button>

      {regions[currentLang] && (
        <div>
          <h1>{regions[currentLang][0].title}</h1>

          {regions[currentLang][0].producersRefCollection.items.map(
            (element: any, index: any) => (
              <div key={index}>
                <button className="flex" onClick={() => openOrClose(element)}>
                  {element.producer}
                </button>

                {openProducer === element && (
                  <Producer
                    producer={element}
                    region={regions[currentLang][0]}
                  />
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default RegionMap;
