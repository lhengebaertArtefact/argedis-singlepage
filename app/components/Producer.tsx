"use client";
import React, { useEffect } from "react";
import fond from "@/public/fond.png";
import arrow_left from "../../public/arrow_left.png";
import chevron_left from "../../public/chevron_left.png";
import arrow_right from "../../public/arrow_right.png";

function Producer({
  producer,
  region,
  onNextSupplier,
  onPreviousSupplier,
  previousProducer,
  nextProducer,
}: any) {
  return (
    <div className="absolute z-1 rounded-[40px] bg-white top-[834px] left-[48px] right-[48px] px-[68px] pt-[126px] px-[68px] py-[68px] z-[1]">
      <img
        className="absolute top-[-205px] left-[20px] w-[289px]"
        src={producer.photo}
        alt={producer.name}
      />
      <ul className="absolute top-[-138px] right-[81px] flex">
        {producer.products.map((product: any, index: number) => (
          <li key={index}>
            <img
              className="absolute top-[84px] z-[-1]"
              src={fond.src}
              alt="bubble white for products"
            />
            <img src={product.photo} alt={product.photo} />
          </li>
        ))}
      </ul>
      <div>
        <p className="text-[40px] text-[#007AA3] mb-[64px]">{producer.name}</p>
        <p className="text-[28px]">{producer.description}</p>
      </div>

      <div className="fixed bottom-0 left-[48px] right-[48px] flex  mb-[110px] justify-between items-center text-white">
        <button
          className="flex justify-between items-center rounded-[40px] bg-[#D4673D] h-[116px] text-[28px] px-[32px]"
          onClick={onPreviousSupplier}
        >
          <img src={chevron_left.src} alt="arrow left" className="mr-[43px]" />
          {region.previousSupplierButton}
          <img
            className="w-[51px] ml-[24px]"
            src={previousProducer.photo}
            alt={producer.name}
          />
        </button>
        <button
          className="flex justify-between items-center rounded-[40px] bg-[#D4673D] h-[116px] text-[28px] px-[32px]"
          onClick={onNextSupplier}
        >
          <img
            className="w-[51px] mr-[24px]"
            src={nextProducer.photo}
            alt={producer.name}
          />
          {region.nextSupplierButton}
          <img src={arrow_right.src} className="ml-[43px]" alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

export default Producer;

// "use client";

// function Producer({ producer, region }: any) {
//   return (
//     <div>
//       <p>{producer.producer}</p>
//       <p>{region.title}</p>
//       <img src={region.logo.url} alt="carte region" />
//     </div>
//   );
// }

// export default Producer;
