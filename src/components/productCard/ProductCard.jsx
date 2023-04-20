import { useDispatch } from "react-redux";
import scss from "./ProductCard.module.scss";
import { getProducts } from "../../redux/slices/BasketSlice";

const ProductCard = ({image, title, regular_price, id}) => {
  const dispatch = useDispatch()
  const handleSet = () => {
    dispatch(getProducts({image, title, regular_price, id, amount: 1}))
  }
  return (
    <div className={scss.productCard_wrapper}>
      <div className={scss.image}>
        <img src={image} alt="card_img" />
      </div>
      <div className={scss.desc}>
        <div>
        <p>{title}</p>
        <p id={scss.price}>{`${regular_price.value} ${regular_price.currency}`} </p>
        </div>
        <button onClick={handleSet}>В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
