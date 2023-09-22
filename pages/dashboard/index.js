import React from "react";
import { ConfigProvider, Button } from "antd";
import esES from "antd/lib/locale/es_ES";

const theme = {
  primaryColor: "#7B6ADA",
};

const Dashboard = () => {
  return (
    <ConfigProvider locale={esES} theme={theme}>
      <h2>what</h2>
      <Button type="primary">
        <h1>dashboard</h1>
      </Button>
    </ConfigProvider>
  );
};
export default Dashboard;
