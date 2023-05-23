import { combineReducers } from "@reduxjs/toolkit";
import signupSlice from "./reducers/signupSlice";
import authSlice from "./reducers/authSlice";
import profileSlice from "./reducers/profileSlice";
import themeSlice from "./reducers/themeSlice";



const rootReducer = (asyncReducers) => (state, action) => {
    const combineReducer = combineReducers({
        signup: signupSlice,
        auth: authSlice,
        profile: profileSlice,
        theme: themeSlice
    });

    return combineReducer(state, action);
}

export default rootReducer;