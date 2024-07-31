import React from "react";
import Image from "next/image";

function QuienSoy() {
  return (
    <div className="w-full h-screen relative">
      <Image
        src="/assets/barber.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="relative flex flex-col items-center justify-center w-full h-full text-center z-10 bg-opacity-75 bg-black p-4">
        <h1 className="text-4xl font-medium title-font mb-8 text-white">
          Sobre Mi
        </h1>
        <p className="lg:w-2/3 mx-auto leading-loose text-lg text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          eligendi doloribus consectetur earum qui, pariatur repellendus
          distinctio nobis blanditiis. Culpa quasi aspernatur fuga tempora
          doloribus laudantium dolorem provident error itaque illum, molestiae
          facere laborum odio quos maxime incidunt, hic nostrum ratione quidem
          esse dolore, aliquid similique officiis eum. Unde odit expedita amet
          distinctio quo fugit quae alias laboriosam consequuntur assumenda
          repudiandae ullam tenetur architecto ea sequi, quibusdam minus
          voluptatum, facere error id officia. Animi provident iste accusantium.
          Alias tempora magnam officiis id dolorem vitae voluptatum quod.
          Officiis libero veniam enim, dolor qui porro incidunt eligendi
          recusandae odit temporibus tenetur sit.
        </p>
      </div>
    </div>
  );
}

export default QuienSoy;
