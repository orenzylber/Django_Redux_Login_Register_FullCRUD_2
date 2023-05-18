import axios from 'axios'
import { Product } from '../../Models/Product';

export function getAll() {
    console.log("test API");
    return new Promise<{ data: any }>((resolve) =>
        axios.get("http://127.0.0.1:8000/product/").then(res => resolve({ data: res.data }))
    );
}

export function add(product:Product) {
    console.log("add API");
    return new Promise<{ data: any }>((resolve) =>
        axios.post("http://127.0.0.1:8000/product/",product).then(res => resolve({ data: res.data }))
    );
}

export function deleteProd(productId:number) {
    console.log("del API",productId);
    return new Promise<{ data: any }>((resolve) =>
        axios.delete(`http://127.0.0.1:8000/product/${productId}`).then(res => resolve({ data: res.data }))
    );
}

export function updateProd(product:Product) {
    console.log("upd API",product);
    return new Promise<{ data: any }>((resolve) =>
        axios.put(`http://127.0.0.1:8000/product/${product.id}`,product).then(res => resolve({ data: res.data }))
    );
}
