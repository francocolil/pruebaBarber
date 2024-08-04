"use client";

import { useEffect } from "react";
import NavbarAntiguo from "../components/NavAntiguo";

function page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const M = require("materialize-css");
      M.AutoInit();
    }
  }, []);
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        rel="stylesheet"
      />
      <main className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1 className="h1">Bareria</h1>
          </div>
        </div>

        <div className="row galeria">
          <div className="col s12 m4 l3">
            <div className="material-placeholder">
              <img
                src="/assets/barba.jpg"
                alt=""
                className="responsive-img materialboxed"
                data-caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
            </div>
          </div>

          <div className="col s12 m4 l3">
            <div className="material-placeholder">
              <img
                src="/assets/cabello1.jpg"
                alt=""
                className="responsive-img materialboxed"
                data-caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
