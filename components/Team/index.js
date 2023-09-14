import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <>
      <div class="team section" id="team">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="team-member">
                <div class="main-content">
                  <img src="assets/images/member-01.jpg" alt="" />
                  <span class="category">UX Teacher</span>
                  <h4>Sophia Rose</h4>
                  <ul class="social-icons">
                    <li>
                      <Link href="#">
                        <i class="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-member">
                <div class="main-content">
                  <img src="assets/images/member-02.jpg" alt="" />
                  <span class="category">Graphic Teacher</span>
                  <h4>Cindy Walker</h4>
                  <ul class="social-icons">
                    <li>
                      <Link href="#">
                        <i class="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-member">
                <div class="main-content">
                  <img src="assets/images/member-03.jpg" alt="" />
                  <span class="category">Full Stack Master</span>
                  <h4>David Hutson</h4>
                  <ul class="social-icons">
                    <li>
                      <Link href="#">
                        <i class="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-member">
                <div class="main-content">
                  <img src="assets/images/member-04.jpg" alt="" />
                  <span class="category">Digital Animator</span>
                  <h4>Stella Blair</h4>
                  <ul class="social-icons">
                    <li>
                      <Link href="#">
                        <i class="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
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
