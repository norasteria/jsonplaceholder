import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });

  middleware.push(logger);
}

export default createStore(rootReducer, {}, applyMiddleware(...middleware));
