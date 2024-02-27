/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Courses = () => {

  const eventos = [
    {
      imagen: "cuevaeden/cave.jpeg",
      categoria: "design",
      precio: "160",
      autor: "Un viaje a la Colombia subterránea",
      titulo: "La cueva del Edén"
    },
    {
      imagen: "citytour/melgar.jpg",
      categoria: "development",
      precio: "340",
      autor: "Una historia entre cordilleras y agua",
      titulo: "City Tour Melgar"
    },
    {
      imagen: "icononzo/1.jpg",
      categoria: "design wordpress",
      precio: "640",
      autor: "Balcón del Tolima",
      titulo: "Icononzo"
    },
    {
      imagen: "bananitobaby/2.png",
      categoria: "development",
      precio: "450",
      autor: "Con sabor a cordillera",
      titulo: "Bananito baby"
    },
    {
      imagen: "cascadas/1.jpg",
      categoria: "wordpress development",
      precio: "320",
      autor: "Cascada Las Golondrinas",
      titulo: "Canyoning"
    }
  ];

  return (
    <div>
      <section className="section courses" id="courses">
        <div className="text-center">
          <img
            src="logoHred.png"
            alt="logo-img"
            className="logo_preset"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Nuestros Productos</h6>
                <h2>Nuestros Productos</h2>
              </div>
            </div>
          </div>
          <div className="row event_box">
            {eventos.map((evento, index) => (
              <div key={index} className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 ${evento.categoria}`}>
                <div className="events_item">
                  <div className="thumb">
                    <img style={{ width: '100%' }} src={evento.imagen} alt="" />
                    <span className="price">
                      <h6>
                        <em>$</em>{evento.precio}
                      </h6>
                    </span>
                  </div>
                  <div className="down-content">
                    <span className="author">{evento.autor}</span>
                    <h4>{evento.titulo}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
