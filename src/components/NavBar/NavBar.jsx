import React from 'react';
import "./NavBar.css";
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (   <nav className='barra-navegacion'>
    <ul>
      <Link to="/" className='link'>Inicio</Link>
      <Link to="/nosotros" className='link'>Nosotros</Link>
      <Link className='link'><CardWidget /></Link>
    </ul>
  </nav>
  );
};
export default NavBar