/* eslint-disable @next/next/no-img-element */

import { get } from "@/api";
import React, { useEffect, useState } from "react";

const ImageBase64 = ({ base64Data }) => {
  const [data, setData] = useState();
  const token = "token";
  const handleData = async (data) => {
    try {
      const res = await get("imagesbanner", token);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      {!!data &&
        Array.isArray(data) &&
        data.map((item) => (
          <img key={item.id} src={`${item.image}`} alt="Imagen" />
        ))}
    </>
  )
};

export default ImageBase64;
