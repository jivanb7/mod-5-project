import { Link } from 'react-router-dom';

function Spot({ spot }) {

  return (
    <Link to={`/spots/${spot.id}`} className="spot-link">
      <div className="spot-card">
        <img src={spot.previewImage} alt={spot.name} />
        <p>{spot.city}, {spot.state}</p>
        <p>${spot.price} per night</p>
        <p>Rating: {spot.avgRating ? spot.avgRating : 'New'}</p>
      </div>
    </Link>
  );
}

export default Spot;
