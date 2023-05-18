import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { login,testAbout,testContact } from './loginAPI';

export interface loginState {
    logged: boolean,
    token: string,
}

const initialState: loginState = {
    logged: false,
    token: ''
};

export const loginAsync = createAsyncThunk(
    'login/login',
    async (user: any) => {
        console.log(user);
        const response = await login(user);
        return response.data;
    }
);

export const aboutAsync = createAsyncThunk(
    'login/about',
    async () => {
        const token:string =sessionStorage.getItem('token')||''
        const response = await testAbout(token);
        return response.data;
    }
);
export const contactAsync = createAsyncThunk(
    'login/contact',
    async () => {
        const response = await testContact();
        return response.data;
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.logged=false
            state.token =""
            sessionStorage.clear()
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                if(action.payload.access.length > 0)
                {
                    state.logged=true
                    state.token =action.payload.access
                    sessionStorage.setItem('token',state.token)
                }
            }).addCase(contactAsync.fulfilled, (state, action) => {
                console.log(action.payload);
            }).addCase(aboutAsync.fulfilled, (state, action) => {
                console.log(action.payload);
            })
    },
});

export const { logout } = loginSlice.actions;
export const selectLogged = (state: RootState) => state.login.logged;
export default loginSlice.reducer;
