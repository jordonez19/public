import React, { useState } from "react";
import { Modal, Button } from "antd";
import Link from "next/link";
import PoliciesDrawer from "../PoliciesDrawer";

const Footer = () => {
  const [conditionsModalVisible, setConditionsModalVisible] = useState(false);

  const showConditionsModal = () => {
    setConditionsModalVisible(true);
  };

  const handleConditionsModalCancel = () => {
    setConditionsModalVisible(false);
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2023 todos los derechos reservados. &nbsp;&nbsp;&nbsp;
              <Link
                href="https://tolimaadventure.com"
                rel="nofollow"
                target="_blank"
              >
                Tolima Adventure
              </Link>
            </p>
            <p style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={showConditionsModal}>Servicios y Condiciones</p>
          </div>
        </div>
      </footer>

      <PoliciesDrawer
        onClose={handleConditionsModalCancel}
        open={conditionsModalVisible}
      />

    </>
  );
};

export default Footer;
