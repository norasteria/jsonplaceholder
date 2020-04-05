import axios from "axios";

export default (() => {
  const Api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

  Api.defaults.headers.post["Content-type"] = "application/json; charset=UTF-8";
  Api.defaults.headers.put["Content-type"] = "application/json; charset=UTF-8";
  Api.defaults.headers.patch["Content-type"] =
    "application/json; charset=UTF-8";

  return Api;
})();
