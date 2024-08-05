import Image from "next/image";
import Galeria1 from "./components/Galeria1";
import Servicios from "./components/Servicios";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  return (
    <>
      <VideoPlayer />

      <div class="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row items-centerlg:space-y-0 lg:space-x-32 mb-10">
        <div class="flex-1 max-w-2xl mr-auto mt-10">
          <p class="font-black h1">
            La opción más completa para el cuidado masculino
          </p>
          <p class="my-3 sm:my-9 text-black/60 parrafo sm:parrafo leading-normal">
            Salón/barbería donde ejecutamos servicios de barbería, y
            tratamientos que van desde el cuidado de la piel hasta la química
            capilar, brindando así una completa cobertura a las demandas del
            hombre de hoy.
          </p>
          <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-9 mb-3 sm:mb-9">
            <div class="flex-1 bg-black/5 p-4 sm:p-6 flex items-center space-x-4 sm:space-x-6 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664"
                />
              </svg>
              <p className="parrafo">Desde 2023</p>
            </div>
            <div class="flex-1 bg-black/5 p-4 sm:p-6 flex items-center space-x-4 sm:space-x-6 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
              <p className="parrafo">+200 Clientes Felices</p>
            </div>
          </div>
          <p class="my-3 sm:my-9 text-black/60 parrafo sm:parrafo leading-normal">
            Nuestro concepto es brindar la mejor y más alta asesoría con un alto
            interés de individualización para cada servicio. Nuestra meta es
            llevar nuestro servicio más allá que el de una barbería común.
          </p>
        </div>
        <div>
          <div className="w-64 h-64 sm:w-96 rounded-full overflow-hidden mt-24 mx-auto sm:h-96 shadow-lg shadow-black/50 m-10">
            <img src="/assets/cabello1.jpg" className="w-full" />
          </div>
        </div>
      </div>

      {/* SERVICIOS */}
      <Servicios />
      {/* GALERIA DE IMAGENES */}
      <Galeria1 />
    </>
  );
}
