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
    <div className="producer_container">
      <img
        className="photo_producer_description"
        src={producer.photo}
        alt={producer.name}
      />
      <ul className="list_products">
        {producer.products.map((product: any, index: number) => (
          <li key={index}>
            <img
              className="product_photo_background"
              src={fond.src}
              alt="bubble white for products"
            />
            <img
              className="product_photo"
              src={product.photo}
              alt={product.photo}
            />
          </li>
        ))}
      </ul>
      <div className="producer_description_container">
        <p className="title_store">{producer.name}</p>
        <p className="producer_description">{producer.description}</p>
      </div>

      <div className="producer-buttons-container">
        <button className="next_prev_buttons" onClick={onPreviousSupplier}>
          {" "}
          <img
            src={chevron_left.src}
            alt="arrow left"
            className="arrow_prev_producer"
          />
          {region.previousSupplierButton}
          <img
            className="photo_prev_producer"
            src={previousProducer.photo}
            alt={producer.name}
          />
        </button>
        <button className="next_prev_buttons" onClick={onNextSupplier}>
          {" "}
          <img
            className="photo_next_producer"
            src={nextProducer.photo}
            alt={producer.name}
          />
          {region.nextSupplierButton}
          <img
            src={arrow_right.src}
            className="arrow_next_producer"
            alt="arrow right"
          />
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
