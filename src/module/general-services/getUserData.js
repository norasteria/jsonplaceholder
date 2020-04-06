import { Api, endpoints } from "../API";

export default (params = {}) =>
  Api.get(endpoints.users, { params }).then(({ data }) => data);
