import Link from "next/link";
import React from "react";

const Banner = () => {
  const image = `/assets/images/banner-item-01.jpg`;

  return (
    <>
      <div className="main-banner slideInDown" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-banner">
                <div
                  className="item"
                  style={{
                    //backgroundImage: `url("${image}")`,
                    background: "black",
                  }}
                >
                  <div className="header-text text-center text-sm-center text-md-start text-lg-start">
                    <span className="category bg-primary-color text-white px-3 py-1 rounded mb-2">
                      Nuestros Cursos
                    </span>
                    <h2 className="text-white mt-4">
                      Innovación y automatización para un futuro eficiente
                    </h2>
                    <p className="text-white mt-3">
                      Únete a la revolución de la gestión de operaciones con
                      Integrah y lleva tu negocio al siguiente nivel.
                    </p>

                    <div className="buttons d-sm-flex flex-column flex-lg-row mt-5 align-items-center">
                      <div className="main-button">
                        <Link href="#" className="btn btn-primary-color">
                          Solicitar Asesoría
                        </Link>
                      </div>
                      <div className="icon-button">
                        <Link
                          href="#"
                          className="btn btn-outline-primary-color"
                        >
                          <i className="fa fa-play me-2"></i>¿Qué es
                          SOSLogic?
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 position-absolute buttons__banner-container">
                    <button
                      type="button"
                      role="presentation"
                      className="btn-banner me-1"
                    >
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="btn-banner"
                    >
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
