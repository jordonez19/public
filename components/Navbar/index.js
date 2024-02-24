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

  const ctaClickHandler = () => {
    menuToggleHandler();
  };
  useEffect(() => {
    setMenuOpen(false);
  }, []);
  return (
    <>
      <header className={` header  ${isFixed ? "fixed-navbar" : ""}`}>
        <div className={"header__content"}>
          <div className="logo_container">
            <img
              className={`logo-img ${isFixed ? "fixed" : ""}`}
              src="logo3.png"
              alt="logo-img"
            />
            <Link href="/" className={`header__content__logo`}>
              {menuOpen ? "" : "logic"}
            </Link>
          </div>
          <nav className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>
            <ul>
              <li>
                <Link href="/" onClick={menuToggleHandler}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" onClick={menuToggleHandler}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/acerca-de" onClick={menuToggleHandler}>
                  nosotros
                </Link>
              </li>
              <li>
                <Link href="/cursos" onClick={menuToggleHandler}>
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/eventos" onClick={menuToggleHandler}>
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contacto" onClick={menuToggleHandler}>
                  Contáctenos
                </Link>
              </li>
            </ul>
            <Link href="/login">
              <button className="me-2">Ingresar</button>
            </Link>
            <ul className="text-center">
              <li className="text-center">
                <ShoppingCart itemCount={9} />
              </li>
            </ul>
          </nav>
          <div
            className={`header__content__toggle ${
              isFixed ? "fixed__toogle" : ""
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
