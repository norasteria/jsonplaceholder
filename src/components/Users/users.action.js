import { Api, endpoints } from "../../module/API";
import { getUsersList } from "./users.reducer";

export const fetchUsersList = () => (dispatch) => {
  Api.get(endpoints.users).then(({ data }) => {
    dispatch(getUsersList(data));
  });
};
