import React from "react";
import Image from "next/image";

function QuienSoy() {
  return (
    <div className="container px-5 py-24 mx-auto relative">
      <Image
        src="/assets/barber.jpg"
        alt="Background Image"
        objectFit="cover"
        width={1200}
        height={795}
        className="absolute inset-0 w-full h-full z-0 rounded-lg"
      />
      <div className="relative flex flex-col text-center w-full mb-20 z-10">
        <h1 className="text-4xl font-medium title-font mb-8 text-white">
          Sobre Mi
        </h1>
        <p className="lg:w-2/3 mx-auto leading-loose text-lg text-white p-4 rounded">
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
