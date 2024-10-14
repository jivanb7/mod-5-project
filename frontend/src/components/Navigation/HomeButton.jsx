
import { useNavigate } from 'react-router-dom'; 
import { FaHome } from "react-icons/fa"; 
import './Navigation.css'; 

function HomeButton() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); 
  };

  return (
    <button className="logo-button" onClick={handleLogoClick}>
      <FaHome className="logo-icon" />
    </button>
  );
}

export default HomeButton;
