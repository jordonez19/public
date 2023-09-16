import React, { useState } from "react";
import CreateOrEditProduct from "./CreateOrEditProduct";
import { Button, Drawer } from "antd";

const Products = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <h1>All products</h1>
      <Button onClick={showDrawer}>Crear</Button>

      <Drawer
        title="Crear Producto"
        width={"100%"}
        height={"100%"}
        placement={"top"}
        autoFocus
        onClose={closeDrawer}
        open={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "top",
            }}
          ></div>
        }
      >
        <CreateOrEditProduct onCancel={closeDrawer} />
      </Drawer>
    </>
  );
};

export default Products;
