import React, { useState } from "react";
import { Modal, Button } from "antd";
import Link from "next/link";
import PoliciesDrawer from "../PoliciesDrawer";
import ServicesDrawer from "../ServicesDrawer";
import PrivacyDrawer from "../PrivacyDrawer";

const Footer = () => {
  const [conditionsModalVisible, setConditionsModalVisible] = useState(false);

  const showConditionsModal = () => {
    setConditionsModalVisible(true);
  };

  const handleConditionsModalCancel = () => {
    setConditionsModalVisible(false);
  };

  const [servicesModalVisible, setServicesModalVisible] = useState(false);

  const showservicesModal = () => {
    setServicesModalVisible(true);
  };

  const handleservicesModalCancel = () => {
    setServicesModalVisible(false);
  };


  const [privacidadModalVisible, setPrivacidadModalVisible] = useState(false);

  const showprivacidadModal = () => {
    setPrivacidadModalVisible(true);
  };

  const handleprivacidadModalCancel = () => {
    setPrivacidadModalVisible(false);
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center">
              <p>Politicas de: </p>
              <p className="ms-2" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={showConditionsModal}> Sostenibilidad, </p>
              <p className="mx-2" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={showprivacidadModal}>Privacidad </p>
              <p>y  </p>
              <p className="ms-2" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={showservicesModal}> Servicios</p>
            </div>
            <p>
              Copyright © 2023 todos los derechos reservados. &nbsp;&nbsp;&nbsp; <img width={200} src="/sos_soslogic_white.png" />
            </p>
          </div>
        </div>
      </footer>

      <PoliciesDrawer
        onClose={handleConditionsModalCancel}
        open={conditionsModalVisible}
      />

      <ServicesDrawer
        onClose={handleservicesModalCancel}
        open={servicesModalVisible}
      />

      <PrivacyDrawer
        onClose={handleprivacidadModalCancel}
        open={privacidadModalVisible}
      />

    </>
  );
};

export default Footer;
