import React, { useState, useEffect } from "react";
import Link from "next/link";

const imagenes_banner = [
  {
    key: "1",
    name: "Banner 1",
    url: "/assets/banner/1.png",
  },
  {
    key: "2",
    name: "Banner 2",
    url: "/assets/banner/2.png",
  }, {
    key: "3",
    name: "Banner 3",
    url: "/assets/banner/3.png",
  }, {
    key: "4",
    name: "Banner 4",
    url: "/assets/banner/4.png",
  }, {
    key: "5",
    name: "Banner 5",
    url: "/assets/banner/5.png",
  },
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagenes_banner.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagenes_banner.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-banner  " id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel owl-banner fadeIn">
              <div
                className="item fadeIn"
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
                  backgroundImage: `url("${imagenes_banner[currentImageIndex].url}")`,
                }}
              >
                <div className="header-text text-center text-sm-center text-md-start text-lg-start">
                  <span className="category bg-primary-color text-white px-3 py-1 rounded mb-2">
                    Nuestros Productos
                  </span>
                  <h2 className="text-white mt-4">
                    ¡Bienvenido a Tolima Adventure!
                  </h2>
                  <p className="text-white mt-3">
                    Descubre tu próximo destino de ensueño con nosotros: ¡tu aventura comienza aquí!
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
                        ¿Qué es Tolima Adventure?
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 position-absolute buttons__banner-container">
                  <button
                    type="button"
                    role="presentation"
                    className="btn-banner me-1"
                    onClick={prevSlide}
                  >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                  </button>
                  <button

                    type="button"
                    role="presentation"
                    className="btn-banner"
                    onClick={nextSlide}
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
  );
};

export default Banner;
