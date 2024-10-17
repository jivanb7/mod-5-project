
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import HomeButton from './HomeButton';
import UserMenu from './UserMenu';
import { useNavigate } from 'react-router-dom';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const navigate = useNavigate();

  const handleCreateSpot = () => {
    navigate('/spots/new'); 
  };

  return (
    <div className="app-header">
      <ul>
        <li className="home-button">
          <HomeButton />
        </li>
        {isLoaded && sessionUser ? (
          <>
          <li className="create-spot-button">
            <button onClick={handleCreateSpot}>Create a New Spot</button>
          </li>
          <li className="user-menu">
            <UserMenu /> 
          </li>
          </>
        ) : (
          <li className="profile-button">
            <ProfileButton user={sessionUser} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;