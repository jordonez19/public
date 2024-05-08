/* eslint-disable @next/next/no-img-element */
/* import Image from "next/image"; */
import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="section testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="owl-carousel owl-testimonials">
                <div className="item">
                  <p>
                    Viajar es mucho más que visitar lugares nuevos; es sumergirse en culturas diferentes, explorar paisajes desconocidos y descubrir la belleza del mundo que nos rodea. Cada experiencia turística enriquece nuestra vida y nos brinda recuerdos inolvidables que perduran para siempre en nuestro corazón y en nuestra mente.                  </p>
                  <div className="author">
                   {/*  <Image width={200} height={110} src="/man.png" alt="" /> */}
                    <span className="category">Mauricio Gonzalez Castro</span>
                    <h4>Melgar</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="section-heading">
                <h6>TESTIMONIOS</h6>
                <h2>¿Qué dicen de nosotros?</h2>
                <p>
                  Que bueno es recordar momentos y oportunidades de conexión y aprendizaje.. Tolima Adventure Más que una Experiencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
