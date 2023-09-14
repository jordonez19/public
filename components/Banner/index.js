import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-banner">
                <div className="item item-1">
                  <div className="header-text">
                    <span className="category">Nuestros Cursos</span>
                    <h2>Con Profesores Académicos, Todo Es Más Fácil</h2>
                    <p>
                     Nuestros cursos de derecho proporcionan una formación sólida en las diversas áreas legales, equipando a los estudiantes con las habilidades necesarias para destacar en el campo legal.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <Link href="#">Solicitar Accesoria</Link>
                      </div>
                      <div className="icon-button">
                        <Link href="#">
                          <i className="fa fa-play"></i> ¿Qué es Novakademia?
                        </Link>
                      </div>
                    </div>
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
