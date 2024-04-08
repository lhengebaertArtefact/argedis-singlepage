"use client";
import { useState } from "react";
import Producer from "./Producer";
import arrow_left from "../public/arrow_left.png";
import frenchFlag from "../public/frenchFlag.png";
import englishFlag from "../public/englishFlag.png";
import { motion } from "framer-motion";

import Lottie from "react-lottie";
import PhotoProducer from "./PhotoProducer";

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

  const currentRegion = region[currentLang];

  const nextProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < currentRegion.producersCollection.items.length
        ? nextIndex
        : 0;
    });
    setShowProducer(true);
  };

  const previousProducer = () => {
    setCurrentProducerIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex >= 0
        ? nextIndex
        : currentRegion.producersCollection.items.length - 1;
    });
    setShowProducer(true);
  };

  const myLottie: any | undefined = currentRegion?.lottieMap;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: myLottie, // Chargement de l'animation depuis le fichier JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const producerPhotoOnMap = "absolute w-[144px] top-[5px] z-[5]";

  return (
    <div
      className={" bg-cover bg-center max-w-full h-screen"}
      style={{ backgroundImage: `url(${currentRegion?.background.url})` }}
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
                src={
                  currentRegion.producersCollection.items[currentProducerIndex]
                    .mapProducer.url
                }
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
                      className="rounded-full bg-blanc w-[82px] h-[82px] flex justify-center items-center mr-[25px] cursor-pointer"
                      onClick={() => openOrClose(null, 0)}
                    >
                      {imageError ? (
                        <div className="w-full h-full bg-white"></div>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="43"
                          viewBox="0 0 25 43"
                          fill="none"
                          className=""
                          onError={handleImageError}
                        >
                          <path
                            d="M0.9375 21.6879C0.9375 22.5066 1.24019 23.205 1.86886 23.8311L20.0304 42.2051C20.5194 42.7349 21.1713 42.9998 21.9164 42.9998C23.4299 42.9998 24.6174 41.7957 24.6174 40.2063C24.6174 39.4357 24.3147 38.7374 23.8024 38.2076L7.43375 21.6879L23.8024 5.16814C24.3147 4.61427 24.6174 3.91592 24.6174 3.14532C24.6174 1.58004 23.4299 0.375977 21.9164 0.375977C21.1713 0.375977 20.5194 0.64087 20.0304 1.17066L1.86886 19.5446C1.24019 20.1708 0.960784 20.8691 0.9375 21.6879Z"
                            fill={currentRegion.hexapinpointcolor}
                          />
                        </svg>
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
                      producer={
                        currentRegion.producersCollection.items[
                          currentProducerIndex
                        ]
                      }
                      previousProducer={
                        currentProducerIndex > 0
                          ? currentRegion.producersCollection.items[
                              currentProducerIndex - 1
                            ]
                          : currentRegion.producersCollection.items[
                              currentRegion.producersCollection.items.length - 1
                            ]
                      }
                      nextProducer={
                        currentProducerIndex <
                        currentRegion.producersCollection.items.length - 1
                          ? currentRegion.producersCollection.items[
                              currentProducerIndex + 1
                            ]
                          : currentRegion.producersCollection.items[0]
                      }
                      region={currentRegion}
                      onNextSupplier={nextProducer}
                      onPreviousSupplier={previousProducer}
                      onError={handleImageError}
                      imageError={imageError}
                      currentLang={currentLang}
                      colorbackground={currentRegion.colorbackground}
                      hexapinpointcolor={currentRegion.hexapinpointcolor}
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

                  {currentRegion.producersCollection.items.map(
                    (producer: any, index: number) => (
                      <button
                        key={index}
                        className="absolute w-[300px] h-[50px] border-none rounded-full "
                        style={{
                          top: producer.y,
                          left: producer.x,
                        }}
                        onClick={() =>
                          openOrClose(producer.producerName, index)
                        }
                      >
                        {imageError ? (
                          <div className="w-full h-full bg-white"></div>
                        ) : (
                          <div className="relative">
                            <PhotoProducer
                              producerPhoto={producer.prodPhoto.url}
                              classProducer={producerPhotoOnMap}
                            />

                            <motion.div
                              className="absolute top-[-4px] left-[-8px] w-[160px] h-[155px] bg-white opacity-50 "
                              style={{
                                borderRadius:
                                  "55% 45% 45% 55% / 46% 42% 58% 54%",
                              }}
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
