import React from "react";
import { Button, Drawer, Space } from "antd";

const ServicesDrawer = ({ onClose, open }) => {
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
        <div style={{ flex: 1, overflowY: "auto" }} className="container content">
          <h2 className="text-primary-color">Políticas de servicio de SOSLogic</h2>
          <p>
            En SOSLogic, nos comprometemos a brindar servicios tecnológicos de calidad, siempre cumpliendo con las regulaciones y estándares más exigentes. A continuación, detallamos nuestras políticas de servicio:
            <ul className="dot-li">
              <li>
                <b className="text-primary-color">Responsabilidad legal:</b> SOSLogic se compromete a cumplir con todas las leyes y regulaciones pertinentes en el desarrollo y prestación de nuestros servicios, incluyendo las normativas relacionadas con la protección de datos y la seguridad informática.
              </li>
              <li>
                <b className="text-primary-color">Seguridad de datos:</b> Garantizamos la seguridad y confidencialidad de la información de nuestros clientes, implementando medidas técnicas y organizativas para proteger sus datos contra accesos no autorizados o cualquier forma de procesamiento ilícito.
              </li>
              <li>
                <b className="text-primary-color">Calidad del servicio:</b> Nos esforzamos por ofrecer servicios tecnológicos de alta calidad, cumpliendo con los estándares de rendimiento y fiabilidad más exigentes en la industria.
              </li>
              <li>
                <b className="text-primary-color">Atención al cliente:</b> Nuestro equipo está dedicado a brindar un servicio de atención al cliente excepcional, respondiendo de manera oportuna y efectiva a todas las consultas y solicitudes de nuestros clientes.
              </li>
            </ul>
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default ServicesDrawer;
