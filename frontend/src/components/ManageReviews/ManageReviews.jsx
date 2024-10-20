import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReviews } from '../../store/spotreducer';
import OpenModalButton from "../OpenModalButton/OpenModalButton"; 
import DeleteConfirmReviewModal from '../DeleteConfirmReviewModal/DeleteConfirmReviewModal';
import "./ManageReviews.css";

const ManageReviews = () => {
  const dispatch = useDispatch();
  const userReviews = useSelector(state => state.spots.reviews.filter(review => review.userId === state.session.user.id)); 

  useEffect(() => {
    dispatch(fetchUserReviews()); 
  }, [dispatch]);

  return (
    <div className="manage-reviews">
      <h1 className='manage-reviews-title'>Manage Reviews</h1>
      {userReviews.length === 0 ? (
        <div>
          <p>You haven&apos;t posted any reviews yet.</p>
        </div>
      ) : (
        <div>
          {userReviews.map(review => (
            <div className='review-all' key={review.id}>
            <h4 className='reviews-spotname'>{review.spotName}</h4>
            <p className='reviews-date'>{review.month} {review.year}</p>
            <p className='reviews-review'>{review.review}</p>
            <div className='delete-button-reviews'>
            <OpenModalButton 
                modalComponent={<DeleteConfirmReviewModal reviewId={review.id} />}
                buttonText="Delete"
                className="delete-button"
            />
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageReviews;
