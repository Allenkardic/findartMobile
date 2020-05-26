/** @format */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
// import storage from "redux-persist/lib/storage";

// files from my reducers stuffs
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import artworkReducer from "./artworkReducer";
import uiReducer from "./uiReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"]
};

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  user: userReducer,
  artwork: artworkReducer
});

export default persistReducer(persistConfig, rootReducer);
