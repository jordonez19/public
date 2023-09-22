import { useEffect, useState } from "react";
import { get } from "@/api";

const ImageDisplayImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await get("imagesbanner/");
        setImages(response.images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <ul>
        {images.map((image) => (
          <li key={image}>{image}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageDisplayImage;
