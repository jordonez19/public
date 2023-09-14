import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <>
      <div className="team section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="assets/images/member-01.jpg" alt="" />
                  <span className="category">UX Teacher</span>
                  <h4>Sophia Rose</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="assets/images/member-02.jpg" alt="" />
                  <span className="category">Graphic Teacher</span>
                  <h4>Cindy Walker</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="assets/images/member-03.jpg" alt="" />
                  <span className="category">Full Stack Master</span>
                  <h4>David Hutson</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="assets/images/member-04.jpg" alt="" />
                  <span className="category">Digital Animator</span>
                  <h4>Stella Blair</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
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
