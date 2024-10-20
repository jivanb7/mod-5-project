import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"; 
import "./Spot.css";

function Spot({ spot }) {
  return (
    <Link to={`/spots/${spot.id}`} className="spot-link">
      <img src={spot.previewImage} alt={spot.name} />
      <div className="spot-info">
        <div className="spot-place-price">
          <p>{spot.city}, {spot.state}</p>
          <p className='price-spot'>${spot.price} per night</p>
        </div>
        <div className="rating">
          {spot.avgRating ? (
            <> <FaStar /> {parseFloat(spot.avgRating).toFixed(1)}</>
          ) : 'New'}
        </div>
      </div>
    </Link>
  );
}


export default Spot;
