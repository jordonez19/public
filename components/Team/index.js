import React from "react";

const Team = () => {
  return (
    <>
      <div className="team section" id="team">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="assets/images/member-01.jpg" alt="" />
                  <span className="category">Gerente</span>
                  <h4>Pilar Rojas</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="assets/images/member-01.jpg" alt="" />
                  <span className="category">Guia profesional</span>
                  <h4>Gonzalo Tolosa</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="assets/images/member-02.jpg" alt="" />
                  <span className="category">Agente de Viajes</span>
                  <h4>Nury Buitrago</h4>
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
