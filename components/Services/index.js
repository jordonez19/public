/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services = () => {
  return (
    <>
    
      <div className="services section" id="services">

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="assets/images/service-02.png"
                    alt="gestión de operaciones"
                  />
                </div>
                <div className="main-content">
                  <h4>Paquetes Turísticos</h4>
                  <p>
                    Descubre una variedad de paquetes turísticos diseñados para
                    satisfacer tus deseos de aventura, relajación y exploración en
                    destinos emocionantes del Tolima.
                  </p>
                  {/* <div className="main-button">
                  <a href="#">Leer Más</a>
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="assets/images/service-01.png"
                    alt="toma de decisiones"
                  />
                </div>
                <div className="main-content">
                  <h4>Experiencias Únicas</h4>
                  <p>
                    Sumérgete en experiencias únicas que te permitirán explorar la
                    cultura local, disfrutar de la gastronomía auténtica y
                    participar en actividades emocionantes.
                  </p>
                  {/* <div className="main-button">
                  <a href="#">Leer Más</a>
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="assets/images/service-03.png"
                    alt="escalable y personalizable"
                  />
                </div>
                <div className="main-content">
                  <h4>Asistencia Personalizada</h4>
                  <p>
                    Asistencia personalizada en cada paso de tu viaje,
                    desde la planificación hasta la ejecución brindandote apoyo en todo momento.
                  </p>
                  {/* <div className="main-button">
                  <a href="#">Leer Más</a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
