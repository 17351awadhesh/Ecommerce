import { FaBars, FaShoppingCart } from "react-icons/fa";
const Header = (props) => {
  return (
    <header>
    <div className="container">
      <div className="dFlex justifyBetween flexNoWrap headerInner alignCenter">
        <div className="HamburgerIcon" onClick={props.toggleSidebar}><FaBars /></div>
        <div className="logo">
          <a href="#">Venia</a>
        </div>
        <div className="menuWrapper">
          <ul className="dFlex justifyBetween flexNoWrap">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">Women</a>
            </li>
            <li className="">
              <a href="#">Men</a>
            </li>
            <li className="">
              <a href="#">Smart Gear</a>
            </li>
            <li className=" active">
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>
        <div className="shoppingCartWrapper relative">
          <FaShoppingCart className="shoppingCart"/>
          <div className="cartCount absolute dFlex justifyBetween alignCenter justifyCenter">10</div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;
