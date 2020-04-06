import { createAction, createReducer } from "redux-act";
import update from "immutability-helper";

const INITIAL_STATE = {
  userProfile: {},
  posts: [],
  comments: {},
  loading: {
    mainPage: false,
    posts: false,
    album: false,
  },
};

const [getProfile, getPosts, getComment, setPageLoading] = [
  "GET_PROFILE",
  "GET_POSTS",
  "GET_POSTS_COMMENT",
  "SET_PAGE_LOADING",
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
  },
  INITIAL_STATE
);

export { getProfile, setPageLoading, getPosts, getComment };
