/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from "react";
import Link from "next/link";
/* import Image from "next/image"; */
const Banner = () => {
  return (
    <>
     {/*  <Image width={'800'} height={'800'} className="fadeIn shape-banner d-none d-md-block" src="/banner/hero-shape.png" alt="Hero shape" />
      <Image width={'700'} height={'700'} className="fadeIn shape-banner-left" src="/banner/blur-layer.png" alt="Blur layer" />
      <Image width={'200'} height={'200'} className="fadeIn shape-banner-bottom" src="/banner/half-circle.png" alt="Half circle" />
      <Image width={'800'} height={'800'} className="fadeIn banner-people_team" src="/banner/people_team.png" alt="People team" /> */}
      <div className="main-banner" id="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-banner fadeIn">
                <div
                  className="item fadeIn p-0 p-md-5 mt-0 mt-md-5"
                >
                  <div className="header-text text-center text-sm-center text-md-start text-lg-start">
                    <h2 className=" mt-4">
                      <span>Transforma</span> tu empresa con nuestra suite de <span>soluciones digitales</span>
                    </h2>
                    <p className=" mt-3">
                      soslogic ofrece a tu empresa el software necesario para mejorar la productividad en tu organización o institución.
                    </p>
                    <div className="buttons d-sm-flex flex-column flex-lg-row mt-5 align-items-center">
                      <Link
                        href={`#contact`}
                        className="mt-0 custom-button">
                        Contactanos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Banner;
