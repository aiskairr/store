import { useSelector } from "react-redux";
import scss from "./basketPage.module.scss";
import Header from "../../components/header/Header";
import BasketCard from "./basketCard/BasketCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setOrder } from "../../Api/Api";

const BasketPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const BasketData = useSelector((state) => state.basket.basketProducts);
  console.log(BasketData);
  const navigate = useNavigate();
  if (BasketData.length == 0) {
    navigate("/");
  }
  const arr = BasketData.reduce(
    (acc, num) => acc + num.regular_price.value * num.amount,
    0
  ).toFixed(2);
  const data = {
    name: name,
    phone: phone,
  };
  const submit = (e) => {
    e.preventDefault();
    setOrder(data);
  };
  return (
    <>
      <Header />
      <div className={scss.basket}>
        <div className={scss.basket_wrapper}>
          <h1>Корзина</h1>
          {BasketData.map((item) => {
            return <BasketCard key={item.id} {...item} />;
          })}
        </div>
        <div className={scss.basket_price}>
          <div className={scss.price_wrapper}>
            <h3>Итого</h3>
            <h2>{arr} USD</h2>
          </div>
          <div className={scss.price_wrapper}>
            <div>
              <p>
                {BasketData.length}{" "}
                {BasketData.length == 1 ? "товар" : "товара"}
              </p>
            </div>
            <p></p>
          </div>
          <form onSubmit={submit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Напишите Имя"
              type="text"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Напишите ваш номер телефона"
              type="text"
            />
            <input
              type="submit"
              value={`Нажмите чтобы оформить ${
                BasketData.length ? BasketData.length : "0"
              } товара`}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
