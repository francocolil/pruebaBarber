"use client";

import React, { useState } from "react";
import Image from "next/image";

function Diplomas() {
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
      {/* CARDS */}
      <section className="body-font">
        <div className="container px-5 mx-auto pb-7 text-black">
          {/* COMPONENTE DE LA INFORMACION */}

          {/* DIPLOMAS */}
          <h1 className="text-3xl font-medium title-font text-center py-10">
            Mis Diplomas
          </h1>

          {/* FUNCION PARA HACERLE CLICK Y QUE SE AGRANDE LA IMAGEN */}
          <div className="flex flex-wrap -m-4">
            {diplomas.map((diploma, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Image
                    src={diploma.src}
                    alt={diploma.title}
                    width={diploma.width}
                    height={diploma.height}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 cursor-pointer hover:scale-[105%] transition-[transform]"
                    onClick={() => openModal(diploma)}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg">
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
      </section>

      {/* FUNCION PARA CERRAR LA IMAGEN */}
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
              alt={selectedImage.title}
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

export default Diplomas;
