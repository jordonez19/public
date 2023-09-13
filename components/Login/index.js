import { Avatar, Space } from "antd";
import {
  UserOutlined,
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const LoginComponent = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <div className="body-login">
        <div className="custom-container">
          <div className="custom-screen">
            <div className="custom-screen__content">
              <form className="custom-login" onSubmit={handleSubmit}>
                <div className="custom-login__field">
                  <i className="custom-login__icon fas fa-user"></i>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    className="custom-login__input"
                    placeholder="Email"
                  />
                </div>
                <div className="custom-login__field">
                  <i className="custom-login__icon fas fa-lock"></i>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    className="custom-login__input"
                    placeholder="Password"
                  />
                </div>
                <button className="custom-button custom-login__submit">
                  <span className="custom-button__text text-center">INGRESAR</span>
                  <i className="custom-button__icon fanpm audit fix --forces fa-chevron-right"></i>
                </button>
              </form>
              <div className="custom-social-login">

                <div className="d-flex">
                  <Avatar
                    className="me-2"
                    size={40}
                    icon={<GoogleOutlined />}
                  />
                  <Avatar
                    className="me-2"
                    size={40}
                    icon={<FacebookOutlined />}
                  />
                  <Avatar className="me-2" size={40} icon={<LinkedinOutlined />} />
                </div>

                <div className="custom-social-icons">
                  <a
                    href="#"
                    className="custom-social-login__icon fab fa-instagram"
                  ></a>
                  <a
                    href="#"
                    className="custom-social-login__icon fab fa-facebook"
                  ></a>
                  <a
                    href="#"
                    className="custom-social-login__icon fab fa-twitter"
                  ></a>
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
