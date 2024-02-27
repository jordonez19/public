import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const Contactus = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    const formData = new FormData(event.target); // Obtiene los datos del formulario
    const formSubmitUrl = "https://formsubmit.co/comercial@tolimaadventure.com"; // URL de formSubmit

    try {
      // Envía los datos del formulario a formSubmit
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarnos.",
        }).then(() => {
          // Redirige a tolimaadventure.com después de cerrar la alerta
        });
      } else {
        // Maneja errores en el envío del formulario
        console.error("Error al enviar el formulario:", response.statusText);
      }
    } catch (error) {
      // Maneja errores de red o del lado del cliente
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
                <h2>No Dudes En Contactarnos En Cualquier Momento</h2>
                <p>
                  Gracias por elegir nuestros servicios turísticos. Ofrecemos las mejores experiencias de viaje a precios accesibles. Puedes apoyarnos compartiendo nuestro sitio web con tus amigos y familiares.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-content">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="name"
                          id="name"
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
                          placeholder="E-mail..."
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Mensaje..."
                          required
                        ></textarea>
                      </fieldset>
                    </div>
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
                  </div>
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
