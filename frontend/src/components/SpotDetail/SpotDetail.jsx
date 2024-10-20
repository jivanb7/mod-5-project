import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import ReviewForm from '../ReviewForm/ReviewForm';
import DeleteConfirmReviewModal from "../DeleteConfirmReviewModal/DeleteConfirmReviewModal";
import { FaStar } from "react-icons/fa";
import "./SpotDetail.css";

function SpotDetail() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState(null);
  const [reviews, setReviews] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

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

  const userReviewExists = reviews.some(review => review.userId === sessionUser?.id);
  const isOwner = sessionUser?.id === spot.ownerId;
  
  return (
  <div className="spot-detail">
    <h1 className="spot-detail__title">{spot.name}</h1>
    <p className="spot-detail__location">{spot.city}, {spot.state}, {spot.country}</p>
    <img className="spot-detail__image" src={previewImage} alt={spot.name} />
    <div className="spot-detail__info-container">
      <div className="spot-detail__host-info">
        <p>Hosted by: {ownerName}</p>
        <p>{spot.description}</p>
      </div>
      <div className="spot-detail__price-rating-container">
        <div className='spot-detail_price-rating-both'>
          <p className="spot-detail__price">${spot.price} per night</p>
          <p className='spot-detail_rating-ptag'>{spot.avgStarRating && reviews.length > 0 ? (
          <> <FaStar /> {parseFloat(spot.avgStarRating).toFixed(1)} · {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
          </> ) : 'New'}
          </p>
        </div>
        <div>
          <button className="spot-detail__reserve-button" onClick={handleReserveClick}>Reserve</button>
        </div>
      </div>
    </div>

    <div className="spot-detail__reviews">
    <h2>{spot.avgStarRating && reviews.length > 0 ? (
      <> <FaStar /> {parseFloat(spot.avgStarRating).toFixed(1)} · {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
      </> ) : 'New'}
    </h2>
    {sessionUser && !isOwner && !userReviewExists && (
      <div className='post-review-div'>
      <OpenModalButton
        className="post-review"
        buttonText="Post Your Review"
        modalComponent={<ReviewForm spotId={spotId} />}
      />
      </div>
    )}
    {reviews.length > 0 ? (
      reviews.map((review) => (
        <div key={review.id} className="spot-detail__review">
          <p className='reviewer-name'>{review.User.firstName}</p>
          <p className='reviewer-monthyear'>{review.month} {review.year}</p>
          <p className='reviewer-description'>{review.review}</p>
          <div className="delete-button-spot-detail">
          {sessionUser?.id === review.userId && (
            <OpenModalButton 
              modalComponent={<DeleteConfirmReviewModal reviewId={review.id} />}
              buttonText="Delete"
            />
          )}
          </div>
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
