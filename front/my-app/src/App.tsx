import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './features/counter/Login';
import Register from './features/counter/Register';
import CRUD from './features/counter/CRUD';
import { selectLogged } from './features/counter/loginSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';

function App() {
  const logged = useAppSelector(selectLogged);
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
        <hr></hr>
        {logged ? <CRUD></CRUD> : <Register></Register>}
      </header>
    </div>
  );
}

export default App;
