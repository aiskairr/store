import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import scss from "../products/Product.module.scss";

const Pagination = ({ data, itemsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={scss.product_wrapper}>
      <div className={scss.main_right}>
        {currentItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <ul className={scss.paginate_wrapper}>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={
            currentPage == 1 ? scss.nonActivePrevArrow : scss.prevArrow
          }
          disabled={currentPage == 1 ? true : false}
        >
          {currentPage == 1 ? (
            <img src="./images/disabledArrow.svg" alt="arrow" />
          ) : (
            <img src="./images/Vector.svg" alt="arrow" />
          )}
        </button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            id={number}
            onClick={handlePageClick}
            className={currentPage === number ? scss.active : scss.nonActive}
          >
            {number}
          </li>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
          className={
            currentPage === pageNumbers[pageNumbers.length - 1]
              ? scss.nonActiveNextArrow
              : scss.nextArrow
          }
        >
          {currentPage === pageNumbers[pageNumbers.length - 1] ? (
            <img src="./images/disabledArrow.svg" alt="arrow" />
          ) : (
            <img src="./images/Vector.svg" alt="arrow" />
          )}
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
