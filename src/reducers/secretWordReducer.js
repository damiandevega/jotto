import { actionTypes } from '../actions';

export default (state = null, action) => {
  switch (action.types) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}