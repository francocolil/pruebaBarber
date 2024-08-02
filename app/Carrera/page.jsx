import React from "react";
import Diplomas from "../components/Diplomas";

function page() {
  return (
    <>
      <section>
        <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">
          {/* TEXTO */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Estilista Unisex con Mención Químicos ADMISIÓN 5 DE AGOSTO 2024
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              autem, nihil sit nemo nostrum, temporibus eveniet nesciunt est
              dolores id quis rem, suscipit dolore! Id quae tempore sed magni
              quam!
            </p>
            <h3>5 RAZONES PARA FORMARTE EN ACADEMIA CRISTIAN DELGADO</h3>
            <ul className="list-disc mt-4 ml-[29px] list-inside">
              <li>TÍTULO ACREDITADO POR ASIPECH A.G.</li>
              <li>
                EQUIPO DOCENTE CON VASTA EXPERIENCIA EN FORMACIÓN DE ESTILISTAS
              </li>
              <li>CLASES DE ADMINISTRACIÓN INCLUIDA EN LA MALLA</li>
              <li>
                TRABAJO ASEGURADO A LOS MEJORES ALUMNOS DE LA GENERACIÓN {">"}{" "}
                CONVENIO CON PELUQUERÍAS INTEGRALES (Palumbo y Sebastian Ferrer
                Hairvolution)
              </li>
              <li>
                GIRAS DE ESTUDIO A FERIAS DE PELUQUERÍA EN LATINOAMÉRICA Y
                EUROPA
              </li>
            </ul>
            <p className="mt-10">
              Tenemos 2 modalidades para ser el y la Mejor ESTILISTA de Chile{" "}
              <span className="font-bold">
                (ambas modalidades tienen el mismo contenido).
              </span>
            </p>
          </div>

          {/* IMAGEN */}
          <div className="lg:max-w-lg lg:w-full md:1/2 w-5/6">
            <h1 className="text-center text-xl mb-6">
              CARRERA ACREDITADA POR{" "}
              <span className="font-bold">ASIPECH A.G.</span>
            </h1>
            <img
              src="/assets/barber.jpg"
              alt=""
              className="object-cover object-center rounded shadow-xl hover:scale-[105%] transition-[transform]"
            />
          </div>
        </div>
        <Diplomas />

        {/* SEGUNDO */}
        <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">
          {/* TEXTO */}
          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              autem, nihil sit nemo nostrum, temporibus eveniet nesciunt est
              dolores id quis rem, suscipit dolore! Id quae tempore sed magni
              quam!
            </p>
          </div>

          {/* IMAGEN */}
          <div className="lg:max-w-lg lg:w-full md:1/2 w-5/6 md:order-first">
            <img
              src="/assets/barber.jpg"
              alt=""
              className="object-cover object-center rounded shadow-xl hover:scale-[105%] transition-[transform]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default page;