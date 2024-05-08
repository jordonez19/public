import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Divider, Spin } from "antd";

const Contactus = () => {
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [termsState, setTermsState] = useState(false);

  const handleTerms = () => {
    setTermsState(!termsState)
  }

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
  }

  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formSubmitUrl = "https://formsubmit.co/info@tolimaadventure.com";

    try {
      const response = await axios.post(formSubmitUrl, data);

      if (response.status === 200) {
        setLoading(false)

        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarnos.",
        }).then(() => {
        });
      } else {
        console.error("Error al enviar el formulario:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error.message);
    }
  };

  return (
    <>
      <div className="contact-us section" id="contact">
       
        <div className="container">
          <div className="row">
            <div className="col-lg-6  align-self-center">
              <div className="section-heading">
                <h6>Contactanos</h6>
                <h2>Estamos Aquí Para Ayudarte No Dudes En Contactarnos En Cualquier Momento</h2>
                <p>
                  Nos dedicamos a optimizar tus procesos logísticos y ofrecerte soluciones digitales eficientes. No dudes en comunicarte con nosotros para obtener más información o asistencia.
                </p>

                <p >
                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="24" fill="rgba(173,184,194,1)"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>
                  +57 3116348717 <br />
                  {/*  */}
                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(173,184,194,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                  info@tolimaadventure.com
                  {/*  */}
                </p>
                <Link className="pulse" href={"https://web.facebook.com/TolimaAdventure/?_rdc=1&_rdr"}>
                  <svg className="pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="rgba(105,163,243,1)"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
                </Link>
                <Link className="pulse" href={"https://www.instagram.com/tolimaadventure/"}>
                  <svg className="pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="rgba(234,113,46,1)"><path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path></svg>
                </Link>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-content">
                <form id="contact-form" onSubmit={handleSubmit}>
                  {loading ? (
                    <div className="row text-center">
                      <div className="col-lg-12">
                        <fieldset>
                          <Spin />
                        </fieldset>
                      </div>
                    </div>

                  ) :
                    (<div className="row">
                      <div className="col-lg-12">
                        <fieldset>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            placeholder="Nombre..."
                            autoComplete="on"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            placeholder="Correo..."
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <input
                            type="tel" // Campo de teléfono
                            name="phone"
                            id="phone"
                            onChange={handleChange}
                            placeholder="Teléfono..."
                            required
                          />
                        </fieldset>
                      </div>


                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            id="message"
                            onChange={handleChange}
                            placeholder="Mensaje..."
                            required
                          ></textarea>
                        </fieldset>
                      </div>

                      <div className="d-flex justify-content-start align-items-center w-100">
                        <input onchange={handleChange} type="checkbox" required="required" id="terms" name="terms" value="Firma electronica"
                          className="check_terms" />
                        <p className="text-light">Firma electronica </p>
                      </div>
                      <div className="d-flex justify-content-start align-items-center w-100">
                        <input onchange={handleChange} type="checkbox" required="required" id="terms" name="terms" value="Gestion de carga"
                          className="check_terms" />
                        <p className="text-light">Gestion de carga </p>
                      </div>
                      <div className="d-flex justify-content-start align-items-center w-100">
                        <input onchange={handleChange} type="checkbox" required="required" id="terms" name="terms" value="Chat para empresas"
                          className="check_terms" />
                        <p className="text-light">Chat para empresas </p>
                      </div>

                      <Divider />

                      <div className="d-flex justify-content-center align-items-center w-100">
                        <input onClick={handleTerms} type="checkbox" required="required" id="terms" name="terms" value="Bike" className="check_terms" />
                        <p className="text-light">Estoy de acuerdo con la politica de privacidad, terminos y condiciones </p>
                      </div>
                      {termsState && (
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"

                            >
                              Enviar Ahora
                            </button>
                          </fieldset>
                        </div>
                      )}

                    </div>)
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
