import { post } from "@/api";
import LoginComponent from "@/components/Login";
import React, { useState } from "react";
import { setAuthToken } from "@/lib/auth";
import { CustomAlert } from "@/hooks/CustomAlert";

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const { SuccessAlert, ErrorAlert } = CustomAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await post("auth/signin", form);
    if (res.status == 200) {
      setAuthToken(res.data.token);
      SuccessAlert('Bienvenido');
    } else {
      ErrorAlert('Error al iniciar session');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <LoginComponent handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  );
};

export default LoginContainer;
