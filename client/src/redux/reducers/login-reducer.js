const USER_LOADING = "USER_LOADING";
const SET_CURRENT_USER = "SET_CURRENT_USER";

const isEmpty = require('is-empty');
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default loginReducer;