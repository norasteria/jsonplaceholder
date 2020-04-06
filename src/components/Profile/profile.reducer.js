import { createAction, createReducer } from "redux-act";
import update from "immutability-helper";

const INITIAL_STATE = {
  userProfile: {},
  posts: [],
  comments: [],
  loading: {
    mainPage: false,
    profile: false,
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
  },
  INITIAL_STATE
);

export { getProfile, setPageLoading };
