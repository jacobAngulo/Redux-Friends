import { REQUEST_IN_PROGRESS, SUCCESS } from "../actions";

const initialState = {
  friends: [],
  fetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IN_PROGRESS:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};
