"use client";

import React, { useState } from "react";
import Image from "next/image";
import Galeria1 from "./components/Galeria1";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const diplomas = [
    {
      src: "/assets/1.png",
      width: 899,
      height: 337,
      title: "Diploma 1",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      src: "/assets/1.png",
      width: 899,
      height: 337,
      title: "Holden Caulfield",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      src: "/assets/1.png",
      width: 899,
      height: 337,
      title: "Atticus Finch",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      src: "/assets/1.png",
      width: 899,
      height: 337,
      title: "Henry Letham",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
  ];

  return (
    <>
      <VideoPlayer />
      {/* CARDS */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          {/* COMPONENTE DE LA INFORMACION */}

          {/* DIPLOMAS */}
          <h1 className="text-3xl font-medium title-font mb-4 text-black text-center py-10 pt-16">
            Mis Diplomas
          </h1>

          {/* FUNCION PARA PODER HACERLE CLICK A LOS DIPLOMAS */}
          <div className="flex flex-wrap -m-4">
            {diplomas.map((diploma, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Image
                    src={diploma.src}
                    alt={diploma.title}
                    width={diploma.width}
                    height={diploma.height}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 cursor-pointer"
                    onClick={() => openModal(diploma)}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {diploma.title}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{diploma.role}</h3>
                    <p className="mb-4">{diploma.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GALERIA DE IMAGENES */}
        <Galeria1 />
      </section>

      {/* FUNCION PARA CERRAR LA IMAGEN AL MOMENTO DE HACERLE CLICK */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-4 rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-1"
            >
              ✖️
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={selectedImage.width}
              height={selectedImage.height}
              className="rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="title-font font-medium text-lg text-gray-900">
                {selectedImage.title}
              </h2>
              <h3 className="text-gray-500 mb-3">{selectedImage.role}</h3>
              <p className="mb-4">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
