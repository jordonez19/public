import React from "react";
import { Button, Drawer, Space } from "antd";

const PrivacyDrawer = ({ onClose, open }) => {
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
          <h2 className="text-primary-color">Políticas de Privacidad de SOSLogic</h2>
          <p>
            En SOSLogic, valoramos la privacidad y seguridad de nuestros usuarios y clientes. A continuación, detallamos nuestras políticas de privacidad:
            <ul className="dot-li">
              <li>
                <b className="text-primary-color">Recopilación de información:</b> Recopilamos información personal limitada de nuestros usuarios y clientes con el fin de proporcionar nuestros servicios y mejorar su experiencia. Esta información se recopila de forma segura y se utiliza solo con fines comerciales legítimos.
              </li>
              <li>
                <b className="text-primary-color">Uso de la información:</b> La información personal recopilada se utiliza para responder a consultas de los usuarios, mejorar nuestros servicios y comunicarnos con los clientes sobre actualizaciones y ofertas relevantes. Nunca vendemos ni compartimos esta información con terceros para fines comerciales.
              </li>
              <li>
                <b className="text-primary-color">Seguridad de datos:</b> Implementamos medidas de seguridad estándar para proteger la información bajo nuestro control contra accesos no autorizados, pérdida o alteración. Sin embargo, debido a los riesgos inherentes de Internet, no podemos garantizar la protección absoluta de la información.
              </li>
              <li>
                <b className="text-primary-color">Cookies:</b> Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario y personalizar el contenido. Los usuarios pueden optar por desactivar las cookies en su navegador, pero esto puede afectar la funcionalidad del sitio.
              </li>
              <li>
                <b className="text-primary-color">Enlaces a terceros:</b> Nuestro sitio puede contener enlaces a sitios de terceros. No somos responsables de la recopilación de información personal o las políticas de privacidad de estos sitios. Se recomienda a los usuarios revisar las políticas de privacidad de los sitios de terceros antes de proporcionar información personal.
              </li>
            </ul>
            Para cualquier pregunta o inquietud relacionada con nuestra política de privacidad, contáctenos por correo electrónico: <b className="text-primary-color">info@soslogic.com</b>.
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default PrivacyDrawer;
