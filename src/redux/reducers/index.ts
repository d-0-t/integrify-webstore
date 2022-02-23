import { combineReducers } from "redux";
import keywordReducer from "./keywordReducer";
import categoryReducer from "./categoryReducer";
import themeReducer from "./themeReducer";
import cartReducer from "./cartReducer";
import shippingReducer from "./shippingReducer";
import oneProductReducer from "./oneProductReducer";
import allProductsReducer from "./allProductsReducer";
import quantityReducer from "./quantityReducer";

const rootReducer = combineReducers({
  keywordReducer,
  categoryReducer,
  themeReducer,
  cartReducer,
  shippingReducer,
  oneProductReducer,
  allProductsReducer,
  quantityReducer
});

export default rootReducer;
