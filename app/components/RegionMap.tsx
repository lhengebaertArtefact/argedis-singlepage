"use client";
import { useEffect, useState } from "react";
import Producer from "./Producer";
import arrow_left from "../../public/arrow_left.png";
import frenchFlag from "../../public/frenchFlag.png";
import englishFlag from "../../public/englishFlag.png";
import map_big from "../../public/map_big.png";
import logoTotal from "../../public/logoTotal.png";
import { motion } from "framer-motion";
import { animate } from "popmotion";
import Lottie from "react-lottie";

export default function RegionMap({ region }: any) {
  const [currentLang, setCurrentLang] = useState<string>("fr");
  const [openProducer, setOpenProducer] = useState<string | null>(null);
  const [toggle, setToggle] = useState<any>(false);
  const [currentProducerIndex, setCurrentProducerIndex] = useState<number>(-1);
  const [imageError, setImageError] = useState<boolean>(false);
  const [showProducer, setShowProducer] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Fonction pour basculer entre le français et l'anglais
  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  // Fonction pour ouvrir ou fermer le composant Producer
  const openOrClose = (producerUid: string | null, index: number) => {
    setOpenProducer(producerUid);
    setCurrentProducerIndex(index);
    setToggle(!toggle);
    setShowProducer(false);
  };

  // Fonction pour passer au fournisseur suivant
  const nextProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < currentRegion.producers.length ? nextIndex : 0;
    });
    setShowProducer(true);
  };

  const previousProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex >= 0 ? nextIndex : currentRegion.producers.length - 1;
    });
    setShowProducer(true);
  };

  const currentRegion = region.find(
    (region: any) => region.lang === currentLang
  );

  useEffect(() => {}, [currentLang]);

  useEffect(() => {
    setCurrentProducerIndex(0);
  }, [currentRegion, showProducer]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: currentRegion.bigMap, // Chargement de l'animation depuis le fichier JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={" bg-cover bg-center max-w-full h-screen"}
      style={{ backgroundImage: `url(${currentRegion.backgroundMap})` }}
    >
      <motion.div
        className="absolute top-[0px]"
        initial={{ scale: 1, y: 0, opacity: 1 }}
        animate={{
          scale: toggle ? 0.63 : 1,
          y: toggle ? -595 : 0,
          x: toggle ? -15 : 0,
          opacity: toggle ? 0 : 1,
        }}
        transition={{ duration: 0.2, opacity: toggle ? { delay: 0.3 } : 1 }}
      >
        {imageError ? (
          <div className="w-full h-full bg-white"></div>
        ) : (
          <div>
            <Lottie options={defaultOptions} />
          </div>
        )}
      </motion.div>
      {toggle && (
        <motion.div
          className="absolute top-[-195px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {imageError ? (
            <div className="w-full h-full bg-white"></div>
          ) : (
            <div>
              <img
                src={currentRegion.producers[currentProducerIndex].map}
                alt="small map of a region"
                className="scale-[2] mt-[200px]"
                onError={handleImageError}
              />
            </div>
          )}
        </motion.div>
      )}

      <button
        className="absolute top-[84px] right-[48px] z-2 bg-white rounded-full px-6 py-5 text-xl z-[5]"
        onClick={toggleLanguage}
      >
        {currentLang === "fr" ? (
          <div className="flex items-center font-nexaBold">
            {imageError ? (
              <div className="w-full h-full bg-white"></div>
            ) : (
              <img
                className="mr-4"
                src={englishFlag.src}
                alt=""
                onError={handleImageError}
              />
            )}
            Version anglaise
          </div>
        ) : (
          <div className="flex items-center font-nexaBold">
            {imageError ? (
              <div className="w-full h-full bg-white"></div>
            ) : (
              <img
                className="mr-4"
                src={frenchFlag.src}
                alt=""
                onError={handleImageError}
              />
            )}
            French version
          </div>
        )}
      </button>

      {currentRegion && (
        <div>
          <ul>
            <li key={currentProducerIndex}>
              {openProducer ? (
                <div>
                  <div className="absolute top-[84px] left-[48px] flex z-[10]">
                    <div
                      className="rounded-full bg-[#D4673D] w-[82px] h-[82px] flex justify-center items-center mr-[25px] cursor-pointer"
                      onClick={() => openOrClose(null, 0)}
                    >
                      {imageError ? (
                        <div className="w-full h-full bg-white"></div>
                      ) : (
                        <img
                          src={arrow_left.src}
                          className="h-[42px] z-[5]"
                          alt="arrow left"
                          onError={handleImageError}
                        />
                      )}
                    </div>
                    <button
                      className="text-white text-[36px] font-nexaBold"
                      onClick={() => openOrClose(null, 0)}
                    >
                      {currentLang === "fr"
                        ? "Retourner à la carte"
                        : "Return to map"}
                    </button>
                  </div>

                  <motion.div
                    initial={
                      showProducer
                        ? { y: 0, opacity: 0.5 }
                        : { y: "100vh", opacity: 0 }
                    }
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                      showProducer
                        ? {
                            duration: 0.8,
                            ease: "easeIn",
                          }
                        : {
                            duration: 0.2,
                          }
                    }
                  >
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
                        currentProducerIndex <
                        currentRegion.producers.length - 1
                          ? currentRegion.producers[currentProducerIndex + 1]
                          : currentRegion.producers[0]
                      }
                      region={currentRegion}
                      onNextSupplier={nextProducer}
                      onPreviousSupplier={previousProducer}
                      onError={handleImageError}
                      imageError={imageError}
                    />
                    <div style={{ height: "100vh" }}></div>
                  </motion.div>
                </div>
              ) : (
                <div>
                  <div className="absolute top-[232px] pl-[155px] pr-[155px] left-0 right-0">
                    <h1 className="text-white text-center text-5xl mb-8  font-nexaBold">
                      {currentLang === "fr"
                        ? "Découvrez le savoir faire de nos fournisseurs locaux !"
                        : "Discover Brittany"}
                    </h1>
                    <p className="text-white text-center text-3xl font-nexa">
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
                        {imageError ? (
                          <div className="w-full h-full bg-white"></div>
                        ) : (
                          <div className="relative">
                            <img
                              className="absolute w-[144px] top-[5px] z-[5]"
                              src={producer.photo}
                              alt={producer.name}
                              onError={handleImageError}
                            />
                            <motion.div
                              className="absolute top-[-7px] left-[-7px] w-[160px] h-[160px] bg-white opacity-50 rounded-full"
                              initial={{ scale: 1 }}
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                times: [0, 0.3, 1],
                              }}
                            >
                              {" "}
                            </motion.div>
                          </div>
                        )}
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

//   <motion.div
//   className="absolute top-0 left-0 w-[144px] h-[144px] rounded-full border-white border-solid border-opacity-50"
//   initial={{ scale: 1 }}
//   animate={{ scale: [1, 1.1, 1] }}
//   transition={{ duration: 2, repeat: Infinity }}
// ></motion.div>;

// "use client";

// import { useEffect, useState } from "react";
// import Producer from "./Producer";

// function RegionMap({  }: any) {
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
