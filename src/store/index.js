import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import linkReducer from './slice/linkSlice'
import modalReducer from './slice/modalSlice'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    links: linkReducer,
    modal: modalReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:
        persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER]
        }
    })
})
export const persistor = persistStore(store)