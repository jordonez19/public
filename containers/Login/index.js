import { post } from "@/api";
import LoginComponent from "@/components/Login";
import React, { useState } from "react";
import { setAuthToken } from "@/lib/auth";
import { CustomAlert } from "@/hooks/CustomAlert";
import { useRouter } from "next/router";

const LoginContainer = () => {
  const { SuccessAlert, ErrorAlert } = CustomAlert();
  const [form, setForm] = useState({});
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await post("auth/signin", form);
     if (!!res.token) {
      setAuthToken(res.token);
      SuccessAlert("Bienvenido");
      router.push("/dashboard");
    } else {
      ErrorAlert("Error al iniciar session, verifique que su usuario y contraseña sean correctos");
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
      <LoginComponent
        handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  );
};

export default LoginContainer;
