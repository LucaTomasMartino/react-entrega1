import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./ListContainer.css";
const ListContainer = () => {
  return (
    <div className='carrito'> <ShoppingCartIcon />Productos dentro del carrito :
    <span> 0 </span>
    </div>
  )
}

export default ListContainer