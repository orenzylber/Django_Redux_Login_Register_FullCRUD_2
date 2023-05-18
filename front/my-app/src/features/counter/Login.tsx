import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginAsync, selectLogged, aboutAsync, contactAsync, logout } from './loginSlice'

const Login = () => {
    const dispatch = useAppDispatch();
    const logged = useAppSelector(selectLogged);
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    // this method was added to help clear the fields after the login
    const handleLogin = () => {
        dispatch(loginAsync({ username, password }));
        setusername("");
        setpassword("");
    };

    return (
        <div style={{ backgroundColor: "brown", padding: '1rem' }}>
            <h1 style={{ color: "wheat" }}>Login</h1>
            User name: <input value={username} onChange={(e) => setusername(e.target.value)} />
            Password: <input value={password} onChange={(e) => setpassword(e.target.value)} />

            {logged ? <button onClick={() => dispatch(logout())}>Logout</button> :
            // <button onClick={() => dispatch(loginAsync({ username, password}))}>Login</button>} this line was changed accordingly with the added method
                <button onClick={handleLogin}>Login</button>}

            <button onClick={() => dispatch(aboutAsync())}>About</button>
            <button onClick={() => dispatch(contactAsync())}>Contact</button>
        </div>
    )
}

export default Login