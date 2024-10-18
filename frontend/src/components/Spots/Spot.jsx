import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"; 

function Spot({ spot }) {

  return (
    <Link to={`/spots/${spot.id}`} className="spot-link">
      <div className="spot-card">
        <img src={spot.previewImage} alt={spot.name} />
        <p>{spot.city}, {spot.state}</p>
        <p>${spot.price} per night</p>
        <p>{spot.avgRating ? (
          <> <FaStar /> {parseFloat(spot.avgRating).toFixed(1)}
          </>) : 'New'}</p>
      </div>
    </Link>
  );
}

export default Spot;
