
import { useDispatch } from 'react-redux';
import { deleteUserReview } from '../../store/spotreducer'; 
import { useModal } from '../../context/Modal';

const DeleteConfirmReviewModal = ({ reviewId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = async () => {
        await dispatch(deleteUserReview(reviewId));
        closeModal();
        window.location.reload()
    };

    return (
        <div className="confirm-delete-modal">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this review?</p>
            <button className="red-button" onClick={handleDelete}>
                Yes (Delete Review)
            </button>
            <button className="dark-grey-button" onClick={closeModal}>
                No (Keep Review)
            </button>
        </div>
    );
};

export default DeleteConfirmReviewModal;
