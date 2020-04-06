import { Api, endpoints } from "../../module/API";
import getUserData from "../../module/general-services/getUserData";

import {
  getProfile,
  setPageLoading,
  getPosts,
  getComment,
  getAlbumList,
  getPhotoByAlbum,
} from "./profile.reducer";

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

export const fetchComments = (postId) => (dispatch) => {
  Api.get(endpoints.comments, { params: { postId } }).then(({ data }) =>
    dispatch(getComment({ [postId]: data }))
  );
};

export const fetchAlbums = (params) => (dispatch) => {
  Api.get(endpoints.albums, { params }).then(({ data }) =>
    dispatch(getAlbumList(data))
  );
};

export const fetchPhotoByAlbumId = (albumId) => (dispatch) => {
  Api.get(endpoints.photos, { params: { albumId } }).then(({ data }) =>
    dispatch(getPhotoByAlbum(data))
  );
};
