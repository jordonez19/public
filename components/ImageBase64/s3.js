/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AWS from "aws-sdk";

const s3 = new AWS.S3();

const ImageDisplay = ({ imageUrl }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Función para cargar la imagen desde S3
    const loadImageFromS3 = async () => {
      try {
        const response = await s3
          .getObject({ Bucket: "bucket-preguntepues", Key: imageUrl })
          .promise();

        // Convierte los datos binarios en una URL de imagen
        const imageDataUrl = `data:image/jpeg;base64,${Buffer.from(
          response.Body
        ).toString("base64")}`;
        setImageData(imageDataUrl);
      } catch (error) {
        console.error("Error al cargar la imagen desde S3:", error);
      }
    };

    if (imageUrl) {
      loadImageFromS3();
    }
  }, [imageUrl]);

  return (
    <div>
      {imageData ? (
        <img src={imageData} alt="Imagen desde S3" />
      ) : (
        <p>Cargando imagen...</p>
      )}
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