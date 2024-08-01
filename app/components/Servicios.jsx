import React from "react";
import Image from "next/image";

function Servicios() {
  return (
    <>
      {/* Sección de Servicios */}
      <section className="text-gray-200 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white pb-[20px]">
              Mis Servicios
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Ofrecemos una variedad de servicios para satisfacer todas tus
              necesidades de belleza y cuidado personal.
            </p>
          </div>

          {/* CARD DE LOS SERVICIOS */}
          <div className="flex flex-wrap -m-4">
            {/* SERVICIO 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-75 p-8 rounded-lg text-center">
                <Image
                  src="/assets/cortecabello.jpg"
                  alt="Barbería"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full object-cover object-center mb-4 mx-auto"
                />
                <h2 className="text-white text-lg title-font font-medium">
                  Corte de Cabello
                </h2>
                <p className="leading-relaxed mb-6">
                  Nuestra oferta exclusiva incluye un corte de cabello realizado
                  por un barbero profesional experimentado, lavado, secado y
                  peinado. También le daremos algunos consejos de estilo y lo
                  ayudaremos a elegir su producto para el cabello personal.
                </p>
                <button class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  Agendar
                </button>
              </div>
            </div>

            {/* SERVICIO 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-75 p-8 rounded-lg text-center">
                <Image
                  src="/assets/barba.jpg"
                  alt="Tratamiento Barba"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full object-cover object-center mb-4 mx-auto"
                />
                <h2 className="text-white text-lg title-font font-medium">
                  Tratamiento Barba
                </h2>
                <p className="leading-relaxed mb-6">
                  Venga a conocer un corte de barba profesional, ya sea que
                  recién esté comenzando o tenga una barba de chivo, nuestros
                  barberos le darán estilo a su barba. El uso de productos de
                  alta calidad y el protocolo con toallas calientes lo dejarán
                  con la sensación de que ha sido la mejor experiencia de su
                  vida.
                </p>
                <button class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  Agendar
                </button>
              </div>
            </div>

            {/* SERVICIO 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-75 p-8 rounded-lg text-center">
                <Image
                  src="/assets/skincare.jpg"
                  alt="Premium Skin Care"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full object-cover object-center mb-4 mx-auto"
                />
                <h2 className="text-white text-lg title-font font-medium">
                  Skin Care
                </h2>
                <p className="leading-relaxed mb-6">
                  Recupere el esplendor de su piel dejándola lisa, radiante y
                  luminosa con este exclusivo ritual Skin Care. Descubra en su
                  rostro los beneficios de este fantástico tratamiento con
                  productos de alta calidad que ha sido diseñado para recuperar
                  las pieles más desvitalizadas y envejecidas.
                </p>
                <button class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  Agendar
                </button>
              </div>
            </div>

            {/* SERVICIO 4 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-75 p-8 rounded-lg text-center">
                <Image
                  src="/assets/clasespeluqueria.jpg"
                  alt="Clases de Peluquería"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full object-cover object-center mb-4 mx-auto"
                />
                <h2 className="text-white text-lg title-font font-medium">
                  Clases de Peluquería
                </h2>
                <p className="leading-relaxed mb-6">
                  Aprende técnicas de peluquería y barbería con nuestros cursos
                  especializados.
                </p>
                <button class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  Agendar
                </button>
              </div>
            </div>

            {/* SERVICIO 5 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-75 p-8 rounded-lg text-center">
                <Image
                  src="/assets/maquillaje.jpg"
                  alt="Clases de Barbería"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full object-cover object-center mb-4 mx-auto"
                />
                <h2 className="text-white text-lg title-font font-medium">
                  Maquillaje
                </h2>
                <p className="leading-relaxed mb-6">
                  Conviértete en un experto barbero con nuestras clases
                  prácticas y teóricas.
                </p>
                <button class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicios;
