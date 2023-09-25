import React from 'react';
import "./NavBar.css";
import CardWidget from '../CardWidget/CardWidget';
const NavBar = () => {
  return ( 
<nav className='barra-navegacion'>
    <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Nosotros</a></li>
        <li ><a href=""><CardWidget /></a></li>
    </ul>
</nav>
  );
};
export default NavBar