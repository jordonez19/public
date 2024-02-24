/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <div className="icon">
                <img
                  src="assets/images/service-01.png"
                  alt="gestión de operaciones"
                />
              </div>
              <div className="main-content">
                <h4>Operaciones</h4>
                <p>
                  Simplifica la gestión de operaciones de tu negocio con nuestra
                  plataforma intuitiva...{/*  y efectiva */}
                </p>
                <div className="main-button">
                  <a href="#">Leer Más</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <div className="icon">
                <img
                  src="assets/images/service-02.png"
                  alt="toma de decisiones"
                />
              </div>
              <div className="main-content">
                <h4>Toma de Decisiones</h4>
                <p>
                  Obtén una visión global de tu empresa y toma decisiones
                  basadas en datos en tiempo real.
                </p>
                <div className="main-button">
                  <a href="#">Leer Más</a>
                </div>
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
                <h4>Escalable</h4>
                <p>
                  Adapta nuestra plataforma a medida que tu negocio evoluciona,
                  garantizando... {/* un servicio ajustado a tus necesidades */}
                </p>
                <div className="main-button">
                  <a href="#">Leer Más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
