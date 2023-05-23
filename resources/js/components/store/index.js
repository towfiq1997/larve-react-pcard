import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";

const middlewares = []
const persist_config = {
    key: 'pcard',
    keyPrefix: '',
    storage,
    whitelist: ['auth']
}

const store = configureStore({
    reducer: persistReducer(persist_config, rootReducer()),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(middlewares),
    devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);
export default store;