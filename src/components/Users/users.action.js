import getUserData from "../../module/general-services/getUserData";
import { getUsersList } from "./users.reducer";

export const fetchUsersList = () => (dispatch) => {
  getUserData().then((userData) => dispatch(getUsersList(userData)));
};
