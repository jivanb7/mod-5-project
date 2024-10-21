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
            data-testid='credential-input'
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            data-testid='password-input'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          className='login-button'
          type="submit"
          data-testid='login-button'
          disabled={credential.length < 4 || password.length < 6}  
        >Log In
        </button>
      </form>
      
      <button
        className='login-demo-user'
        type="button"
        data-testid='demo-user-login'
        onClick={() =>
          dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))
          .then(closeModal)
        }
      >
        Demo User
      </button>
    </>
  );
}

export default LoginFormModal;
