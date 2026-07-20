import { useState } from "react";

const MosqueCard = ({
  mosque,
  handleVisitedMosque,
  handleVisitedImage,
}) => {
  const [visited, setVisited] = useState(false);

  const image = mosque.image || mosque.img;

  const handleVisit = () => {
    setVisited(!visited);
    handleVisitedMosque(mosque);
  };

  return (
    <div className="card">
      <img src={image} alt={mosque.name} />

      <h2>{mosque.name}</h2>

      <p>{mosque.location}</p>

      <button onClick={handleVisit}>
        {visited ? "Visited" : "Going"}
      </button>

      <button onClick={() => handleVisitedImage(image)}>
        Add Image
      </button>
    </div>
  );
};

export default MosqueCard;