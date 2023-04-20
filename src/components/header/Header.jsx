import { Link, useLocation, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import styles from "../main/Main.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const basketInfo = useSelector((state) => state.basket.basketProducts);
  const brands = useSelector((state) => state.product.brands);
  const brandsMaping = brands.map((item) => (
    <label key={item.id}>
      <input type="checkbox" />
      {item.title}
    </label>
  ));
  const navigate = useNavigate();

  return (
    <header className={scss.header}>
      <div className={scss.logoWrapper}>
        <button
          className={`${active ? scss.activeBurger : scss.burgerMenu} ${
            location.pathname == "/basket" ? scss.disabled : ""
          }`}
          onClick={() => setActive(!active)}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div
          onClick={() => setActive(false)}
          className={active ? scss.menu : scss.nonActiveMenu}
        >
          <div onClick={(e) => e.stopPropagation()} className={scss.whiteback}>
            <div className={scss.main_left}>
              <h3>Бренды</h3>
              {brandsMaping}
              <button>Применить</button>
            </div>
          </div>
        </div>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <button
        disabled={basketInfo.length == 0 ? true : false}
        onClick={() => navigate("/basket")}
        className={scss.basket_wrapper}
      >
        <img src="./images/basket.png" alt="basket" />
        {basketInfo.length ? (
          <div className={scss.count}>
            <p>{basketInfo.length}</p>
          </div>
        ) : (
          ""
        )}
      </button>
    </header>
  );
};

export default Header;
