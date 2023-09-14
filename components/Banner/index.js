import Link from 'next/link';
import React from 'react'

const index = () => {
  return (
    <div>
      <div class="main-banner" id="top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="owl-carousel owl-banner">
                <div class="item item-1">
                  <div class="header-text">
                    <span class="category">Our Courses</span>
                    <h2>With Scholar Teachers, Everything Is Easier</h2>
                    <p>
                      Scholar is free CSS template designed by TemplateMo for
                      online educational related websites. This layout is based
                      on the famous Bootstrap v5.3.0 framework.
                    </p>
                    <div class="buttons">
                      <div class="main-button">
                        <Link href="#">Request Demo</Link>
                      </div>
                      <div class="icon-button">
                        <Link href="#">
                          <i class="fa fa-play"></i> Whats Scholar?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item item-2">
                  <div class="header-text">
                    <span class="category">Best Result</span>
                    <h2>Get the best result out of your effort</h2>
                    <p>
                      You are allowed to use this template for any educational
                      or commercial purpose. You are not allowed to
                      re-distribute the template ZIP file on any other website.
                    </p>
                    <div class="buttons">
                      <div class="main-button">
                        <Link href="#">Request Demo</Link>
                      </div>
                      <div class="icon-button">
                        <Link href="#">
                          <i class="fa fa-play"></i> Whats the best result?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item item-3">
                  <div class="header-text">
                    <span class="category">Online Learning</span>
                    <h2>Online Learning helps you save the time</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temporious incididunt ut labore et dolore
                      magna aliqua suspendisse.
                    </p>
                    <div class="buttons">
                      <div class="main-button">
                        <Link href="#">Request Demo</Link>
                      </div>
                      <div class="icon-button">
                        <Link href="#">
                          <i class="fa fa-play"></i> Whats Online Course?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index
