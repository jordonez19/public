import React, { useState } from "react";
import { WhatsAppOutlined } from "@ant-design/icons";

const Whatsapp = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [message, setMessage] = useState("");

  function toggleChat() {
    setIsChatVisible(!isChatVisible);
  }

  return (
    <>
      <div className="whatsapp-button">
        <button className="slideInRight" onClick={toggleChat}>
          <WhatsAppOutlined className="icon-wp" />
        </button>
      </div>

      {isChatVisible && (
        <div className="whatsapp-chat fadeInUp">
          <div className="whatsapp-header">
            <h4>¿En qué podemos ayudarte?</h4>
            <span className="whatsapp-close" onClick={toggleChat}>
              &times;
            </span>
          </div>
          <div className="whatsapp-body">
            <textarea
              placeholder="Escribe tu mensaje aquí"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="whatsapp-footer">
            <a
              href={`https://api.whatsapp.com/send?phone=573142392945&text=${encodeURIComponent(
                message
              )}`}
              id="whatsapp-btn"
            >
              <button>Enviar</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Whatsapp;
