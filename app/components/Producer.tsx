"use client";

function Producer({ producer, region }: any) {
  return (
    <div>
      <p>{producer.producer}</p>
      <p>{region.title}</p>
      <img src={region.logo.url} alt="carte region" />
    </div>
  );
}

export default Producer;
