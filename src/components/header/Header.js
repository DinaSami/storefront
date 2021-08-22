
import React from 'react';
import './Header.css';
import Paper from '@material-ui/core/Paper'

function Header(){
  return(
    <Paper>
    <header className = "App-header" >
      <h1>STORE APP</h1>
      <nav>
        <p>ADD TO Cart(0)</p>
      </nav>
      </header>
      </Paper>
  )
}

export default Header;