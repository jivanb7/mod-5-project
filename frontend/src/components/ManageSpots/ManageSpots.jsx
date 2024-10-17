import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spotreducer';
import { Link, useNavigate } from 'react-router-dom';

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
      <h1>Manage Spots</h1>
      {userSpots.length === 0 ? (
        <div>
          <p>You haven&apos;t posted any spots yet.</p>
          <Link to="/spots/new">Create a New Spot</Link>
        </div>
      ) : (
        <ul>
          {userSpots.map(spot => (
            <li key={spot.id}>
              <Link to={`/spots/${spot.id}`}>
                <img src={spot.previewImage} alt={spot.name} />
                <h3>{spot.name}</h3>
                <p>{spot.city}, {spot.state}</p>
                <p>${spot.price} per night</p>
              </Link>
              <button onClick={() => handleUpdate(spot.id)}>Update</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ManageSpots;
