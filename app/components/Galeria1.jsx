"use client";

import React, { useState } from "react";
import Image from "next/image";

function Galeria1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: "/assets/cabello1.jpg", width: 660, height: 800, alt: "Corte 1" },
    { src: "/assets/cabello2.jpg", width: 236, height: 397, alt: "Corte 2" },
    { src: "/assets/cabello3.jpg", width: 377, height: 566, alt: "Corte 3" },
    { src: "/assets/cabello4.jpg", width: 700, height: 734, alt: "Corte 4" },
    { src: "/assets/cabello5.jpeg", width: 650, height: 812, alt: "Corte 5" },
    { src: "/assets/cabello6.png", width: 1024, height: 850, alt: "Corte 6" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col text-center w-full mb-14 mt-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white pb-6">
          Algunos de mis trabajos
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
          Esta es mi galeria de Imagens con mis trabajos
        </p>
      </div>

      {/* FUNCION PARA HACERLE CLICK A LA IMAGEN Y QUE SE AGRANDE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 container px-5 mx-auto">
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image)}>
            <Image
              width={image.width}
              height={image.height}
              className="h-96 max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-pointer"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {/* FUNCION PARA CERRA LA IMAGEN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Galeria1;
