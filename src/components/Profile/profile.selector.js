export const userProfileData = ({ profileProps }) => profileProps.userProfile;

export const userProfileLoading = ({ profileProps }) =>
  profileProps.loading.mainPage;

export const userPosts = ({ profileProps }) => profileProps.posts;

export const userPostsLoading = ({ profileProps }) =>
  profileProps.loading.posts;
