import ImageBase64 from "@/components/ImageBase64";
import Products from "@/components/Products";
import React from "react";
import MainLayout from "@/layout/MainLayout";

const test = () => {
  return (
    <div>
      <MainLayout>
        <div className="wrapper">
          <Products />
        </div>
      </MainLayout>
    </div>
  );
};

export default test;
