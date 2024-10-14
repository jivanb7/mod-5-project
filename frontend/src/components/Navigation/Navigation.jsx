// frontend/src/components/Navigation/Navigation.jsx

import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import HomeButton from './HomeButton';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="app-header">
      <ul>
        <li className="home-button">
          <HomeButton />
        </li>
        {isLoaded && (
          <li className="profile-button">
            <ProfileButton user={sessionUser} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;