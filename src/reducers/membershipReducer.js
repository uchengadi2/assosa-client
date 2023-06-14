import _ from "lodash";
import {
  FETCH_MEMBERSHIP,
  FETCH_MEMBERSHIPS,
  EDIT_MEMBERSHIP,
  DELETE_MEMBERSHIP,
  CREATE_MEMBERSHIP,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEMBERSHIPS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_MEMBERSHIP:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_MEMBERSHIP:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_MEMBERSHIP:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_MEMBERSHIP:
      return _.omit(state, action.payload); //note that payload is just the city id
    default:
      return state;
  }
};
