import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const image = new Image();
    image.src = src;
    image.addEventListener("load", handleImageLoad);

    return () => {
      image.removeEventListener("load", handleImageLoad);
    };
  }, [src]);

  return (
    <>
      {!imageLoaded && <div>Loading...</div>}
      {imageLoaded && <img src={src} alt={alt} {...props} />}
    </>
  );
};

export default LazyImage;
