import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Auth/authReducer";
import { persistStore } from "redux-persist"
const store = configureStore({
    reducer:{
        auth: rootReducer,
    }
});
const persistor = persistStore(store);
export { store, persistor };