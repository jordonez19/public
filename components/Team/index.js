/* eslint-disable @next/next/no-img-element */
import React from "react";

const Team = () => {
  return (
    <>
      <div className="team section" id="team">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img style={{ boxShadow: '0 0 5px #cecece' }} src="team/pilar.jpg" alt="" />
                  <span className="category">Gerente</span>
                  <h4>Pilar Rojas</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img style={{ boxShadow: '0 0 5px #cecece' }} src="team/gonzalo.jpg" alt="" />
                  <span className="category">Guia profesional</span>
                  <h4>Gonzalo Tolosa</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img style={{ boxShadow: '0 0 5px #cecece' }} src="team/nury.jpg" alt="" />
                  <span className="category">Agente de Viajes</span>
                  <h4>Nury </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
