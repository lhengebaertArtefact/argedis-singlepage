"use client";

import { useEffect } from "react";

export default function Home() {
  function requestFullScreen(element: any) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE/Edge */
      element.msRequestFullscreen();
    }
  }

  useEffect(() => {
    const appContainer = document.getElementById("app-container"); // Remplacez 'app-container' par l'ID de votre conteneur d'application
    requestFullScreen(appContainer);
  }, []);

  return (
    <div
      className="
    w-screen h-screen bg-black"
    ></div>
  );
}
