import React from "react";
import { Button, Drawer, Space } from "antd";

const PoliciesDrawer = ({ onClose, open }) => {
  return (
    <>
      <Drawer
        placement="bottom"
        height="100%"
        onClose={onClose}
        open={open}
        destroyOnClose={true}
        style={{ display: "flex", flexDirection: "column", overflow: "auto" }}
        extra={
          <Space>
            <Button type="primary" danger className="button" onClick={onClose}>
              Cerrar
            </Button>
          </Space>
        }
      >
        <div style={{ flex: 1, overflowY: "auto" }} className="content container">
          <p>
            <h2 className="text-primary-color">POLÍTICA DE SOSTENIBILIDAD DE SOSLOGIC:</h2>
            En SOSLogic, creemos en el poder transformador de la tecnología para construir un futuro sostenible y equitativo. Nuestra Política de Sostenibilidad refleja nuestro compromiso con la innovación responsable y el cuidado del medio ambiente. Algunas de nuestras acciones incluyen:
            <ul className="dot-li">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Desarrollar tecnologías innovadoras que promuevan la eficiencia energética y la reducción de emisiones de carbono.
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Fomentar un entorno de trabajo inclusivo y diverso, donde se valoren las habilidades de cada individuo, independientemente de su origen o identidad.
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Implementar prácticas de gestión de residuos electrónicos responsables, incluido el reciclaje y la reutilización de equipos informáticos.
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Colaborar con proveedores comprometidos con prácticas éticas y sostenibles en la cadena de suministro de tecnología.
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Apoyar iniciativas comunitarias que promuevan la alfabetización digital y el acceso equitativo a la tecnología.
              </li>
            </ul>
            <p>
              Con esta política, en SOSLogic nos comprometemos a liderar con el ejemplo y a trabajar en colaboración con nuestros empleados, clientes y socios para hacer del mundo un lugar mejor mediante la tecnología.
            </p>
            <h2 className="text-primary-color">REDUCCIÓN DE LA HUELLA DE CARBONO:</h2>
            <h3 className="text-primary-color">Nuestro compromiso con un futuro más limpio:</h3>
            <ul className="dot-li">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Fomentando el trabajo remoto y la virtualización de eventos para reducir la necesidad de viajes y la huella de carbono asociada.
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Implementando prácticas de gestión energética en nuestras instalaciones, incluida la adopción de fuentes de energía renovable siempre que sea posible.
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Promoviendo la conciencia ambiental entre nuestros empleados y clientes, incentivando prácticas sostenibles en su vida diaria.
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="mr-2"
                >
                  <path
                    d="M16 12L10 18V6L16 12Z"
                    fill="rgba(157,2,42,1)"
                  ></path>
                </svg>
                Compensando nuestras emisiones de carbono mediante la participación en proyectos de reforestación y conservación del medio ambiente.
              </li>
            </ul>
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default PoliciesDrawer;
