import { useSelector } from "react-redux";
import Pagination from "../Pagination";

const Product = () => {
  const products = useSelector((state) => state.product.products);


  return <Pagination data={products} />;
};

export default Product;
