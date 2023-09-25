import "./Header.css";
import img from "./diegotepng.png";
const Header = () => {
  return (
    <div className="Header">
      <img src={img} alt="diego logo"/>
        <h1>TU CAMISETA</h1>
        <h2>Tienda Online</h2>
    </div>
  )
};

export default Header;