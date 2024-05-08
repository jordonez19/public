import React, { useState } from "react";
import { Modal, Button, Divider } from "antd";
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
          <div className='d-flex align-items-center justify-content-center '>
            <p>
              <svg className='me-2' style={{ marginTop: -4 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
              +57 324 658 6418
            </p>
            <p className='mx-4'>
              <svg className='me-2' style={{ marginTop: -5 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path></svg>
              Cl. 36 #19-18, Bolívar, B/manga
            </p>
            <p>
              <svg className='me-2' style={{ marginTop: -4 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>
              contacto@soslogic.com
            </p>
          </div>
          <Divider />
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
