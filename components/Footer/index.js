import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2023 todos los derechos reservados. &nbsp;&nbsp;&nbsp;
              Diseñado:{" "}
              <Link
                href="https://dev.miremor.com/"
                rel="nofollow"
                target="_blank"
              >
                XavisDev
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
