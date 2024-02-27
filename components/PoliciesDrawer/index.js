import React, { useState } from "react";
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
        <div style={{ flex: 1, overflowY: "auto" }}>
          <p>
            <h2>POLÍTICA DE SOSTENIBILIDAD:</h2>
            Para Tolima adventure es muy importante que nuestras acciones hoy
            impacten positivamente a las generaciones futuras, por eso hemos
            establecido una Política de Sostenibilidad que deja en claro la
            finalidad de estar comprometidos a realizar un turismo sostenible
            mediante la operación de productos con un enfoque de sostenibilidad
            ambiental, sociocultural y económica con unas buenas prácticas en la
            operación, de una manera segura y respetuosa de acuerdo con la
            legislación y regulaciones pertinentes. Ejemplo de estas acciones
            son:
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
                Motivar y capacitar a nuestros colaboradores con acciones
                formativas y de concientización sobre los principios de
                sostenibilidad, la salvaguarda de patrimonio y buenas prácticas
                de turismo.
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
                Realizar convocatorias para las comunidades donde se generan
                oportunidades de empleo al interior de la Tolima Adventure.
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
                Trabajar con proveedores que promuevan las buenas prácticas para
                el desarrollo del turismo sostenible.
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
                Buscar mantener condiciones de empleo directo, en condiciones
                justas y equitativas.
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
                Promover el cumplimiento de las normas de seguridad a los
                proveedores en la prestación del servicio.
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
                Promover el uso de bienes y servicios producidos por comunidades
                locales en los destinos donde funciona la operación.
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
                Contratar personas con discapacidad en la cadena de valor.
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
                Cómo mínimo el 80% de lo que paga Un viajero se queda en manos
                de nuestros anfitriones.
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
                Inclusión de poblaciones vulnerables con prácticas de un turismo
                para todos.
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
                Establecer un código de conducta o comportamiento para los
                viajeros con el fin de minimizar los impactos de la visita a los
                destinos.
              </li>
            </ul>
            <p>
              {" "}
              Con la divulgación de esta política, Tolima Adventure insta a sus
              colaboradores, proveedores, colegas y participantes en la cadena
              de valor de la industria turística a hacer explícito su compromiso
              en el desarrollo sostenible.
            </p>
            <h2>HUELLA DE CARBONO:</h2>
            <h3>Compensamos la huella de carbono de los viajes:</h3>
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
                Operando destinos cercanos y conectado los atractivos con medios
                de transporte eco amigables
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
                Minimizando el uso de botellas de plástico usando botellas de
                vidrio y sistemas especiales de filtración para evitar el uso de
                botellas de plástico
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
                Nuestros viajeros reciben termos de agua reutilizables para usar
                durante actividades y caminatas
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
                Promoviendo en los proveedores el uso de artículos de aseo
                personal biodegradables en lugar de las amenidades de plástico
                de un solo uso
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
                Realizando campaña de oxigenación y limpieza de los atractivos.
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
                Respetando la capacidad de carga de los lugares que visitamos
              </li>
            </ul>
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default PoliciesDrawer;