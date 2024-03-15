"use client";
import React from "react";
import Image from "next/image";

function Producer({
  producer,
  region,
  onNextSupplier,
  onPreviousSupplier,
  langage,
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
              className="product_photo"
              src={product.photo}
              alt={product.name}
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
          {region.previousSupplierButton}
        </button>
        <button className="next_prev_buttons" onClick={onNextSupplier}>
          {" "}
          {region.nextSupplierButton}
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
