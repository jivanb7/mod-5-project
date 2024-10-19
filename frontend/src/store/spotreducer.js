
import { csrfFetch } from "./csrf";

export const FETCH_SPOTS = 'FETCH_SPOTS';
export const FETCH_SPOT = 'FETCH_SPOT';
export const FETCH_SPOT_SUCCESS = 'FETCH_SPOT_SUCCESS';
export const FETCH_SPOT_FAILURE = 'FETCH_SPOT_FAILURE';
export const CREATE_SPOT = 'CREATE_SPOT';
export const CREATE_SPOT_SUCCESS = 'CREATE_SPOT_SUCCESS';
export const CREATE_SPOT_FAILURE = 'CREATE_SPOT_FAILURE';
export const UPDATE_SPOT_SUCCESS = 'UPDATE_SPOT_SUCCESS';
export const DELETE_SPOT = 'DELETE_SPOT';
export const DELETE_SPOT_SUCCESS = 'DELETE_SPOT_SUCCESS';
export const DELETE_SPOT_FAILURE = 'DELETE_SPOT_FAILURE';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';
export const POST_REVIEW_SUCCESS = 'POST_REVIEW_SUCCESS';
export const POST_REVIEW_FAILURE = 'POST_REVIEW_FAILURE';

export const fetchSpots = () => async (dispatch) => {
    try {
        const response = await csrfFetch('/api/spots');
        const data = await response.json();

        dispatch({ type: FETCH_SPOTS, payload: data.Spots });
    } catch (error) {
        console.error("Error fetching spots:", error);
    }
};

export const getSpot = (spotId) => async (dispatch) => {
    dispatch({ type: FETCH_SPOT });

    try {
        const response = await csrfFetch(`/api/spots/${spotId}`);
        const data = await response.json();

        dispatch({ type: FETCH_SPOT_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching spot:", error);
        dispatch({ type: FETCH_SPOT_FAILURE, payload: error });
    }
};

export const updateSpot = (spotId, spotData) => async (dispatch) => {
    try {
      const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(spotData),
      });
  
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: UPDATE_SPOT_SUCCESS, payload: data });
        return { ok: true };
      }
    } catch (error) {
      console.error("Error updating spot:", error);
      return { ok: false };
    }
  };

export const createSpot = (spotData, navigate) => async (dispatch) => {
    dispatch({ type: CREATE_SPOT });

    try {
        const response = await csrfFetch('/api/spots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(spotData),
        });

        const data = await response.json();

        dispatch({ type: CREATE_SPOT_SUCCESS, payload: data });
        dispatch(fetchSpots());
        
        if (navigate && data.id) {
            navigate(`/spots/${data.id}`);
        }

    } catch (error) {
        console.error("Error creating spot:", error);
        dispatch({ type: CREATE_SPOT_FAILURE, payload: error });
    }
};

export const deleteSpot = (spotId) => async (dispatch) => {
    dispatch({ type: DELETE_SPOT });

    try {
        const response = await csrfFetch(`/api/spots/${spotId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            dispatch({ type: DELETE_SPOT_SUCCESS, payload: spotId });
            dispatch(fetchSpots());
        }
    } catch (error) {
        console.error("Error deleting spot:", error);
        dispatch({ type: DELETE_SPOT_FAILURE, payload: error });
    }
};

export const fetchReviews = (spotId) => async (dispatch) => {
    dispatch({ type: FETCH_REVIEWS });
  
    try {
      const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
      const data = await response.json();
  
      dispatch({ type: FETCH_REVIEWS_SUCCESS, payload: data.Reviews });
    } catch (error) {
      console.error("Error fetching reviews:", error);
      dispatch({ type: FETCH_REVIEWS_FAILURE, payload: error });
    }
  };

  export const postReview = (spotId, reviewData) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });

        if (response.ok) {
            const data = await response.json();
            dispatch({ type: POST_REVIEW_SUCCESS, payload: data });
            dispatch(fetchReviews(spotId));
            return data;
        }
    } catch (error) {
        console.error("Error posting review:", error);
        dispatch({ type: POST_REVIEW_FAILURE, payload: error });
        return { error };
    }
};

const initialState = {
    spots: [],
    selectedSpot: null,
    reviews: [],
    loading: false,
    error: null,
};

const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SPOTS:
            return { ...state, spots: action.payload };
        case FETCH_SPOT:
            return { ...state, loading: true, error: null };
        case FETCH_SPOT_SUCCESS:
            return { ...state, loading: false, selectedSpot: action.payload };
        case FETCH_SPOT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CREATE_SPOT:
            return { ...state, loading: true, error: null };
        case CREATE_SPOT_SUCCESS:
            return { ...state, loading: false, spots: [...state.spots, action.payload] };
        case CREATE_SPOT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_SPOT_SUCCESS:
            return {...state, spots: state.spots.map(spot => spot.id === action.payload.id ? action.payload : spot), selectedSpot: action.payload, }
        case DELETE_SPOT:
            return { ...state, loading: true, error: null };
        case DELETE_SPOT_SUCCESS:
            return {...state, loading: false, spots: state.spots.filter((spot) => spot.id !== action.payload) };
        case DELETE_SPOT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case FETCH_REVIEWS:
            return { ...state, loading: true, error: null };
        case FETCH_REVIEWS_SUCCESS:
            return { ...state, loading: false, reviews: action.payload };
        case FETCH_REVIEWS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case POST_REVIEW_SUCCESS:
            return { ...state, reviews: [...state.reviews, action.payload] };
        case POST_REVIEW_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default spotReducer;
