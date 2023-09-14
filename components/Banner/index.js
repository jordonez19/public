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
                {/* <div className="item item-2">
                  <div className="header-text">
                    <span className="category">Best Result</span>
                    <h2>Get the best result out of your effort</h2>
                    <p>
                      You are allowed to use this template for any educational
                      or commercial purpose. You are not allowed to
                      re-distribute the template ZIP file on any other website.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <Link href="#">Request Demo</Link>
                      </div>
                      <div className="icon-button">
                        <Link href="#">
                          <i className="fa fa-play"></i> Whats the best result?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-3">
                  <div className="header-text">
                    <span className="category">Online Learning</span>
                    <h2>Online Learning helps you save the time</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temporious incididunt ut labore et dolore
                      magna aliqua suspendisse.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <Link href="#">Request Demo</Link>
                      </div>
                      <div className="icon-button">
                        <Link href="#">
                          <i className="fa fa-play"></i> Whats Online Course?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
