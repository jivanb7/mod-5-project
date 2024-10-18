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

  if (!spot) return null;
  
  const previewImage = spot.SpotImages?.find(image => image.preview)?.url;
  const ownerName = spot.Owner ? `${spot.Owner.firstName} ${spot.Owner.lastName}` : 'Unknown Host';

  const handleReserveClick = () => {
    alert("Feature coming soon");
  };

  return (
    <div className="spot-detail">
      <h1>{spot.name}</h1>
      <p>Location: {spot.city}, {spot.state}, {spot.country}</p>
      <img src={previewImage} alt={spot.name} />
      <p>Hosted by: {ownerName}</p>
      <p>{spot.description}</p>
      <div>
        <p>Price: ${spot.price} per night</p>
        <p>{spot.avgStarRating ? `Rating: ${parseFloat(spot.avgStarRating).toFixed(1)}` : 'Rating: New'}</p>
        <button onClick={handleReserveClick}>Reserve</button>
      </div>
    </div>
  );
}



export default SpotDetail;
