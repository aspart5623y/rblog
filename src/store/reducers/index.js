import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import { authorApi } from "../../features/api/authorApiSlice";
import { postApi } from "../../features/api/postApiSlice";


const rootReducer = combineReducers({
    ui: uiSlice.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [authorApi.reducerPath]: authorApi.reducer,
})


export default rootReducer;