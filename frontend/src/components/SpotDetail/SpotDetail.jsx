import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import "./SpotDetail.css";

function SpotDetail() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchSpotDetail = async () => {
      const response = await fetch(`/api/spots/${spotId}`);
      const data = await response.json();
      setSpot(data);
    };

    const fetchReviews = async () => { 
      const response = await fetch(`/api/spots/${spotId}/reviews`);
      const data = await response.json();
      setReviews(data.Reviews);
    };

    fetchSpotDetail();
    fetchReviews();
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
        <p>{spot.avgStarRating && reviews.length > 0 ? (
          <> <FaStar /> {parseFloat(spot.avgStarRating).toFixed(1)} · {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
          </> ) : 'New'}
        </p>
        <button onClick={handleReserveClick}>Reserve</button>
      </div>
      <div className="reviews">
        <h2>{spot.avgStarRating && reviews.length > 0 ? (
          <> <FaStar /> {parseFloat(spot.avgStarRating).toFixed(1)} · {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
          </> ) : 'New'}
        </h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review">
              <p>By: {review.User.firstName}</p>
              <p>Reviewed on: {review.month} {review.year}</p>
              <p>{review.review}</p>
            </div>
          ))
        ) : (
          <p>Be the first to post a review!</p>
        )}
      </div>
    </div>
  );
}



export default SpotDetail;
