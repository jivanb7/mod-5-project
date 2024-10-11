// frontend/src/store/session.js

import { csrfFetch } from './csrf';

// Action Types
const SET_SESSION_USER = 'session/SET_SESSION_USER';
const REMOVE_SESSION_USER = 'session/REMOVE_SESSION_USER';

// Initial State
const initialState = {
  user: null,
};

// Action Creators
const setSessionUser = (user) => ({
  type: SET_SESSION_USER,
  user,
});

const removeSessionUser = () => ({
  type: REMOVE_SESSION_USER,
});

// Thunk Action for Logging In
export const login = (credential, password) => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({ credential, password }),
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(setSessionUser(user));
  } else {
    console.error("Login failed");
  }
};

// Reducer
const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION_USER:
      return {
        ...state,
        user: action.user,
      };
    case REMOVE_SESSION_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;

