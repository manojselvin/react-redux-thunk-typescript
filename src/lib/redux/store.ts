import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import GlobalsReducer from "./reducers/globals";

export const store = configureStore({
    reducer: {
        globals: GlobalsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;