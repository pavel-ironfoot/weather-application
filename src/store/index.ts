import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";


const rootReducer = combineReducers({
    allCards: cardsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;