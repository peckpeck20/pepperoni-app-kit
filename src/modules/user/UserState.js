import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

// Initial state
const initialState = Map({
  auth: false,
  loggingIn: false,
  user: '',
});

//Actions
const REQUEST_LOGIN = 'REQUEST_LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

//Action creators
export const requestLogin = () => ({
  type:REQUEST_LOGIN
});

export const loginSuccess = (user) => ({
  type:LOGIN_SUCCESS,
  user:user
});

export const loginFail = () => ({
  type:LOGIN_FAIL
});

export const logout = () => ({
  type:LOGOUT
});

export const login = () => {
  //testing data for validation
  const correctEmail = "a";
  const correctPassword = "a";

  return dispatch => {
    dispatch(requestLogin());
  }
};

//Reducer
export default function UserStateReducer(state= initialState,action = {}) {
  switch ( action.type) {
    case REQUEST_LOGIN:
      return state
        .set('loggingIn', true);

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn : false,
        auth : true,
        user : action.user
      };
    
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false
      };
    case LOGOUT:
      return initialState
    
    default: 
      return state;
    
  }
}




