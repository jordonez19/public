/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* import Image from "next/image"; */
import React from "react";

const Services = () => {
  return (
    <>

      <div className="services section" id="services">
        <h2 className="section-title-services  p-0">
          CARACTERÍSTICAS QUE HACEN A <br />
         {/*  <Image
            width={245} height={52} style={{ marginTop: -6 }} src="/soslogic.png" /> */} INCREÍBLE
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon" style={{ background: '#5044EB' }}>
                {/*   <Image
                    width={200} height={60}
                    src="/alza.png"

                    alt="gestión de operaciones"
                  /> */}
                </div>
                <div className="main-content">
                  <h4>Más Económico</h4>
                  <p>
                    Planes anuales o mensuales que se ajustan a tu crecimiento, nunca pagues extra.
                  </p>
                  {/* <div className="main-button">
                  <a href="#">Leer Más</a>
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon" style={{ background: '#66D5EC' }}>
                 {/*  <Image
                    width={200} height={110}
                    src="/enchufe.png"
                    alt="toma de decisiones"
                  /> */}
                </div>
                <div className="main-content">
                  <h4>Sin instalaciones
                  </h4>
                  <p>
                    Un navegador web y una conexión a internet es todo lo que necesitas para operar tu centro de contacto.
                  </p>
                  {/* <div className="main-button">
                  <a href="#">Leer Más</a>
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon" style={{ background: '#5044EB' }}>
                  {/* <Image
                    width={200} height={75}
                    src="/chip.png"
                    alt="escalable y personalizable"
                  /> */}
                </div>
                <div className="main-content">
                  <h4>Sin hardware</h4>
                  <p>
                    No tendrás que invertir en hardware ni instalar software adicional; funciona desde la nube.
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
