import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllAsync, addAsync, selectProducts, delAsync, updAsync, selectRefresh } from './CRUDSlice'

const CRUD = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const refreshFlag = useAppSelector(selectRefresh);
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    useEffect(() => {
        dispatch(getAllAsync())
    }, [refreshFlag])
    
    return (
        <div>
           <h1> CRUD</h1>
            Desc: <input onChange={(e)=>setdesc(e.target.value)}/> | 
            price: <input onChange={(e)=>setprice(+e.target.value)}/>
            <button onClick={() => dispatch(addAsync({desc,price}))}>Add Data</button> 
            <hr/>
            <h2>Number of items: {products.length}</h2>
            <hr/>
            {products.map((prod,ind) =>  <div key={ind}>Desc: {prod.desc}, Price: {prod.price}
            <button onClick={() => dispatch(delAsync(prod.id || 0))}> Delete Data </button>
            <button onClick={() => dispatch(updAsync({id:(prod.id || 0), desc, price}))}> Update Data </button>
              </div> )}
        </div>
    )
}

export default CRUD
