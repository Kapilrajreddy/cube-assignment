import React, { useEffect, useState } from "react";
import "../Styles/PhotoGrid.css";

function PhotoGrid() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const photosArray = Array.from(
      { length: 9 },
      () => `https://picsum.photos/200/300?random=${Math.random()}`
    );
    setPhotos(photosArray);
  };

  useEffect(() => {
    fetchPhotos();

    const intervalId = setInterval(fetchPhotos, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((url, index) => (
        <img key={index} src={url} alt={`Customer-related ${index}`} />
      ))}
    </div>
  );
}

export default PhotoGrid;
