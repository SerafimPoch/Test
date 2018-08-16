import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";
import store from "./store";

export default combineReducers({
  form: formReducers,
  store
});
