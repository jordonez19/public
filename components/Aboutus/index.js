import Link from "next/link";
import React, { useState } from "react";

const Aboutus = () => {
  const [collapseOne, setCollapseOne] = useState(true);
  const [collapseTwo, setCollapseTwo] = useState(false);

  const toggleCollapseOne = () => {
    setCollapseOne(!collapseOne);
    setCollapseTwo(false);
  };

  const toggleCollapseTwo = () => {
    setCollapseTwo(!collapseTwo);
    setCollapseOne(false);
  };

  return (
    <div>
      <div id="aboutus" className="section about-us">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-6 offset-lg-1">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button ${collapseOne ? '' : 'collapsed'}`}
                      type="button"
                      onClick={toggleCollapseOne}
                      aria-expanded={collapseOne}
                      aria-controls="collapseOne"
                    >
                      ¿Quiénes somos?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${collapseOne ? 'show' : ''}`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      En Tolima Adventure, nos consideramos más que una empresa de viajes. Somos apasionados por la conexión entre las personas y el mundo que las rodea. Creemos que viajar es una herramienta poderosa para el crecimiento personal y la comprensión global. Nuestro objetivo es crear experiencias extraordinarias que no solo te lleven a hermosos destinos, sino que también te sumerjan en la riqueza de su biodiversidad, cultura y tradiciones. Con anfitriones locales y un equipo comprometido, te ofrecemos la oportunidad de experimentar cada lugar de una manera auténtica y significativa.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={`accordion-button ${collapseTwo ? '' : 'collapsed'}`}
                      type="button"
                      onClick={toggleCollapseTwo}
                      aria-expanded={collapseTwo}
                      aria-controls="collapseTwo"
                    >
                      ¿Por qué elegirnos?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${collapseTwo ? 'show' : ''}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      En Tolima Adventure, nos esforzamos por ofrecer mucho más que simples vacaciones. Creemos en la importancia de crear un impacto positivo en los destinos que visitamos y en las vidas de las personas que encontramos en el camino. Al elegirnos, te garantizamos experiencias enriquecedoras, diseñadas para profundizar tu conexión con la naturaleza, la historia y las comunidades locales. Además, con nuestro compromiso con la sostenibilidad y el desarrollo económico de las regiones que exploramos, puedes viajar con la tranquilidad de saber que estás contribuyendo al bienestar de los lugares que visitas.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="section-heading">
                <h6>Somos</h6>
                <h2>¿Por qué somos la mejor opción?</h2>
                <p>
                  En Tolima Adventure, cada viaje es una oportunidad para descubrir, aprender y crecer. Únete a nosotros y experimenta el mundo de una manera totalmente nueva.
                </p>
                {/* <div className="main-button">
                  <Link href="#">Descubre Más</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
