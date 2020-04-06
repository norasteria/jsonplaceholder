import { combineReducers } from "redux";
import usersReducer from "../components/Users/users.reducer";
import profileReducer from "../components/Profile/profile.reducer";

export default combineReducers({
  usersProps: usersReducer,
  profileProps: profileReducer,
});
