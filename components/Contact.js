import React, { useState } from "react";
import { Button, Input, Form, message, Select } from "antd";
import { SendOutlined } from "@ant-design/icons";
import axios from "axios"; // Importar Axios
const { TextArea } = Input;
const { Option } = Select;

const initValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  product: "", // Nuevo campo para el producto
};
const initState = { values: initValues };

const Contactanos = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;

  const success = () => {
    message.success("¡Se ha enviado el mensaje exitosamente!");
  };

  const errorMessage = () => {
    message.error("¡Ha habido un problema enviando el mensaje!");
  };

  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      if (!values.email || !/\S+@\S+\.\S+$/.test(values.email)) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Correo electrónico inválido",
        }));
        return;
      }

      await axios.post("https://formsubmit.co/ajax/comercial@tolimaadventure.com", {
        name: values.name,
        email: values.email,
        phone: values.phone,
        subject: values.subject,
        message: values.message,
        product: values.product,
      });

      setTouched({});
      setState(initState);
      success();
    } catch (error) {
      errorMessage();
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="center">
      <div
        style={{
          maxWidth: "450px",
          minWidth: "280px",
          margin: "auto",
          marginTop: "12px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Contactanos . . .</h2>

        {error && (
          <p style={{ color: "red", marginBottom: "4px", fontSize: "16px" }}>
            {error}
          </p>
        )}

        <Form>
          <Form.Item
            label="Nombre"
            validateStatus={touched.name && !values.name ? "error" : ""}
            help={touched.name && !values.name ? "El Nombre es requerido." : ""}
          >
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </Form.Item>

          <Form.Item
            label="Correo"
            validateStatus={
              touched.email &&
                (!values.email || !/\S+@\S+\.\S+$/.test(values.email))
                ? "error"
                : ""
            }
            help={
              touched.email && !values.email
                ? "El Correo es requerido."
                : touched.email && !/\S+@\S+\.\S+$/.test(values.email)
                  ? "El Correo es inválido."
                  : ""
            }
          >
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </Form.Item>

          <Form.Item
            label="Teléfono"
            validateStatus={touched.phone && !values.phone ? "error" : ""}
            help={touched.phone && !values.phone ? "El Teléfono es requerido." : ""}
          >
            <Input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </Form.Item>

          <Form.Item
            label="Asunto"
            validateStatus={touched.subject && !values.subject ? "error" : ""}
            help={
              touched.subject && !values.subject
                ? "El Asunto es requerido."
                : ""
            }
          >
            <Input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </Form.Item>

          <Form.Item
            label="Producto"
            validateStatus={touched.product && !values.product ? "error" : ""}
            help={touched.product && !values.product ? "Seleccione un Producto." : ""}
          >
            <Select
              placeholder="Seleccione un producto"
              name="product"
              value={values.product}
              onChange={(value) => handleChange({ target: { name: 'product', value } })}
              onBlur={() => onBlur({ target: { name: 'product' } })}
            >
              <Option value="producto1">Producto 1</Option>
              <Option value="producto2">Producto 2</Option>
              <Option value="producto3">Producto 3</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Mensaje"
            validateStatus={touched.message && !values.message ? "error" : ""}
            help={
              touched.message && !values.message
                ? "El Mensaje es requerido."
                : ""
            }
          >
            <TextArea
              type="text"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </Form.Item>

          <div className="center">
            <Button
              type="primary"
              loading={isLoading}
              disabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
            >
              Enviar <SendOutlined style={{ marginLeft: "5px" }} />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contactanos;
