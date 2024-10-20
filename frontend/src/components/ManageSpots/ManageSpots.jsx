import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spotreducer';
import { Link, useNavigate } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import ConfirmDeleteModal from '../../components/DeleteConfirmModal/DeleteConfirmModal';
import { FaStar } from "react-icons/fa"; 
import "./ManageSpots.css";

function ManageSpots() {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const userSpots = useSelector(state => state.spots.spots.filter(spot => spot.ownerId === state.session.user.id));

  useEffect(() => {
    dispatch(fetchSpots()); 
  }, [dispatch]);

  const handleUpdate = (spotId) => {
    navigate(`/spots/${spotId}/edit`);
  };

  return (
    <div className="manage-spots">
      <h1 className='manage-spots-title'>Manage Your Spots</h1>
      <div className='manage-spots-create-spot'>
        <Link to="/spots/new" className='link-create'>Create a New Spot</Link>
      </div>
      {userSpots.length === 0 ? (
        <div>
          <p>You haven&apos;t posted any spots yet.</p>
            <Link to="/spots/new">Create a New Spot</Link>
        </div>
      ) : (
        <div className='manage-spot-card-all-grid'>
          {userSpots.map(spot => (
            <div className='manage-spot-card' key={spot.id}>
              <Link to={`/spots/${spot.id}`} className='manage-spot-card-img'>
                <img src={spot.previewImage} alt={spot.name} />
              <div className='manage-spot-place-price-rating'>
                <div className='manage-spot-place-price'>
                  <p className='manage-spot-place-only'>{spot.city}, {spot.state}</p>
                  <p className='manage-spot-price-only'>${spot.price} per night</p>
                </div>
                <div className='manage-spot-rating'>
                  <p className='manage-spot-rating-only'><> <FaStar /> {parseFloat(spot.avgRating).toFixed(1)}</></p>
                </div>
              </div>
              </Link>
              <div className='manage-spot-update-delete-button'>
                <div className='manage-spot-update-div'>
                  <button className="manage-spot-update-button" onClick={() => handleUpdate(spot.id)}>Update</button>
                </div>
                <div className='manage-spot-delete-div'>
                  <OpenModalButton
                    className='manage-spot-delete-button'
                    buttonText="Delete"
                    modalComponent={<ConfirmDeleteModal spotId={spot.id} />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageSpots;
