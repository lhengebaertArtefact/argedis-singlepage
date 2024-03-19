"use client";
import { useEffect, useState } from "react";
import Producer from "./Producer";
import Image from "next/image";
import arrow_left from "../../public/arrow_left.png";
import frenchFlag from "../../public/frenchFlag.png";
import englishFlag from "../../public/englishFlag.png";

export default function RegionMap({ regions }: any) {
  const [currentLang, setCurrentLang] = useState<string>("fr");
  const [openProducer, setOpenProducer] = useState<string | null>(null);
  const [toggle, setToggle] = useState<any>(false);
  const [currentProducerIndex, setCurrentProducerIndex] = useState<number>(-1);

  // Fonction pour basculer entre le français et l'anglais
  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  // Fonction pour ouvrir ou fermer le composant Producer
  const openOrClose = (producerUid: string | null, index: number) => {
    setOpenProducer(producerUid);
    setCurrentProducerIndex(index);
    setToggle(!toggle);
  };

  // Fonction pour passer au fournisseur suivant
  const nextProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < currentRegion.producers.length ? nextIndex : 0;
    });
  };

  const previousProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex >= 0 ? nextIndex : currentRegion.producers.length - 1;
    });
  };

  const currentRegion = regions.regions.find(
    (region: any) => region.lang === currentLang
  );

  useEffect(() => {}, [currentLang]);

  useEffect(() => {
    setCurrentProducerIndex(0);
  }, [currentRegion]);

  return (
    <div className={toggle ? "basic" : "container"}>
      {toggle ? (
        <img
          src={currentRegion.smallMap}
          className="img_smallmap"
          alt="small map of a region"
        />
      ) : undefined}

      <button className="language-toggle" onClick={toggleLanguage}>
        {currentLang === "fr" ? (
          <div className="toggle_flags">
            <img className="img_flags" src={englishFlag.src} alt="" />
            version anglaise
          </div>
        ) : (
          <div className="toggle_flags">
            <img className="img_flags" src={frenchFlag.src} alt="" />
            french version
          </div>
        )}
      </button>

      {currentRegion && (
        <div>
          <ul>
            <li key={currentProducerIndex}>
              {openProducer ? (
                <div>
                  <div className="back_map">
                    <div className="arrow_left_wrapper">
                      <img
                        src={arrow_left.src}
                        className="arrow_left"
                        alt="arrow left"
                      />
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
                    previousProducer={
                      currentProducerIndex > 0
                        ? currentRegion.producers[currentProducerIndex - 1]
                        : currentRegion.producers[
                            currentRegion.producers.length - 1
                          ]
                    }
                    nextProducer={
                      currentProducerIndex < currentRegion.producers.length - 1
                        ? currentRegion.producers[currentProducerIndex + 1]
                        : currentRegion.producers[0]
                    }
                    region={currentRegion}
                    onNextSupplier={nextProducer}
                    onPreviousSupplier={previousProducer}
                    onCloseOrOpen={openOrClose}
                  />
                </div>
              ) : (
                <div>
                  <div className="titles_homepage">
                    <h1 className="title">{currentRegion.title}</h1>
                    <p className="subtitle">{currentRegion.subtitle}</p>
                  </div>

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
