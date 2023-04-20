import { useDispatch, useSelector } from "react-redux";
import scss from "./BasketCard.module.scss";
import { useEffect, useState } from "react";
import { deleteProduct, getCount } from "../../../redux/slices/BasketSlice";

const BasketCard = ({ regular_price, image, title, id, amount = 1 }) => {
  const disaptch = useDispatch();
  useEffect(() => {
    if (amount == 0) {
      disaptch(deleteProduct(id));
    }
  }, [amount]);
  return (
    <div className={scss.basket_card_wrapper}>
      <img src={image} alt="product" />
      <p>{title}</p>
      <div className={scss.counter}>
        <button
          onClick={() => {
            disaptch(getCount({ amount: amount - 1, id }));
          }}
        >
          {amount == 1 ? <img src="./images/delete.png" alt="delete" /> : "-"}
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            disaptch(getCount({ amount: amount + 1, id }));
          }}
        >
          +
        </button>
      </div>
      <h2>
        {regular_price.value.toFixed(2)} {regular_price.currency}
      </h2>
    </div>
  );
};

export default BasketCard;
