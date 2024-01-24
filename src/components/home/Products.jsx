import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import ProductItem from "./ProductItem";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="w-5/6">
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {products?.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
