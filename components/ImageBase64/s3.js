/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { post } from "@/api";

const s3 = new AWS.S3();

const ImageDisplay = ({ imageUrl }) => {
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
    <div className="bg-primary text-center">
      <h2>Formulario</h2>
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

      {/* 
      {imageData ? (
        <img src={imageData} alt="Imagen desde S3" />
      ) : (
        <p>Cargando imagen...</p>
      )}
 */}
    </div>
  );
};

export default ImageDisplay;

/* 
import ImageDisplay from "../components/ImageDisplay";

const MyPage = () => {
  const imageUrl = "novakademia/nombre_de_la_imagen.jpg"; // Reemplaza con la URL de tu imagen en S3

  return (
    <div>
      <h1>Mi Página</h1>
      <ImageDisplay imageUrl={imageUrl} />
    </div>
  );
};

export default MyPage;


*/
