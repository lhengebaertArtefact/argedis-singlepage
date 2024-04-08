"use client";

import fond from "@/public/fond.png";
import gif_main from "../public/gif_main.gif";
import PhotoProducer from "./PhotoProducer";

function Producer({
  producer,
  onNextSupplier,
  onPreviousSupplier,
  previousProducer,
  nextProducer,
  onError,
  imageError,
  currentLang,
  colorbackground,
  hexapinpointcolor,
}: any) {
  const producerPhotoButtonLeft = "w-[51px] ml-[24px]";
  const producerPhotoButtonRight = "w-[51px] mr-[24px]";
  const producerMainPhoto = "fixed top-[655px] left-[68px] w-[289px]";

  return (
    <div className="absolute z-1 rounded-[40px] bg-blanc top-[834px] left-[48px] right-[48px] px-[68px] pt-[126px] px-[68px] py-[68px] z-[1]">
      {imageError ? (
        <div className="w-full h-full bg-white"></div>
      ) : (
        <PhotoProducer
          producerPhoto={producer.prodPhoto.url}
          classProducer={producerMainPhoto}
        />
      )}
      <ul className="fixed top-[700px] left-[400px] flex">
        {producer.productsCollection.items.map(
          (product: any, index: number) => (
            <li key={index}>
              {imageError ? (
                <div className="w-full h-full bg-white"></div>
              ) : (
                <img
                  className="absolute top-[84px] z-[-1]"
                  src={fond.src}
                  alt="bubble white for products"
                  onError={onError}
                />
              )}
              {imageError ? (
                <div className="w-full h-full bg-white"></div>
              ) : (
                <img
                  src={product.productPhoto.url}
                  alt={product.productName}
                  onError={onError}
                />
              )}
            </li>
          )
        )}
      </ul>
      <div className="max-h-[500px] overflow-y-auto">
        <p
          className={`text-[40px] mb-[64px] font-nexaBold`}
          style={{ color: colorbackground }}
        >
          {" "}
          {producer.producerName}
          <br />
          {producer.producerName2 && producer.producerName2}
        </p>
        <p className="text-[28px] font-normal font-nexa">
          {producer.descriptionProducer}
        </p>
      </div>

      <div className="fixed bottom-0 left-[48px] right-[48px] flex  mb-[110px] justify-between items-center text-white">
        <img
          src={gif_main.src}
          alt="hand to click"
          className="absolute transform -rotate-23 right-8 top-8"
        />
        <button
          className="flex justify-between items-center rounded-[40px] bg-blanc h-[116px] text-[28px] px-[32px] text-black font-bold"
          onClick={onPreviousSupplier}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="30"
            viewBox="0 0 21 30"
            fill="none"
            className="mr-[43px]"
            onError={onError}
          >
            <path
              d="M-3.27628e-06 15C-3.40214e-06 14.4237 0.268433 13.9322 0.825955 13.4915L16.9321 0.559317C17.3658 0.186436 17.9439 -3.13742e-06 18.6047 -3.25295e-06C19.9469 -3.48763e-06 21 0.847452 21 1.9661C21 2.50847 20.7316 3 20.2773 3.37288L5.76106 15L20.2773 26.6271C20.7316 27.0169 21 27.5085 21 28.0508C21 29.1525 19.9469 30 18.6047 30C17.944 30 17.3658 29.8136 16.9322 29.4407L0.825956 16.5085C0.268434 16.0678 0.0206458 15.5763 -3.27628e-06 15Z"
              fill={hexapinpointcolor}
            />
          </svg>
          {currentLang === "fr" ? "Fournisseur précédent" : "Previous producer"}

          <PhotoProducer
            producerPhoto={previousProducer.prodPhoto.url}
            classProducer={producerPhotoButtonLeft}
            colorBorder={hexapinpointcolor}
          />
        </button>
        <button
          className="flex justify-between items-center rounded-[40px] bg-blanc h-[116px] text-[28px] px-[32px] text-black font-bold"
          onClick={onNextSupplier}
        >
          <PhotoProducer
            producerPhoto={nextProducer.prodPhoto.url}
            classProducer={producerPhotoButtonRight}
            colorBorder={hexapinpointcolor}
          />
          {currentLang === "fr" ? "Fournisseur suivant" : "Next producer"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="30"
            viewBox="0 0 21 30"
            fill="none"
            className={`ml-[43px]`}
            onError={onError}
          >
            <path
              d="M21 15C21 15.5763 20.7316 16.0678 20.174 16.5085L4.06784 29.4407C3.63422 29.8136 3.05604 30 2.39528 30C1.05309 30 -3.18569e-06 29.1525 -3.13663e-06 28.0339C-3.11285e-06 27.4915 0.268433 27 0.72271 26.6271L15.2389 15L0.722711 3.37288C0.268434 2.98305 -2.0166e-06 2.49152 -1.99282e-06 1.94915C-1.94451e-06 0.847456 1.05309 -1.74381e-06 2.39528 -1.62648e-06C3.05605 -1.56871e-06 3.63422 0.186439 4.06784 0.559321L20.174 13.4915C20.7316 13.9322 20.9794 14.4237 21 15Z"
              fill={hexapinpointcolor}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Producer;
