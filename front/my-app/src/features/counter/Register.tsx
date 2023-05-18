import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLogged, registerAsync } from './registerSlice'

const Register = () => {
    const dispatch = useAppDispatch();
    const logged = useAppSelector(selectLogged);
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    return (
        <div>
            Register
            User name<input onChange={(e)=>setusername(e.target.value)}/>
            Password<input onChange={(e)=>setpassword(e.target.value)}/>
            Email<input onChange={(e)=>setemail(e.target.value)}/>

            <button onClick={() => dispatch(registerAsync({ username, password, email}))}>Register</button>
        </div>
    )
}

export default Register
