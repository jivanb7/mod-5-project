import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./SpotDetail.css";

function SpotDetail() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState(null);

  useEffect(() => {
    const fetchSpotDetail = async () => {
      const response = await fetch(`/api/spots/${spotId}`);
      const data = await response.json();
      setSpot(data);
    };

    fetchSpotDetail();
  }, [spotId]);

  if (!spot) return;
  
  const previewImage = spot.SpotImages?.find(image => image.preview)?.url;

  return (
    <div className="spot-detail">
      <h1>{spot.name}</h1>
      <img src={previewImage} alt={spot.name} />
      <p>{spot.description}</p>
      <p>Hosted by: {spot.Owner.firstName} {spot.Owner.lastName}</p>
      <p>Location: {spot.city}, {spot.state}</p>
      <p>Price: ${spot.price} per night</p>
      <p>{spot.avgStarRating ? `Rating: ${spot.avgStarRating}` : 'Rating: New'}</p>
    </div>
  );
}



export default SpotDetail;