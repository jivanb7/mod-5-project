import { useEffect, useState } from 'react';
import Spot from "./Spot";
import "./HomePage.css";

function HomePage() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      const response = await fetch('/api/spots');
      const data = await response.json();
      setSpots(data.Spots); // Access the Spots array here
    };

    fetchSpots();
  }, []);

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
