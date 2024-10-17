import { useNavigate } from 'react-router-dom'; 
import './Navigation.css'; 
import airbnbLogo from "../../images/airbnblogo.png"; 
import "./HomeButton.css";

function HomeButton() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); 
  };

  return (
    <button className="logo-button" onClick={handleLogoClick}>
      <img src={airbnbLogo} alt="Home Logo" className="logo-image" />
    </button>
  );
}

export default HomeButton;
