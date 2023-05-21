import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productReducer,
  productDetailReducer,
} from "./Redux/Reducer/productReducer";

import { userReducer } from "./Redux/Reducer/userReducer";

//root_reducer
const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailReducer,
  user: userReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
