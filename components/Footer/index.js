import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2036 Scholar Organization. All rights reserved.
              &nbsp;&nbsp;&nbsp; Design:{" "}
              <Link
                href="https://templatemo.com"
                rel="nofollow"
                target="_blank"
              >
                TemplateMo
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
