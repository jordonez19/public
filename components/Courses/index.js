/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import Link from "next/link";


const Courses = () => {
  // Definir el objeto con la información de las tarjetas
  const cardsData = [
    {
      image: "box_icon.png",
      title: 'Gestión de carga',
      points: [
        "Métricas en tiempo real",
        "Inspección de vehículos y otros",
        "Radicación de documentos ante el RNDC.",
        "Control de anticipos y gastos de viaje",
        "Cumplidos virtuales",
        "Control de porcentajes de anulaciones ante el RNDC en tiempo real.",
        "Implementación de prácticas sostenibles para reducir el impacto ambiental de las operaciones de carga."
      ],
      link: "#contact",
      buttonText: "Más información"
    },
    {
      image: "sign_icon.png",
      title: 'Firma electrónica',
      points: [
        "Digitalización de documentos",
        "Firma simple y con reconocimiento facial",
        "Notificación vía correo electrónico o WhatsApp",
        "Trazabilidad y seguimiento del proceso de firma",
        "Respaldo y accesibilidad a la información 24/7",
        "Confidencialidad de la información",
        "Reducción de gastos en papelería y mensajería",
        "Protección del medio ambiente."
      ],
      link: "#contact",
      buttonText: "Más información"
    },
    {
      image: "chat_icon.png",
      title: 'Chat para Empresas',
      points: [
        "Atención al cliente",
        "Resolución de consultas e inquietudes de forma inmediata",
        "Interacción personalizada y amigable con los usuarios",
        "Notificaciones automáticas para seguimiento de conversaciones",
        "Registro y archivo de historial de conversaciones para referencia futura y mejora de la atención al cliente",
        "Soporte multicanal para llegar a los usuarios en cualquier momento y lugar",
      ],
      link: "#contact",
      buttonText: "Más información"
    },
    {
      image: "box_icon.png",
      title: 'Gestión de carga',
      points: [
        "Métricas en tiempo real",
        "Inspección de vehículos y otros",
        "Radicación de documentos ante el RNDC.",
        "Control de anticipos y gastos de viaje",
        "Cumplidos virtuales",
        "Control de porcentajes de anulaciones ante el RNDC en tiempo real.",
        "Implementación de prácticas sostenibles para reducir el impacto ambiental de las operaciones de carga."
      ],
      link: "#contact",
      buttonText: "Más información"
    },
    {
      image: "sign_icon.png",
      title: 'Firma electrónica',
      points: [
        "Digitalización de documentos",
        "Firma simple y con reconocimiento facial",
        "Notificación vía correo electrónico o WhatsApp",
        "Trazabilidad y seguimiento del proceso de firma",
        "Respaldo y accesibilidad a la información 24/7",
        "Confidencialidad de la información",
        "Reducción de gastos en papelería y mensajería",
        "Protección del medio ambiente."
      ],
      link: "#contact",
      buttonText: "Más información"
    },
    {
      image: "chat_icon.png",
      title: 'Chat para Empresas',
      points: [
        "Atención al cliente",
        "Resolución de consultas e inquietudes de forma inmediata",
        "Interacción personalizada y amigable con los usuarios",
        "Notificaciones automáticas para seguimiento de conversaciones",
        "Registro y archivo de historial de conversaciones para referencia futura y mejora de la atención al cliente",
        "Soporte multicanal para llegar a los usuarios en cualquier momento y lugar",
      ],
      link: "#contact",
      buttonText: "Más información"
    },
  ];


  return (
    <div className="py-5 mb-5">
      <section className="section courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Nuestros Servicios</h6>
                <h2>Nuestros Servicios</h2>
              </div>
              <Swiper
                spaceBetween={30}
                loop={true}
                freeMode={true}
                grabCursor={true}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {/* Utiliza map para generar dinámicamente las tarjetas */}
                {cardsData.map((card, index) => (
                  <SwiperSlide key={index} className="p-4 my-3 text-start d-flex flex-column justify-content-between ">
                    <div>
                      <img
                        style={{
                          border: '1px solid #cfcef3',
                          padding: 30,
                          borderRadius: 150,
                          transform: 'rotate(-10deg)',
                          transition: 'transform 0.3s',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'rotate(-20deg)';
                          e.target.style.padding = '25px';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.padding = '30px';
                          e.target.style.transform = 'rotate(-10deg)';
                        }}
                        width={130}
                        src={card.image}
                        alt="Avatar"
                        className=" mb-5"
                      />
                    </div>
                    <div style={{ minHeight: 380 }}>
                      <h3>{card.title}</h3>
                      <ul className="me-3 mb-4 ml-4 mb-5" style={{ fontFamily: 'Segoi UI' }}>
                        {/* Utiliza map para generar dinámicamente los puntos */}
                        {card.points.map((point, idx) => (
                          <li style={{ textDecoration: 'dots' }} key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        display: 'inline-block',
                        transition: 'transform 0.3s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <Link className="text-primary-color fw-bold text-decoration-none" href={'#contact'}>
                        {card.buttonText} <ArrowRightOutlined />
                      </Link>
                    </div>


                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
