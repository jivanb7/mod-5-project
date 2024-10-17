// frontend/src/components/LoginFormModal/LoginFormModal.jsx

import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './LoginForm.css';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  // Reset form fields and errors when modal is closed
  useEffect(() => {
    return () => {
      setCredential("");
      setPassword("");
      setErrors({});
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        console.log("INSPECT DATA : ", data);
        if (data && data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ credential: 'The provided credentials were invalid' })
        }
      });
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        {errors.credential && (
          <p className='login-error'>{errors.credential === 'Invalid credentials' || errors.message === 'Invalid credentials'
            ? 'The provided credentials were invalid' 
            : errors.credential}
          </p>
        )}
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          disabled={credential.length < 4 || password.length < 6}  
        >Log In
        </button>
      </form>
      
      <button
        type="button"
        onClick={() =>
          dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))
          .then(closeModal)
        }
      >
        Log in as Demo User
      </button>
    </>
  );
}

export default LoginFormModal;
