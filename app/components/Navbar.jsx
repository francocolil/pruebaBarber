import Link from "next/link";
import React from "react";

function navbar() {
  return (
    <header class="text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl text-white">Tailblocks</span>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" class="mr-5 hover:text-yellow-500">
            Sobre Mi
          </Link>
          <Link href="/Barberia" class="mr-5 hover:text-yellow-500">
            Barberia
          </Link>
          <Link href="/Estilista" class="mr-5 hover:text-yellow-500">
            Estilista
          </Link>
          <Link href="/Maquillaje" class="mr-5 hover:text-yellow-500">
            Maquillaje
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default navbar;
