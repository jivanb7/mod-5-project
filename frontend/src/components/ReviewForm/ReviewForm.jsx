import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview, fetchReviews } from '../../store/spotreducer';
import { FaStar } from "react-icons/fa";
import { useModal } from '../../context/Modal';

const ReviewForm = ({ spotId }) => {
    const dispatch = useDispatch();
    const [stars, setStars] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = [];

        if (review.length < 10) validationErrors.push('Comment must be at least 10 characters.');
        if (!stars) validationErrors.push('Please provide a star rating.');

        if (validationErrors.length) {
            setErrors(validationErrors);
        } else {
            const reviewData = { stars, review };
            const result = await dispatch(postReview(spotId, reviewData));

            if (result && !result.error) {
                await dispatch(fetchReviews(spotId));
                closeModal();
                window.location.reload();
            } else {
                setErrors(['Failed to post review.']);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h2 style={{textAlign: "center"}}>How was your stay?</h2>
            {errors.length > 0 && (
                <div className="error-messages">
                    {errors.map((error, idx) => (
                        <div style={{color: "red"}} key={idx}>{error}</div>
                    ))}
                </div>
            )}
            <div>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Leave your review here..."
                    style={{ width: '350px', height: '150px' }}
                />
            </div>
            <div style={{display: "flex", justifyContent: "center" }}>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onMouseEnter={() => setHoveredStars(star)}
                            onMouseLeave={() => setHoveredStars(0)}
                            onClick={() => setStars(star)} 
                        >
                            <FaStar
                                size={30}
                                color={star <= (hoveredStars || stars) ? "#ffc107" : "#e4e5e9"}
                                style={{ cursor: "pointer" }}
                            />
                        </span>
                    ))}
                    Stars
                </div>
            </div>
            <button style={{color: "white", backgroundColor: "red", border: "2px solid black"}} type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
