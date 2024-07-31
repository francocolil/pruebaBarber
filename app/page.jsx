import Image from "next/image";
import QuienSoy from "./components/QuienSoy";
import Galeria1 from "./components/Galeria1";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
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

          <div className="flex flex-wrap -m-4">
            {/* DIPLOMA 1 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  src="/assets/1.png"
                  alt="Diploma"
                  width={899}
                  height={337}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Diploma 1
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            {/* DIPLOMA 2 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/201x201"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            {/* DIPLOMA 3 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/202x202"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Atticus Finch
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            {/* DIPLOMA 4 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Henry Letham
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            {/* DIPLOMA 5 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Corte de Caballero
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  {/* ICONOS DE REDES SOCIALES */}
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* PRUEBA 1 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div class="block rounded-lg bg-black shadow-secondary-1 dark:bg-surface-dark">
                <div
                  class="relative overflow-hidden bg-cover bg-no-repeat"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <div class="p-6 text-surface dark:text-white">
                  <h5 class="mb-2 text-xl font-medium leading-tight">
                    Card title
                  </h5>
                  <p class="mb-4 text-base">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>

            {/* PRUEBA 2 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="/assets/1.png" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* PRUEBA 3 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div class="block rounded-lg bg-black shadow-secondary-1 dark:bg-surface-dark">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6 text-surface dark:text-white">
                  <h5 class="mb-2 text-xl font-medium leading-tight">
                    Card title
                  </h5>
                  <p class="mb-4 text-base">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>

            {/* PRUEBA 4 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div class="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  class="w-full h-40 object-cover rounded-t-lg"
                  alt="Card Image"
                  src="/assets/cabello1.jpg"
                />
                <div class="p-4">
                  <h2 class="text-xl  font-semibold">Beautiful Card</h2>
                  <p class="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam quis ante sit amet tellus ornare tincidunt.
                  </p>
                  <div class="flex justify-between items-center mt-4">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GALERIA DE IMAGENES */}
        <Galeria1 />
      </section>
    </>
  );
}
