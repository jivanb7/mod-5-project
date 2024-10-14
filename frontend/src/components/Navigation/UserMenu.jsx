import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useNavigate } from 'react-router-dom';

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

  const handleLogout = () => {
    dispatch(sessionActions.logout()).then(() => {
      setIsOpen(false);
      navigate('/'); 
    });
  };

  return (
    <div className="user-menu">
      <button onClick={toggleMenu}>
        {sessionUser ? `Hello, ${sessionUser.firstName}` : 'User Menu'}
      </button>
      {isOpen && (
        <ul className="profile-dropdown" ref={ulRef}>
          <li>{sessionUser.email}</li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
