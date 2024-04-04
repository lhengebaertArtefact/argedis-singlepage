"use client";

import fond from "@/public/fond.png";
import chevron_left from "../../public/chevron_left.png";
import arrow_right from "../../public/arrow_right.png";
import gif_main from "../../public/gif_main.gif";

function Producer({
  producer,
  region,
  onNextSupplier,
  onPreviousSupplier,
  previousProducer,
  nextProducer,
  onError,
  imageError,
  currentLang,
}: any) {
  return (
    <div className="absolute z-1 rounded-[40px] bg-white top-[834px] left-[48px] right-[48px] px-[68px] pt-[126px] px-[68px] py-[68px] z-[1]">
      {imageError ? (
        <div className="w-full h-full bg-white"></div>
      ) : (
        <img
          className="fixed top-[655px] left-[68px] w-[289px]"
          src={producer.prodPhoto.url}
          alt={producer.producerName}
          onError={onError}
        />
      )}
      <ul className="fixed top-[700px] right-[121px] flex">
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
        <p className="text-[40px] text-[#007AA3] mb-[64px] font-nexaBold">
          {producer.producerName}
        </p>
        <p className="text-[28px] font-nexa">{producer.descriptionProducer}</p>
      </div>

      <div className="fixed bottom-0 left-[48px] right-[48px] flex  mb-[110px] justify-between items-center text-white">
        <img
          src={gif_main.src}
          alt="hand to click"
          className="absolute transform -rotate-23 right-8 top-8"
        />
        <button
          className="flex justify-between items-center rounded-[40px] bg-[#D4673D] h-[116px] text-[28px] px-[32px]"
          onClick={onPreviousSupplier}
        >
          <img
            src={chevron_left.src}
            alt="arrow left"
            className="mr-[43px]"
            onError={onError}
          />
          {currentLang === "fr" ? "fournisseur précédent" : "previous producer"}

          <img
            className="w-[51px] ml-[24px]"
            src={previousProducer.prodPhoto.url}
            alt={producer.name}
            onError={onError}
          />
        </button>
        <button
          className="flex justify-between items-center rounded-[40px] bg-[#D4673D] h-[116px] text-[28px] px-[32px]"
          onClick={onNextSupplier}
        >
          <img
            className="w-[51px] mr-[24px]"
            src={nextProducer.prodPhoto.url}
            alt={producer.producerName}
            onError={onError}
          />
          {currentLang === "fr" ? "fournisseur suivant" : "next producer"}
          <img
            src={arrow_right.src}
            className="ml-[43px]"
            alt="arrow right"
            onError={onError}
          />
        </button>
      </div>
    </div>
  );
}

export default Producer;
