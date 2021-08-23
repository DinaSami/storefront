
import React from 'react';
import './Header.css';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';


function Header(){
  const state = useSelector(state => state);

  return(
    <Paper>
    <header className = "header" >
      <h1>STORE APP</h1>
      <nav>
        <p>CART ({state.cart.initialCount})</p>
      </nav>
      </header>
      </Paper>
  )
}

export default Header;