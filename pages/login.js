import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { withUser } from "@/hoc/withUser";

const Login = ({ user, token }) => {
  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  }, []);
  return (
    <div>
      <p>user: {user}</p>
      <p>token: {token}</p>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.object,
};

export default withUser(Login);
