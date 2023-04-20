import { useEffect } from "react";
import { getBrands, getProducts } from "../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { setBrands, setProducts } from "../../redux/slices/ProductSlice";
import scss from "./Main.module.scss";
import Product from "../products/Product";
import Aside from "../aside/Aside";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts().then((res) => dispatch(setProducts(res.data)));
    getBrands().then((res) => dispatch(setBrands(res.data)));
  }, []);
  
 
  return (
    <main className={scss.main}>
      <Aside />
      <Product />
    </main>
  );
};

export default Main;
