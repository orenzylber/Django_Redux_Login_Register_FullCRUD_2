import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { register } from './registerAPI';

export interface loginState {
    logged: boolean,
    token: string,
}

const initialState: loginState = {
    logged: false,
    token: ''
};

export const registerAsync = createAsyncThunk(
    'register/register',
    async (user: any) => {
        console.log(user);
        const response = await register(user);
        return response.data;
    }
);


export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        logout: (state) => {
            state.logged = false
            state.token = ""
            sessionStorage.clear()
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.fulfilled, (state, action) => {
                console.log(action.payload)
            })
    },
});

export const { logout } = registerSlice.actions;
export const selectLogged = (state: RootState) => state.register.logged;
export default registerSlice.reducer;
