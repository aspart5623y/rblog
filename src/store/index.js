import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { authorApi } from "../features/api/authorApiSlice";
import { postApi } from "../features/api/postApiSlice";
import rootReducer from "./reducers";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ui']
}


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([postApi.middleware, authorApi.middleware]),
});


export default store;
export const persistor = persistStore(store)
