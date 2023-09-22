/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { post } from "@/api";
import ImageDisplayImage from "./ImageDisplay";

const ImageDisplay = () => {
  const [data, setData] = useState({
    name: "",
    image: null,
  });

  const handlePost = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image);

      await post("imagesbanner/s3", formData);
      alert("yes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-primary text-center">
        <h2>Formulario</h2>
        <ImageDisplayImage />

        <div className="col-lg-12">
          <fieldset>
            <input
              type="text"
              name="name"
              placeholder="Your Text ..."
              required=""
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <input
              type="file"
              name="image"
              required=""
              onChange={(e) => setData({ ...data, image: e.target.files[0] })}
            />
          </fieldset>
        </div>
        <button onClick={handlePost}>Subir</button>
      </div>
    </>
  );
};

export default ImageDisplay;
