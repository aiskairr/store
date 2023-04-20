import { useSelector } from "react-redux";
import scss from "../main/Main.module.scss"

const Aside = () => {
  const brands = useSelector((state) => state.product.brands);

  const brandsMaping = brands.map((item) => (
    <label key={item.id}>
      <input type="checkbox" />
      {item.title}
    </label>
  ));
  return (
    <div className={scss.main_left}>
      <h3>Бренды</h3>
      {brandsMaping}
      <button>Применить</button>
    </div>
  );
};

export default Aside;
