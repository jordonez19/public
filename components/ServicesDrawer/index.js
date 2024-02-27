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
          <h2>Políticas de servicio</h2>
          <p>
            Tolima Adventure AV está sujeta al régimen de responsabilidad que establece la ley <b>2068/2020, Ley 300/1996</b>, decretos reglamentarios <b>1075/1997, 502/1997 </b>y<b> 2438/2010</b> y las normas que los modifiquen, adicionen o reformen.
            La responsabilidad Tolima Adventure AV como organizador del plan o paquete turístico se limita a los términos y condiciones del programa en relación con la prestación y calidad de los servicios.

            <br /><br /> <b>Equipaje y objetos personales</b>: Tolima Adventure AV no se responsabiliza por la pérdida, daño o robo de equipaje y objetos personales bajo ninguna circunstancia. El pasajero será el exclusivo responsable de la custodia de su equipaje, objetos personales y documentos de viaje, siempre vigilarlos y estar atentos a las recomendaciones generales que hacen en aeropuertos, terminales, sitios públicos y demás lugares que visiten. Tolima Adventure  AV, podrá orientar al pasajero en los eventos de extravío de su equipaje o documentos de viaje, sin embargo, en ninguna circunstancia, responderá por el extravío, daño, deterioro o pérdida de dichos elementos.

            <br /><br /> <b>Cancelaciones y cambios hechos por el cliente</b>: Antes de confirmar su reservación, el cliente puede realizar los cambios que desee sin ningún costo extra (salvo que las condiciones de alojamiento y prestación de servicios varíen). En el caso de cambiar después de confirmada y pagada su reserva, Tolima Adventure AV evaluará los valores adicionales a pagar por esos cambios y los comunicará antes de iniciar el viaje. Si hay cancelaciones, estas se reciben 36 horas antes de comenzar el tour y tendrán el valor total de reembolso en este periodo. Si el tour es cancelado con menos tiempo, no será reembolsable. En caso de no presentarse al tour, el valor del mismo será cargado sin ninguna devolución, reembolso o re-agendamiento del tour.
            Para cancelar cualquier servicio, por favor contacte a su representante de viajes a través del correo: <b>comercial@tolimaadventure.com</b>

            <br /><br /> <b>Cancelación por Tolima Adventure AV</b>: Podemos cancelar un viaje en cualquier momento antes de la salida si, debido a circunstancias impredecibles como desastres naturales, inestabilidad política u otros eventos externos que hacen que no sea viable para nosotros operar el itinerario planificado o tienen un efecto directo sobre su seguridad personal. Si cancelamos un viaje, puede elegir entre aplicar los montos pagados a un viaje alternativo o recibir un reembolso completo descontando los cargos administrativos. No somos responsables de ningún gasto incidental en el que pueda haber incurrido como resultado de su reserva, como visas, vacunas o vuelos no reembolsables.
            La agencia no asume responsabilidad frente al usuario o viajero por eventos tales como accidentes, huelgas, asonadas, terremotos, fenómenos climáticos o naturales, condiciones de seguridad, factores políticos, negación de permisos de ingreso o visados, asuntos legales del viajero, asuntos de salubridad y cualquier otro caso de fuerza mayor o caso fortuito que pudiere ocurrir antes o durante el viaje.
            <br /><br /> <b>Cambio de itinerario</b>: Tolima Adventure AV se esfuerza en operar todos los viajes y recorridos como se describe, y nos reservamos el derecho de cambiar el itinerario del viaje por causas externas que escapan a nuestro control y pueden poner en riesgo su seguridad durante su viaje.
            <br /><br /> <b>Antes de la salida</b>: si hacemos un cambio importante, le informaremos tan pronto como sea razonablemente posible si hay tiempo antes de la salida. La definición de un cambio importante se considera como un cambio que afecta el itinerario. Cuando se realiza un cambio importante, puede elegir entre aceptando el cambio, o aceptando un recorrido alternativo ofrecido, o un ajuste de precio a su precio cotizado.
            <br /><br /> <b>Después de la salida</b>: Nos reservamos el derecho de cambiar un itinerario después de la salida debido a circunstancias locales o eventos fuera de nuestro control. En tales circunstancias de emergencia, usted cubrirá el costo adicional de cualquier modificación necesaria del itinerario.

            <br /><br /> <b>Políticas de reembolso</b>: Las políticas de reembolso de los servicios no prestados en razón a situaciones de fuerza mayor o caso fortuito, acción u omisión de terceros o del pasajero, no atribuibles a Tolima Adventure AV, antes o durante el viaje, que puedan ser objeto de devolución, serán definidas por cada operador y las mismas serán confirmadas al usuario una vez se reserven y expidan los documentos de viaje, así como los porcentajes de penalidades o deducciones a que hubiere lugar.
            Tolima Adventure AV, no es responsable solidario por las sumas solicitadas en reembolso.
            Los reembolsos a que hubiere lugar, se realizarán dentro de los 10 días calendarios siguientes a la solicitud y este se verá reflejado en el medio de pago que el cliente elija. No obstante en caso que el trámite tome más tiempo por causas ajenas a Tolima Adventure AV, ésta no reconocerá ningún interés sobre las sumas a reembolsar.
            El porcentaje de reembolso dependerá de las condiciones del proveedor y de los gastos de administración de la agencia causados.

            Reservas aéreas: Ninguno de nuestros tours o recorridos incluye tiquetes aéreos. La tarifa aérea que suministramos en las cotizaciones y que sean solicitadas por el cliente, son valores aproximados. El valor total del tiquete deberá ser pagado el 100%  adelantado y no es reembolsable. En el caso de cambios de su vuelo, aplican las penalidades y costos extra que cobre la aerolínea. Tolima Adventure AV no asume ninguna responsabilidad frente al usuario por el servicio de transporte aéreo, salvo que se trate de vuelo fletado y de acuerdo con las condiciones del contrato de transporte.

          </p>
        </div>
      </Drawer>
    </>
  );
};

export default ServicesDrawer;
