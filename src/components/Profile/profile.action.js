import { Api, endpoints } from "../../module/API";
import getUserData from "../../module/general-services/getUserData";

import { getProfile, setPageLoading } from "./profile.reducer";

export const fetchPosts = (params) => (dispatch) => {
  Api.get(endpoints.posts, { params }).then(({ data }) => {
    //
  });
};

export const fetchSelectedUserDetail = (params) => (dispatch) => {
  dispatch(setPageLoading({ mainPage: true }));

  getUserData(params)
    .then(([userData]) => dispatch(getProfile(userData)))
    .finally(() => dispatch(setPageLoading({ mainPage: false })));
};
