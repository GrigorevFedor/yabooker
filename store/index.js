import {combineReducers, configureStore} from '@reduxjs/toolkit'
import basketReducer from "./basketSlice";
import checkoutReducer from "./checkoutSlice";
import tourReducer from "./tourSlice";
import filterToursReducer from './filterToursSlice';
import {persistReducer, persistStore} from 'redux-persist'
import {encryptTransform} from "redux-persist-transform-encrypt";
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    basket: basketReducer,
    tour: tourReducer,
    checkout: checkoutReducer,
    filterTours: filterToursReducer
});

const persistConfig = {
    key: 'Tour',
    storage: storage,
    transforms: [
        encryptTransform({
            secretKey: 'my-super-secret-key',
            onError: function (error) {
            },
        }),
    ],
};

const rootReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST"],
        }
        },
    ),
    devTools: true,
})
export const persistor = persistStore(store)

export default {store, persistor};
