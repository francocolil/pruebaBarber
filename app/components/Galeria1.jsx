import React from "react";
import Image from "next/image";

function Galeria1() {
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 container px-5 mx-auto">
        <div>
          <Image
            width={660}
            height={800}
            className="h-auto max-w-full rounded-lg object"
            src="/assets/cabello1.jpg"
            alt="Corte"
          />
        </div>
        <div>
          <Image
            width={236}
            height={397}
            className="h-auto max-w-full rounded-lg"
            src="/assets/cabello2.jpg"
            alt="Corte"
          />
        </div>
        <div>
          <Image
            width={377}
            height={566}
            className="h-auto max-w-full rounded-lg"
            src="/assets/cabello3.jpg"
            alt="Corte"
          />
        </div>
        <div>
          <Image
            width={700}
            height={734}
            className="h-auto max-w-full rounded-lg"
            src="/assets/cabello4.jpg"
            alt="Corte"
          />
        </div>
        <div>
          <Image
            width={650}
            height={812}
            className="h-auto max-w-full rounded-lg"
            src="/assets/cabello5.jpeg"
            alt="Corte"
          />
        </div>
        <div>
          <Image
            width={1024}
            height={850}
            className="h-auto max-w-full rounded-lg"
            src="/assets/cabello6.png"
            alt="Corte"
          />
        </div>
      </div>
    </>
  );
}

export default Galeria1;
