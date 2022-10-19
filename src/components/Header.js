import HeaderButton from "./HeaderButton";
import pizzaLogo from "../img/pizza-logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={pizzaLogo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <HeaderButton outline />
      </div>
    </div>
  );
}

export default Header;
