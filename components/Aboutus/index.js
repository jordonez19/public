import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div className="section about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-1">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>01</span> ¿Quiénes somos?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Nuestra herramienta tecnológica ha sido desarrollada
                      pensando en la simplicidad y facilidad de uso. No importa
                      cuál sea tu nivel de experiencia en tecnología, Integrah
                      te guiará de manera intuitiva a través de cada paso,
                      facilitando el proceso de gestión de tus operaciones.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      ¿Por qué elegirnos?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Ya sea que dirijas una pequeña empresa en crecimiento o
                      una corporación a gran escala, Integrah se adapta a tus
                      necesidades. Nuestra plataforma es escalable y
                      personalizable, lo que significa que podrás ajustarla y
                      adaptarla a medida que tu negocio evolucione.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Conclucion de la empresa
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      En Integrah, creemos en el poder de la tecnología para
                      transformar la forma en que operan las empresas. Nuestro
                      objetivo es proporcionarte una herramienta integral que
                      simplifique tus operaciones y te permita enfocarte en lo
                      que realmente importa: hacer crecer tu negocio.
                    </div>
                  </div>
                </div>

                {/* <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Conclucion de la empresa
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      En Integrah, creemos en el poder de la tecnología para
                      transformar la forma en que operan las empresas. Nuestro
                      objetivo es proporcionarte una herramienta integral que
                      simplifique tus operaciones y te permita enfocarte en lo
                      que realmente importa: hacer crecer tu negocio.
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="section-heading">
                <h6>Somos</h6>
                <h2>¿Por qué somos la mejor opción?</h2>
                <p>
                  Integrah es una herramienta tecnológica que simplifica la
                  gestión de operaciones al sincronizar múltiples módulos
                  funcionales en una plataforma intuitiva. Con Integrah, puedes
                  administrar tu información de manera efectiva y sin
                  complicaciones, optimizando cada aspecto de tu negocio.
                  Nuestra solución integral te brinda una visión global de tu
                  empresa y permite tomar decisiones basadas en tus datos a
                  tiempo real.
                </p>
                <div className="main-button">
                  <Link href="#">Descubre Mas</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
