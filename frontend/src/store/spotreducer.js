
import { csrfFetch } from "./csrf";

export const FETCH_SPOTS = 'FETCH_SPOTS';
export const CREATE_SPOT = 'CREATE_SPOT';
export const CREATE_SPOT_SUCCESS = 'CREATE_SPOT_SUCCESS';
export const CREATE_SPOT_FAILURE = 'CREATE_SPOT_FAILURE';

export const fetchSpots = () => async (dispatch) => {
    try {
        const response = await csrfFetch('/api/spots');
        const data = await response.json();

        dispatch({ type: FETCH_SPOTS, payload: data.Spots });
    } catch (error) {
        console.error("Error fetching spots:", error);
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

const initialState = {
    spots: [],
    loading: false,
    error: null,
};

const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SPOTS:
            return { ...state, spots: action.payload };
        case CREATE_SPOT:
            return { ...state, loading: true, error: null };
        case CREATE_SPOT_SUCCESS:
            return { ...state, loading: false, spots: [...state.spots, action.payload] };
        case CREATE_SPOT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default spotReducer;
