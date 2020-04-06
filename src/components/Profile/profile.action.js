import { Api, endpoints } from "../../module/API";
import getUserData from "../../module/general-services/getUserData";

import { getProfile, setPageLoading, getPosts } from "./profile.reducer";

export const fetchPosts = (params) => (dispatch) => {
  dispatch(setPageLoading({ posts: true }));

  Api.get(endpoints.posts, { params })
    .then(({ data }) => {
      dispatch(getPosts(data));
    })
    .finally(() => dispatch(setPageLoading({ posts: false })));
};

export const fetchSelectedUserDetail = (params) => (dispatch) => {
  dispatch(setPageLoading({ mainPage: true }));

  getUserData(params)
    .then(([userData]) => dispatch(getProfile(userData)))
    .finally(() => dispatch(setPageLoading({ mainPage: false })));
};