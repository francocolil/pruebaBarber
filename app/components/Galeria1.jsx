import React from "react";
import Image from "next/image";

function Galeria1() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-14">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white pb-6">
            Algunas demostraciones de mi trabajo
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Esta es mi galeria de Imagens con mis trabajos
          </p>
        </div>

        {/* IMAGEN 1 */}
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <Image
                alt="gallery"
                width={660}
                height={800}
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/assets/cabello1.jpg"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGEN 2 */}
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <Image
                alt="gallery"
                width={236}
                height={397}
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/assets/cabello2.jpg"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGEN 3 */}
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <Image
                alt="gallery"
                width={377}
                height={566}
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/assets/cabello3.jpg"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGEN 4 */}
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <Image
                alt="gallery"
                width={700}
                height={734}
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/assets/cabello4.jpg"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Neptune
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGEN 5 */}
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <Image
                alt="gallery"
                width={650}
                height={812}
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/assets/cabello5.jpeg"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Holden Caulfield
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGEN 6 */}
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <Image
                alt="gallery"
                width={1024}
                height={850}
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/assets/cabello6.png"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Alper Kamu
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria1;
