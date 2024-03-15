"use client";
import { useEffect, useState } from "react";
import Producer from "./Producer";
import Image from "next/image";
import arrow_left from "../../public/arrow_left.png";

export default function RegionMap({ regions }: any) {
  const [currentLang, setCurrentLang] = useState<string>("fr");
  const [openProducer, setOpenProducer] = useState<string | null>(null);
  const [getClassName, setGetClassName] = useState<any>(null);
  const [toggle, setToggle] = useState<any>(false);
  const [currentProducerIndex, setCurrentProducerIndex] = useState<number>(-1);

  // Fonction pour basculer entre le français et l'anglais
  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  // Fonction pour ouvrir ou fermer le composant Producer
  const openOrClose = (producerUid: string | null, index: number) => {
    if (openProducer === producerUid) {
      setOpenProducer(null);
    } else {
      setOpenProducer(producerUid);
      setCurrentProducerIndex(index); // Mettre à jour l'index du producteur actuel
    }
    setToggle(!toggle);
  };

  // Fonction pour passer au fournisseur suivant
  const nextProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const newIndex =
        nextIndex < currentRegion.producers.length ? nextIndex : 0;
      setOpenProducer(currentRegion.producers[newIndex]);
      return newIndex;
    });
  };

  // Fonction pour passer au fournisseur précédent
  const previousProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      const newIndex =
        nextIndex >= 0 ? nextIndex : currentRegion.producers.length - 1;
      setOpenProducer(currentRegion.producers[newIndex]);
      return newIndex;
    });
  };

  const returnToMap = () => {
    setOpenProducer(null);
  };

  const currentRegion = regions.regions.find(
    (region: any) => region.lang === currentLang
  );

  useEffect(() => {}, [currentLang]);

  useEffect(() => {
    setCurrentProducerIndex(-1);
  }, [currentRegion]);

  return (
    <div className={toggle ? "basic" : "container"}>
      <div className={toggle ? "producer_region" : undefined}> </div>

      <button className="language-toggle" onClick={toggleLanguage}>
        {currentLang === "fr"
          ? regions.regions[0].englishVersionButton
          : regions.regions[1].frenchVersionButton}
      </button>

      {currentRegion && (
        <div>
          <ul>
            <li key={currentProducerIndex}>
              {openProducer ? (
                <div>
                  <div className="back_map">
                    <div className="arrow_left_wrapper">
                      <img src={arrow_left.src} alt="arrow left" />
                    </div>
                    <button
                      className="back_map_button"
                      onClick={() => openOrClose(null, 0)}
                    >
                      {" "}
                      {currentRegion.returnToMapButton}
                    </button>
                  </div>

                  <Producer
                    producer={currentRegion.producers[currentProducerIndex]}
                    region={currentRegion}
                    onNextSupplier={nextProducer}
                    onPreviousSupplier={previousProducer}
                    onCloseOrOpen={openOrClose}
                    langage={currentLang}
                  />
                </div>
              ) : (
                <div>
                  <h1 className="title">{currentRegion.title}</h1>
                  <p className="subtitle">{currentRegion.subtitle}</p>
                  {currentRegion.producers.map(
                    (producer: any, index: number) => (
                      <button
                        key={index}
                        className="producer-button"
                        style={{
                          top: producer.coordinates.y,
                          left: producer.coordinates.x,
                        }}
                        onClick={() => openOrClose(producer.uid, index)}
                      >
                        <img
                          className="photo_producer"
                          src={producer.photo}
                          alt={producer.name}
                        />
                      </button>
                    )
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Producer from "./Producer";

// function RegionMap({ regions }: any) {
//   const [currentLang, setCurrentLang] = useState<string>("fr");
//   const [openProducer, setOpenProducer] = useState<any>(null);

//   const toggleLanguage = () => {
//     setCurrentLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
//   };
//   const openOrClose = (producer: any) => {
//     setOpenProducer(openProducer === producer ? null : producer);
//   };

//   useEffect(() => {}, [currentLang]);

//   return (
//     <div>
//       <button onClick={toggleLanguage}>
//         {currentLang === "fr" ? "Version française" : "English Version"}
//       </button>

//       {regions[currentLang] && (
//         <div>
//           <h1>{regions[currentLang][0].title}</h1>

//           {regions[currentLang][0].producersRefCollection.items.map(
//             (element: any, index: any) => (
//               <div key={index}>
//                 <button className="flex" onClick={() => openOrClose(element)}>
//                   {element.producer}
//                 </button>

//                 {openProducer === element && ( // comprarer plutot des id que des objets json entiers
//                   <Producer
//                     producer={element}
//                     region={regions[currentLang][0]}
//                   />
//                 )}
//               </div>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegionMap;
