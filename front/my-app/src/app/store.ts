import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/counter/loginSlice';
import registerReducer from '../features/counter/registerSlice';
import CRUDReducer from '../features/counter/CRUDSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer,
    register:registerReducer,
    CRUD:CRUDReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
