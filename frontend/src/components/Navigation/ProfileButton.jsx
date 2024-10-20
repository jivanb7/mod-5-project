
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import * as sessionActions from '../../store/session';
import MenuOpenModalButton from '../MenuOpenModalButton/MenuOpenModalButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <div className="icon-buttons">
        <button onClick={toggleMenu}>
          <span className="hamburger-icon">
            <RxHamburgerMenu />
          </span>
          <span className="user-icon">
            <FaUserCircle />
          </span>
        </button>
      </div>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.firstName} {user.lastName}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
          <li>
              <MenuOpenModalButton
                buttonText="Sign Up"
                modalComponent={<SignupFormModal />}
              />
            </li>
            <li>
              <MenuOpenModalButton
                buttonText="Log In"
                modalComponent={<LoginFormModal />}
              />
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;