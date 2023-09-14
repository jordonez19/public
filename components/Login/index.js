import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const LoginComponent = ({ handleChange, handleSubmit }) => {
  const [viewInput, setViewInput] = useState(false);

  return (
    <>
      <div className="body-login">
        <div className="custom-container">
          <div className="custom-screen">
            <div className="custom-screen__content">
              <form className="custom-login" onSubmit={handleSubmit}>
                <div className="custom-login__field">
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    className="custom-login__input"
                    placeholder="Email"
                  />
                </div>
                <div className="custom-login__field">
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    onChange={handleChange}
                    type={viewInput ? "text" : "password"}
                    name="password"
                    className="custom-login__input"
                    placeholder="Password"
                  />
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    onClick={() => setViewInput(!viewInput)}
                    icon={!viewInput ? faEye : faEyeSlash}
                  />
                </div>
                <button className="custom-button custom-login__submit pulse">
                  <span className="custom-button__text text-center">
                    INGRESAR
                  </span>
                  <FontAwesomeIcon
                    className="custom-button__icon fanpm audit fix--forces"
                    icon={faChevronRight}
                  />
                </button>
              </form>
              <div className="custom-social-login">
                <div className="custom-social-icons">
                  <Link
                    href="#"
                    className="custom-social-login__icon"
                  >i</Link>
                  <Link
                    href="#"
                    className="custom-social-login__icon"
                  >f</Link>
                  <Link
                    href="#"
                    className="custom-social-login__icon"
                  >g</Link>
                </div>
              </div>
            </div>
            <div className="custom-screen__background">
              <span className="custom-screen__background__shape custom-screen__background__shape4"></span>
              <span className="custom-screen__background__shape custom-screen__background__shape3"></span>
              <span className="custom-screen__background__shape custom-screen__background__shape2"></span>
              <span className="custom-screen__background__shape custom-screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
