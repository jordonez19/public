/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Drawer } from 'antd';
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

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      <header className={` w-75 mt-md-0 header ${isFixed ? "fixed-navbar" : ""}`}>
        <div className="header__content">
          <div className="logo_container">
            <Link href="/">
              <img
                className={`logo-img ${isFixed ? "fixed" : ""}`}
                src="sos_soslogic.png"
                alt="logo-img"
              />
            </Link>
          </div>
          <nav className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>
            <ul>
              <li>
                <Link className="menu-link" href="#top" onClick={handleLinkClick}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="menu-link" href="#services" onClick={handleLinkClick}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link className="menu-link" href="#aboutus" onClick={handleLinkClick}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="menu-link" href="#courses" onClick={handleLinkClick}>
                  Productos
                </Link>
              </li>
              {/*  <li>
                <Link className="menu-link" href="#events" onClick={handleLinkClick}>
                  Eventos
                </Link>
              </li> */}
              {/*  <li>
                <Link className="menu-link" href="#contact" onClick={handleLinkClick}>
                  Contáctenos
                </Link>
              </li> */}
            </ul>
            <Link
              href={`#contact`}
            >
              <button className="me-2 ">Contactar</button>
            </Link>
            <MenuOutlined
              className="ms-3 d-block d-md-none " style={{ fontSize: 35 }} onClick={showDrawer} />
          </nav>
          <div
            className={`header__content__toggle ${isFixed ? "fixed__toogle" : ""}`}
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
