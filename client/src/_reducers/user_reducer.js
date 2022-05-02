import { LOGIN_USER } from '../_actions/types'; 

// eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }
      // eslint-disable-next-line
      break;
  
      default:
      return state;
  }
}