import { createAction, createReducer } from "redux-act";
import update from "immutability-helper";

const INITIAL_STATE = {
  userList: [],
};

const [getUsersList] = ["GET_USERS_LIST"].map(createAction);

export default createReducer(
  {
    [getUsersList]: (state, payload) =>
      update(state, { userList: { $set: payload } }),
  },
  INITIAL_STATE
);

export { getUsersList };
