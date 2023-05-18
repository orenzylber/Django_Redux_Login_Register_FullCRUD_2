import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Product } from '../../Models/Product';
import {getAll,add,deleteProd, updateProd } from './CRUDAPI';

export interface loginState {
    logged: boolean,
    products: Product[],
    refresh: boolean    
}

const initialState: loginState = {
    logged: false,
    products: [],
    refresh: false
};

export const getAllAsync = createAsyncThunk(
    'CRUD/getAll',
    async () => {
        console.log("test getAllAsync");
        const response = await getAll();
        return response.data;
    }
);

export const addAsync = createAsyncThunk(
    'CRUD/add',
    async (product:Product) => {
        console.log("test addAsync");
        const response = await add(product);
        return response.data;
    }
);

export const delAsync = createAsyncThunk(
    'CRUD/deleteProd',
    async (id:number) => {
        console.log("test delAsync",id);
        const response = await deleteProd(id);
        return id;
    }
);

export const updAsync = createAsyncThunk(
    'CRUD/updateProd',
    async (product:Product) => {
        console.log("test updAsync",product);
        const response = await updateProd(product);
        return response.data;
    }
);

// export const updAsync = createAsyncThunk(
//     'CRUD/add',
//     async (product:Product) => {
//         console.log("test ");
//         const response = await add(product);
//         return response.data;
//     }
// );

export const CRUDSlice = createSlice({
    name: 'CRUD',
    initialState,
    reducers: {
        logout: (state) => {
            state.logged=false
            sessionStorage.clear()
        },
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(getAllAsync.fulfilled, (state, action) => {
                console.log(action.payload);
                state.products=action.payload
            }).addCase(addAsync.fulfilled, (state, action) => {
                console.log(action.payload);
                 state.products.push(action.payload)
            }).addCase(delAsync.fulfilled, (state, action) => {
                console.log(action.payload);
                 state.products= state.products.filter(pro => pro.id != action.payload)
            }).addCase(updAsync.fulfilled, (state, action) => {
                state.refresh =! state.refresh
            })
    },
});

export const { logout } = CRUDSlice.actions;
export const selectProducts = (state: RootState) => state.CRUD.products;
export const selectRefresh = (state: RootState) => state.CRUD.refresh;
export default CRUDSlice.reducer;