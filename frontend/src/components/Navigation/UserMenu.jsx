import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import './UserMenu.css';

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const [isOpen, setIsOpen] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setIsOpen((prev) => !prev); 
  };

  useEffect(() => {
    if (!isOpen) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen]);

  const handleManageSpots = () => {
    setIsOpen(false);
    navigate('/spots/manage'); 
  };

  const handleLogout = () => {
    dispatch(sessionActions.logout()).then(() => {
      setIsOpen(false);
      navigate('/'); 
    });
  };

  return (
    <div className="user-menu">
      <button onClick={toggleMenu} className="icon-button">
        <span className="hamburger-icon">
          <RxHamburgerMenu />
        </span>
        <span className="user-icon">
          <FaUserCircle />
        </span>
      </button>
      {isOpen && sessionUser && (
        <ul className="profile-dropdown" ref={ulRef}>
          <li>{`Hello, ${sessionUser.firstName}`}</li>
          <li>{sessionUser.email}</li>
          <li>
            <button onClick={handleManageSpots}>Manage Spots</button>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
