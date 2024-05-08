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
    <div className="main-banner" id="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel owl-banner fadeIn">
              <div
                className="item fadeIn p-0 p-md-5 mt-0 mt-md-5"
                
              >
                <div className="header-text text-center text-sm-center text-md-start text-lg-start">
                  {/* <span className="category bg-primary-color text-white px-3 py-1 rounded mb-2">
                    Nuestros Productos
                  </span> */}
                  <h2 className=" mt-4">
                    <span>Transforma</span> tu empresa con nuestra suite de <span>soluciones digitales</span>
                  </h2>
                  <p className=" mt-3">
                    soslogic ofrece a tu empresa el software necesario para mejorar la productividad en tu organización o institución.
                  </p>
                  <div className="buttons d-sm-flex flex-column flex-lg-row mt-5 align-items-center">
                    <Link href="#" className="mt-0 custom-button">
                      Contactar
                    </Link>
                    <Link href="#" className=" mx-2 mt-2 mt-md-0 custom-button_outline">
                      Mas información
                    </Link>
                  </div>
                </div>

                {/*   <div className="mt-4 position-absolute buttons__banner-container">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
