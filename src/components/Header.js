import HeaderButton from "./HeaderButton";
import pizzaLogo from "../img/pizza-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <Link to="/cart">
          <HeaderButton outline />
        </Link>
      </div>
    </div>
  );
}

export default Header;
