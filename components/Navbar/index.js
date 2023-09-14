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
    if (size.width > 768 && menuOpen) {
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

  return (
    <>
      <header
        className={`header  ${isFixed ? "fixed-navbar" : "" }`}
      >
        <div className={"header__content"}>
          <img className="logo-img" src="Novakademia2.png" alt="logo-img" />
          <Link href="/" className={"header__content__logo"}>
            Novakademia
          </Link>
          <nav
            className={`header__content__nav ${
              menuOpen && size.width < 768 ? "isMenu" : ""
            }`}
          >
            <ul>
              <li>
                <Link href="/" onClick={menuToggleHandler}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" onClick={menuToggleHandler}>
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/page-three" onClick={menuToggleHandler}>
                  PageThree
                </Link>
              </li>
            </ul>

            <button onClick={ctaClickHandler}>Ingresar</button>
            <ul>
              <li>
                <ShoppingCart />
              </li>
            </ul>
          </nav>
          <div className={"header__content__toggle"}>
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
