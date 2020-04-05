import { combineReducers } from "redux";
import usersReducer from "../components/Users/users.reducer";

export default combineReducers({
  usersProps: usersReducer,
});
