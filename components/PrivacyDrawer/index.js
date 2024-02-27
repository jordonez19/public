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
          <h2>Políticas de Privacidad</h2>
          <p>
            <br /><br /> Tolima Adventure AV se compromete a proteger la privacidad de nuestros visitantes del sitio. Cuando usted nos proporciona información personal, nosotros protegemos la privacidad y confidencialidad de su información. El objetivo de nuestro sitio web es recoger y utilizar sólo la información que consideramos necesaria para nuestros intereses comerciales legítimos. Cuando se navega a través de este sitio, lo hace de forma anónima.
            <br /><br /> Tolima Adventure AV recopila información personal limitada sobre sobre sus clientes mediante el envío de un correo electrónico, ya sea a través del software de correo electrónico del cliente o mediante el formulario de “Contacto” en el sitio. Toda información enviada por correo electrónico, recogerá la dirección de correo electrónico y el contenido de su mensaje. Esto incluye los caracteres de texto y cualquier audio, vídeo y formatos de información gráfica incluida en el mensaje. Esa dirección de correo electrónico y la información incluida en el mensaje serán utilizadas para responder al cliente, para hacer frente a los problemas que identifica, para mejorar este sitio, o para enviar el mensaje a la unidad de Tolima Adventure AV apropiado para una respuesta. También permite que podamos compartir su información personal con los aliados de Tolima Adventure AV que se han contratado para proveer servicios para nosotros (nuestros proveedores están obligados por contrato a utilizar la información personal que compartimos con ellos sólo para realizar los servicios que han sido contratados para ofrecer). La dirección de correo electrónico no será utilizada con fines comerciales, y Tolima Adventure AV no va a vender o distribuir su dirección de correo electrónico a terceros. Cualquier información personal que sea proporcionada a Tolima Adventure AV será retenida por nosotros de acuerdo con la norma de nuestras políticas corporativas. Vamos a revelar información acerca de usted si usted nos pide hacer, si estamos obligados por ley a hacerlo, o en otras circunstancias legalmente limitadas (por ejemplo, para proteger su cuenta de fraude).
            <br /><br /> Cookies: Este sitio hace uso de cookies, que son piezas de información transferidas desde el navegador al ordenador y almacenados para los registros de mantenimiento. Saber cómo un visitante del sitio está utilizando el sitio web a través de cookies nos permite adaptar nuestro contenido y servicios para satisfacer más eficazmente las necesidades de los visitantes. También nos permite mejorar la calidad de su visita, asegurándose de que el sitio tiene el formato correcto para su computadora y navegador web.
            <br /><br /> Tolima Adventure AV utiliza medidas de seguridad estándar para proteger la información bajo nuestro control, incluyendo firewalls y otras medidas de seguridad. Sin embargo, con los riesgos inherentes de la Internet no se puede garantizar la protección de su información de la pérdida, mal uso o alteración. Los procedimientos de seguridad se integraron en el diseño de las operaciones, la implementación y el día a día de este sitio como parte de nuestro compromiso continuo con la seguridad de contenido electrónico, así como la transmisión electrónica de la información.
            <br /><br /> Tolima Adventure AV limita el acceso de los colaboradores a la información personal recopilada a través de este sitio web, y para aquellos colaboradores que necesitan acceder a la información para llevar a cabo sus funciones oficiales, se siguen los procedimientos adecuados para proteger dicha información de cualquier revelación no autorizada.
            <br /><br /> Este sitio es un sitio de audiencia general y está diseñado para ser utilizado por adultos y adolescentes interesados en los productos de Tolima Adventure AV. No está destinado a los niños, y nuestra organización no desea recopilar cualquier información personal de usuarios menores de 13 años de edad. Tolima Adventure AV no recopila información personal de niños intencionalmente o crear perfiles de los niños a través del sitio. Sin embargo, toda la información personal enviada por correo electrónico será tratada como si hubieran sido presentadas por un adulto.
            <br /><br /> Este sitio web puede contener enlaces a sitios de terceros. A menos que usted esté proporcionando información de empleo para proveedores de terceros de Tolima Adventure AV, no es responsable de la recopilación de información personal o la seguridad o privacidad de tal información en sitios de terceros.
            <br /><br /> Tampoco somos responsables de la recogida, las políticas y las prácticas (incluidas las prácticas de seguridad de datos) de otras organizaciones, tales como Facebook, Instagram, WhatsApp, Apple, Google, Microsoft, RIM, o cualquier otro desarrollador de aplicaciones, proveedor de aplicaciones, proveedor de la plataforma medios de comunicación social, proveedor del sistema operativo, proveedor de servicios inalámbricos o el fabricante del dispositivo, incluyendo cualquier información personal que usted divulga a otras organizaciones a través de o en conexión con nuestras páginas de medios sociales, sitios móviles, aplicaciones, widgets y otros recursos móviles interactivos.
            <br /><br /> El desarrollo de las políticas y procedimientos de Tolima Adventure AV para la protección de la información personal es un proceso continuo. Debido a los cambios en la tecnología y los requisitos legales podemos revisar la política de privacidad de este sitio de vez en cuando. Le sugerimos que marque esta página para que pueda comprobar periódicamente para ver si se han realizado cambios. La Política de se actualizó por última vez el 06 de junio de 2022.
            <br /><br /> Si tiene alguna pregunta sobre esta declaración o el manejo de la información personal, por favor entrar en contacto con nosotros por correo electrónico: <b>info@tolimaadventure.com</b>

          </p>
        </div>
      </Drawer>
    </>
  );
};

export default PrivacyDrawer;
