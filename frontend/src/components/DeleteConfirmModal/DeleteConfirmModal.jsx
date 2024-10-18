
import { useDispatch } from 'react-redux';
import { deleteSpot } from '../../store/spotreducer'; 
import { useModal } from '../../context/Modal';
import "./DeleteConfirmModal.css";

function ConfirmDeleteModal({ spotId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = async () => {
    await dispatch(deleteSpot(spotId));
    closeModal();
  };

  return (
    <div className="confirm-delete-modal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to remove this spot from the listings?</p>
      <button className="red-button" onClick={handleDelete}>
        Yes (Delete Spot)
      </button>
      <button className="dark-grey-button" onClick={closeModal}>
        No (Keep Spot)
      </button>
    </div>
  );
}

export default ConfirmDeleteModal;
