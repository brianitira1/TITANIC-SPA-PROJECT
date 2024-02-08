import React, { useState, useEffect } from "react";

/**
 * Lazy loaded image component
 * @param src - Image source URL
 * @param alt - Image alternate text
 * @param props - Additional image props
 * @returns JSX.Element
 */
const LazyImage: React.FC<{ src: string; alt: string; props: object }> = ({
  src,
  alt,
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleImageLoad = (): void => {
      setImageLoaded(true);
    };

    const image = new Image();
    image.src = src;
    image.addEventListener("load", handleImageLoad);
    console.log(`Image loading: ${src}`);

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
