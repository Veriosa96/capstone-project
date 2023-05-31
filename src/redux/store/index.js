// import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
// import { encryptTransform } from "redux-persist-transform-encrypt";


import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "../reducer";

const store = configureStore ({
    reducer: mainReducer });
export default store


// const persistConfig = {
//     key: "root",
//     storage : storage,
//     transforms: [
//     encryptTransform({ secretKey: process.env.APP_JWT_SECRET}),
//     ],
// };

// const rootReducer = combineReducers({
//     reducer: mainReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);

