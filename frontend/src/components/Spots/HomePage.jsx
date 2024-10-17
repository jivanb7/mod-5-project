import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spotreducer';
import Spot from './Spot';
import "./HomePage.css";

function HomePage() {
  // const [spots, setSpots] = useState([]);
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.spots);
  
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);


  return (
    <div className="home-page">
      <div className="spot-list">
        {spots.map(spot => (
          <Spot key={spot.id} spot={spot} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
