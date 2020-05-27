import { SET_USER, SET_LOGOUT, SET_LOADING   } from '../actions/types';

let initialState = {
  authenticated: false, 
  loading: false,
  token: null,
  userData: null
};

if(localStorage.auth) {
  let data = JSON.parse(localStorage.getItem("auth"));
  initialState = {
    authenticated: true,
    token: data.token,
    userData: data.userData, 
    loading: false
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
        return { 
          ...state,
          authenticated: true,
          token: action.payload.token,
          userData: action.payload.userData,
        };
    case SET_LOGOUT:
        return {
          ...state,
          userData: null,
          authenticated: false,
          token: null, 
        }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    } 
    default:
        return state;
  }
}
