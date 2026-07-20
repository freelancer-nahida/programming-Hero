import { use, useState } from "react";
import MosqueCard from "../MosqueCard/MosqueCard";
import "./Mosques.css";

const Mosques = ({ mosquesPromise }) => {
  const mosquesData = use(mosquesPromise);
  console.log(mosquesData);

  const mosques = Array.isArray(mosquesData)
    ? mosquesData
    : mosquesData.data || [];

  const [visitedMosques, setVisitedMosques] = useState([]);
  const [visitedImages, setVisitedImages] = useState([]);

  const handleVisitedMosque = (mosque) => {
    const newVisitedMosques = [...visitedMosques, mosque];
    setVisitedMosques(newVisitedMosques);
  };

  const handleVisitedImage = (image) => {
    const newVisitedImages = [...visitedImages, image];
    setVisitedImages(newVisitedImages);
  };

  return (
    <div>
      <h2>Total Mosques : {mosques.length}</h2>

      <h3>Visited : {visitedMosques.length}</h3>

      <ol>
        {visitedMosques.map((mosque, index) => (
          <li key={index}>{mosque.name}</li>
        ))}
      </ol>

      <div className="visited-images">
        {visitedImages.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>

      <div className="mosques">
        {mosques.map((mosque) => (
          <MosqueCard
            key={mosque.id}
            mosque={mosque}
            handleVisitedMosque={handleVisitedMosque}
            handleVisitedImage={handleVisitedImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Mosques;