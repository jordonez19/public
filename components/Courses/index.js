/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { Modal, Button, Row, Col } from "antd";

const Courses = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (experiencia) => {
    setModalData(experiencia);
  };

  const closeModal = () => {
    setModalData(null);
  };
  const eventos = [
    {
      imagen: "cuevaeden/cave.jpeg",
      categoria: "design",
      precio: "",
      autor: "Un viaje a la Colombia subterránea",
      titulo: "La cueva del Edén"
    },
    {
      imagen: "citytour/melgar.jpg",
      categoria: "development",
      precio: "",
      autor: "Una historia entre cordilleras y agua",
      titulo: "City Tour Melgar"
    },
    {
      imagen: "icononzo/1.jpg",
      categoria: "design wordpress",
      precio: "",
      autor: "Balcón del Tolima",
      titulo: "Icononzo"
    },
    {
      imagen: "bananitobaby/2.png",
      categoria: "development",
      precio: "",
      autor: "Con sabor a cordillera",
      titulo: "Bananito baby"
    },
    {
      imagen: "cascadas/1.jpg",
      categoria: "wordpress development",
      precio: "",
      autor: "Cascada Las Golondrinas",
      titulo: "Canyoning"
    }
  ];

  const experienciasTuristicas = [
    {
      nombre: "La cueva del Edén, un viaje a la Colombia subterránea",
      descripcion: "Bienvenidos a un viaje de conexión con la Colombia subterránea en la Cueva del Edén, un encuentro con una riqueza natural que por millones de años se ha estado formado bajo los verdes relieves montañosos de la cordillera oriental en una de las cuevas iconos de Tolima y Colombia. Después de visitar Cunday, realizaremos un recorrido en senderismo, nos sumergimos en la oscuridad y silencio totales, interrumpidos únicamente por la luz de las linternas y el ruido que hacen los pies  con cada paso que damos.En la  cueva del Edén conoceremos las historias que se esconden en sus bóvedas y ríos subterráneos, que son además el hogar de criaturas que viven en una noche eterna.",
      disponibilidad: "Todos los días",
      idiomas: ["SPN", "ENG"],
      duracion: "12 horas",
      horaSalida: "7:00 am",
      tamanoGrupo: "Máximo 10 personas",
      puntoSalida: "Parque deportivo y recreativo Las Vegas (Melgar)",
      imagen: "cuevaeden/cave.jpeg",
      incluye: [
        "Actividades: visita Basílica de la virgen del Carmen de Apicalá y parque Cunday, senderismo, espeleismo",
        "Transporte en vehículo especial de turismo desde Melgar hasta Cunday",
        "Desplazamiento en vehículos 4x4 hasta inicio de sendero",
        "Acompañamiento de Informador turístico y guía local baquiano al interior de la cueva",
        "Charla de inducción y equipo de seguridad",
        "Hidratación, desayuno, almuerzo",
        "Tarjeta de asistencia médica"
      ],
      recomendaciones: [
        "Lleva ropa para recambio",
        "Usar calzado cómodo para caminata",
        "Utiliza protector solar para evitar posibles quemaduras.",
        "Llevar morral",
        "Intenta llevar tu propio termo para el agua y evita el uso de botellas de plástico para ayudar al planeta."
      ]
    },
    {
      nombre: "City Tour Melgar, una historia entre cordilleras y agua",
      descripcion: "La experiencia es un recorrido en bus panorámico que nos permite viajar a través del tiempo para conocer los lugares, acontecimientos y personajes que dan forma al proceso de consolidación del principal destino turístico del Tolima, acompañado de historias que se entretejen con la riqueza cultural y que invitan a reinterpretar con nuevo espíritu la memoria e identidad de un territorio multifacético que emerge en medio de los verdes relieves montañosos de la cordillera oriental, rodeado de aguas bajo cielo azul donde se respiran seguridad y descanso.",
      disponibilidad: "Todos los días",
      idiomas: ["SPN", "ENG"],
      duracion: "2.5 horas",
      horaSalida: "9:00 am – 3:00 pm",
      tamanoGrupo: "Máximo 32 personas",
      puntoSalida: "Parque deportivo y recreativo Las Vegas (Melgar)",
      imagen: "citytour/melgar.jpg",
      incluye: [
        "Visita atractivos: Mirador la Cajita, Terminal de Transportes Melgar, Experiencia artesanal Togua, Parque Gustavo Rojas Pinilla y mirador Playa Alta.",
        "Transporte en vehículo especial de turismo",
        "Acompañamiento de Informador turístico",
        "Hidratación, refrigerio y souvenir",
        "Tarjeta de asistencia médica"
      ],
      recomendaciones: [
        "Lleva ropa Y calzado cómodo",
        "Utiliza protector solar para evitar posibles quemaduras.",
        "Intenta llevar tu propio termo para el agua y evita el uso de botellas de plástico para ayudar al planeta."
      ]
    },
    {
      nombre: "Icononzo, balcón del Tolima",
      descripcion: "Llamado el “Balcón del Oriente del Tolima” por la maravillosa vista que se tiene desde estas colinas y praderas, su belleza radica en la combinación del verde de su flora y fauna con los hermosos atardeceres que se pueden apreciar en todo su esplendor, haciendo de este destino el lugar perfecto si buscas tranquilidad y conexión con la naturaleza. En medio de paisajes llenos de historias y miradores perfectos para la fotografía, visitaremos entre muchas cosas una maravilla que en forma de puente parece suspendida en el aire en medio de los relieves montañosos cortados por el río Sumapaz, haremos un viaje por el mundo sin salir del museo de Henry Castillo y conoceremos la arquitectura y modo de vivir de la cultura tolimense en un pueblito viejo.",
      disponibilidad: "Todos los días",
      idiomas: ["SPN", "ENG"],
      duracion: "8 horas",
      horaSalida: "9:00 am",
      tamanoGrupo: "Máximo 32 personas",
      puntoSalida: "Parque deportivo y recreativo Las Vegas (Melgar)",
      imagen: "icononzo/1.jpg",
      incluye: [
        "Visita atractivos: Mirador alto de la Cruz, Museo Henry Castillo, Puente Natural de Pandi, Ecoglaxury, Pueblito viejo",
        "Transporte en vehículo especial de turismo",
        "Acompañamiento de Informador turístico",
        "Hidratación, almuerzo, refrigerio",
        "Tarjeta de asistencia médica"
      ],
      recomendaciones: [
        "Lleva ropa y calzado cómodo",
        "Utiliza protector solar para evitar posibles quemaduras.",
        "Intenta llevar tu propio termo para el agua y evita el uso de botellas de plástico para ayudar al planeta."
      ]
    },
    {
      nombre: "Bananito baby, con sabor a cordillera",
      descripcion: "Nuestra experiencia de agro turismo empieza cuando la mañana nos abre paso en medio de la cordillera por caminos interconectados que nos llevan a la vereda el Águila, un viaje en medio de potreros que relumbran con el color verde esmeralda de los pastos sabaneros de fincas dedicadas en otros tiempos a cultivos de café, que nos lleva a nuestro destino, la Finca san Andrés donde van surgiendo de manera espontánea los saludos de buenos días y las conversaciones de trato afable y cercano de sus propietarios. La Finca San Andrés es un predio familiar dedicado exclusivamente a la producción de bananito baby, que ha conservado el espíritu de los negocios hechos con el tesón de generaciones entregadas a la labranza con un propósito común, ofrecerles a los clientes los mejores productos agrícolas de la región con una producción limpia, sostenible y con buenas prácticas agrícolas para la exportación. Entere historias, actividades y una explosión de sabores y aromas conoceremos todo el proceso de producción de esta fruta que se posiciona a nivel mundial desde las montañas de Melgar.",
      disponibilidad: "Todos los días",
      idiomas: ["SPN", "ENG"],
      duracion: "8 horas",
      horaSalida: "5:00 am",
      tamanoGrupo: "Máximo 32 personas",
      puntoSalida: "Parque deportivo y recreativo Las Vegas (Melgar)",
      imagen: "bananitobaby/2.png",
      incluye: [
        "Recorrido agroturístico por la finca San Andrés",
        "Transporte en vehículo especial de turismo",
        "Acompañamiento de Informador turístico",
        "Hidratación, almuerzo, refrigerio",
        "Tarjeta de asistencia médica"
      ],
      recomendaciones: [
        "Lleva ropa y calzado cómodo",
        "Utiliza protector solar para evitar posibles quemaduras.",
        "Intenta llevar tu propio termo para el agua y evita el uso de botellas de plástico para ayudar al planeta."
      ]
    },
    {
      nombre: "Canyoning, cascada Las Golondrinas",
      descripcion: "El piedemonte de las montañas del Sumapaz se esconde cientos de maravillas naturales que hasta hoy día siguen desconocidas, entre ellas hay cascadas que rememoran las grandes epopeyas de los exploradores del pasado milenio y valles entre montañas que deslumbran a quienes los miran por primera vez, todo enmarcado en medio del inmenso paisaje del Boquerón. Para descubrir una de esas maravillas, la cascada de las Golondrina, nos desplazamos hasta el Eco Hotel El Reposo, allí los anfitriones nos esperan para dar inicio a un recorrido de senderismo durante el cual podrás avistar las aves y la amplia flora de los bosques andinos mientras nos internamos por un sendero estrecho cubierto de vegetación. Una vez en la cascada, podremos disfrutar de actividades como baño, hacer ascensos el cauce de agua dentro de un cañón rocoso; y sortearás toda clase de obstáculos como pozos y rocas para finalmente terminar con una actividad de torrentismo y retornar al punto de inicio.",
      disponibilidad: "Todos los días",
      idiomas: ["SPN", "ENG"],
      duracion: "3 horas",
      horaSalida: "5:00 am",
      tamanoGrupo: "Máximo 10 personas",
      imagen: "cascadas/1.jpg",
      incluye: [
        "Recorrido de senderismo, canyoning, torrentismo",
        "Transporte en vehículo especial de turismo",
        "Acompañamiento de instructor en deporte de aventura e Informador turístico",
        "Equipos de seguridad para actividades",
        "Hidratación, refrigerio",
        "Tarjeta de asistencia médica"
      ],
      recomendaciones: [
        "Lleva calzado cómodo para senderismo",
        "Llevar ropa de recambio",
        "Utiliza protector solar para evitar posibles quemaduras.",
        "Intenta llevar tu propio termo para el agua y evita el uso de botellas de plástico para ayudar al planeta."
      ]
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
            {experienciasTuristicas.map((experiencia, index) => (
              <div key={index} className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 ${experiencia.categoria}`}>
                <div className="events_item">
                  <div className="thumb">
                    <img style={{ width: '100%' }} src={eventos[index].imagen} alt="" />
                    {/* <span className="price">
                      <h6>
                        <em>$</em>{eventos[index].precio}
                      </h6>
                    </span> */}
                  </div>
                  <div className="down-content">
                    <span className="author">{eventos[index].autor}</span>
                    <h4>{eventos[index].titulo}</h4>
                    <div className="main-button">
                      <Button type="primary" danger onClick={() => openModal(experiencia)}>Leer Más</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        title={<h2>{modalData && modalData.nombre}</h2>}
        open={modalData !== null}
        width={900}
        onCancel={closeModal}
        footer={[
          <Button type="primary" danger key="back" onClick={closeModal}>
            Cerrar
          </Button>
        ]}
      >
        {modalData && (
          <>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <img
                  src={modalData.imagen}
                  alt={modalData.nombre}
                  className="logo_modal_course"
                />
              </Col>
              <Col xs={24} sm={12}>
                <p>{modalData.descripcion}</p>
              </Col>
            </Row>
            <h4 className="text-primary-color">Detalles:</h4>
            <ul>
              <li><strong className="text-third-color">Disponibilidad:</strong> {modalData.disponibilidad}</li>
              <li><strong className="text-third-color">Idiomas:</strong> {modalData.idiomas.join(', ')}</li>
              <li><strong className="text-third-color">Duración:</strong> {modalData.duracion}</li>
              <li><strong className="text-third-color">Hora de salida:</strong> {modalData.horaSalida}</li>
              <li><strong className="text-third-color">Tamaño del grupo:</strong> {modalData.tamanoGrupo}</li>
              <li><strong className="text-third-color">Punto de salida:</strong> {modalData.puntoSalida}</li>
            </ul>
            <h4 className="text-primary-color">Incluye:</h4>
            <ul>
              {modalData.incluye.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4 className="text-primary-color">Recomendaciones:</h4>
            <ul>
              {modalData.recomendaciones.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Courses;