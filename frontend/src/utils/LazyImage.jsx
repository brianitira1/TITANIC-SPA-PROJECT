import React, { useState, useEffect } from "react";

/**
 * Lazy loaded image component
 * @param {string} src - Image source URL
 * @param {string} alt - Image alternate text
 * @param {object} props - Additional image props
 */
const LazyImage = ({ src, alt, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    /**
     * Function to handle image load event
     */
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const image = new Image();
    image.src = src;
    image.addEventListener("load", handleImageLoad);
    console.log(`Image loading: ${src}`);

    /**
     * Clean up function to remove event listener
     */
    return () => {
      image.removeEventListener("load", handleImageLoad);
      console.log(`Image load event removed: ${src}`);
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
