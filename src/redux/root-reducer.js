import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import DirectoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
