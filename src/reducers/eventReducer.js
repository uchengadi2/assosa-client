import _ from "lodash";
import {
  FETCH_EVENTS,
  FETCH_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  CREATE_EVENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_EVENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EVENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_EVENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_EVENT:
      return _.omit(state, action.payload); //note that payload is just the city id
    default:
      return state;
  }
};
