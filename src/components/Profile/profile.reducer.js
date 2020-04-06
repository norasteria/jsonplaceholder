import { createAction, createReducer } from "redux-act";
import update from "immutability-helper";

const INITIAL_STATE = {
  userProfile: {},
  posts: [],
  comments: {},
  albums: [],
  photos: [],
  loading: {
    mainPage: false,
    posts: false,
    album: false,
  },
};

const [getProfile, getPosts, getComment, setPageLoading, getAlbumList] = [
  "GET_PROFILE",
  "GET_POSTS",
  "GET_POSTS_COMMENT",
  "SET_PAGE_LOADING",
  "GET_ALBUM_LIST",
].map(createAction);

export default createReducer(
  {
    [getProfile]: (state, payload) =>
      update(state, { userProfile: { $set: payload } }),
    [getPosts]: (state, payload) => update(state, { posts: { $set: payload } }),
    [setPageLoading]: (state, payload) =>
      update(state, { loading: { $merge: payload } }),
    [getComment]: (state, payload) =>
      update(state, { comments: { $merge: payload } }),
    [getAlbumList]: (state, payload) =>
      update(state, { albums: { $set: payload } }),
  },
  INITIAL_STATE
);

export { getProfile, setPageLoading, getPosts, getComment, getAlbumList };
