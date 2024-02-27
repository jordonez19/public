/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  MenuOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import ShoppingCart from "../ShoppingCart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1300 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <>
      <header className={`slideInDown header ${isFixed ? "fixed-navbar" : ""}`}>
        <div className="header__content">
          <div className="logo_container">
            <Link href="/">
              <img
                className={`logo-img ${isFixed ? "fixed" : ""}`}
                src="logoHred.png"
                alt="logo-img"
              />
            </Link>
          </div>
          <nav className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>
            <ul>
              <li>
                <Link href="#top" onClick={handleLinkClick}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" onClick={handleLinkClick}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#aboutus" onClick={handleLinkClick}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#courses" onClick={handleLinkClick}>
                  Productos
                </Link>
              </li>
              {/*  <li>
                <Link href="#events" onClick={handleLinkClick}>
                  Eventos
                </Link>
              </li> */}
              {/*  <li>
                <Link href="#contact" onClick={handleLinkClick}>
                  Contáctenos
                </Link>
              </li> */}
            </ul>
            <Link
              href={`#contact`}
            >
              <button className="me-2">Contactar</button>
            </Link>
          </nav>
          <div
            className={`header__content__toggle ${isFixed ? "fixed__toogle" : ""
              }`}
          >
            {!menuOpen ? (
              <MenuOutlined onClick={menuToggleHandler} />
            ) : (
              <CloseOutlined onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
