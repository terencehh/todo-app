import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.css'

const Header = () => {
  return (
    <header className="header" >
      <h1>TodoList</h1>
      <Link className="link" to="/">Home</Link> | <Link className="link" to="/about">About</Link>
    </header>
  )
}

export default Header;