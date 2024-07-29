import React from "react";
import Link from "next/link";

function Footer() {
  return (
    // <!-- Footer -->
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-black dark:text-neutral-200 mt-10">
      {/* <!-- REDES SOCIALES --> */}
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden md:block">
          <span>Mis Redes Sociales:</span>
        </div>
        <div className="flex justify-center items-center">
          {/* FACEBOOCK */}
          <Link
            href="#!"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>

          {/* TWITTER */}
          <Link
            href="#!"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Link>

          {/* YOUTUBE */}
          <Link
            href="#!"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 576 512"
            >
              <path
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* INSTAGRAM */}
          <Link
            href="#!"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>

          {/* LINKEDIN */}
          <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* <!-- Main container --> */}
      <div className="mx-6 pt-8 pb-4 text-center">
        {/* <!-- Text --> */}
        <div className="mb-6">
          <h5 className="mb-2 font-bold uppercase">Explore Our World</h5>

          <p className="mb-4">
            Embark on an adventure of a lifetime and uncover hidden wonders.
            Your journey begins now!
          </p>
        </div>

        {/* <!-- Links --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
          {/* <!-- First column --> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
              Adventures
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Lost Worlds
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Unknown Journeys
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Hidden Treasures
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Enchanted Realms
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Second column --> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
              Challenges
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Conquer Mountains
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Oceanic Odyssey
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Space Quest
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Desert Expeditions
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Third column --> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
              Get Started
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Copyright --> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
        <span>© 2024 Copyright: </span>

        {/* <!-- Logo --> */}
        <Link className="mx-3" href="#">
          <img
            src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
            className="h-5"
            alt="TE Logo"
            loading="lazy"
          />
        </Link>

        <Link
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          BARBER
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
