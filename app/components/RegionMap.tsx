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
    <div
      className={
        toggle
          ? "bg-custom-bg bg-cover bg-center max-w-full h-screen"
          : "bg-custom-map bg-cover bg-center max-w-full h-screen"
      }
    >
      {toggle ? (
        <img
          src={currentRegion.smallMap}
          className="absolute top-[206px] left-[282px]"
          alt="small map of a region"
        />
      ) : undefined}

      <button
        className="absolute top-[84px] right-[48px] z-2 bg-white rounded-full px-6 py-5 text-xl"
        onClick={toggleLanguage}
      >
        {currentLang === "fr" ? (
          <div className="flex items-center">
            <img className="mr-4" src={englishFlag.src} alt="" />
            version anglaise
          </div>
        ) : (
          <div className="flex items-center">
            <img className="mr-4" src={frenchFlag.src} alt="" />
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
                  <div className="absolute top-[84px] left-[48px] flex">
                    <div className="rounded-full bg-[#D4673D] w-[82px] h-[82px] flex justify-center items-center mr-[25px]">
                      <img
                        src={arrow_left.src}
                        className="h-[42px]"
                        alt="arrow left"
                        onClick={() => openOrClose(null, 0)}
                      />
                    </div>
                    <button
                      className="text-white text-[36px]"
                      onClick={() => openOrClose(null, 0)}
                    >
                      {currentLang === "fr"
                        ? "revenir à la carte"
                        : "return to map"}
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
                  />
                </div>
              ) : (
                <div>
                  <div className="absolute top-[232px] pl-[155px] pr-[155px] left-0 right-0">
                    <h1 className="text-white text-center text-5xl mb-8">
                      {currentLang === "fr"
                        ? "Découvrez le savoir faire de nos fournisseurs locaux !"
                        : "Discover Brittany"}
                    </h1>
                    <p className="text-white text-center text-3xl">
                      {currentLang === "fr"
                        ? "Cliquez sur le fournisseur de votre choix"
                        : "Explore local producers in Brittany"}
                    </p>
                  </div>

                  {currentRegion.producers.map(
                    (producer: any, index: number) => (
                      <button
                        key={index}
                        className="absolute w-[300px] h-[50px] border-none rounded-full "
                        style={{
                          top: producer.coordinates.y,
                          left: producer.coordinates.x,
                        }}
                        onClick={() => openOrClose(producer.uid, index)}
                      >
                        <img
                          className="absolute w-[144px]"
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
