import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[340px] p-2 border rounded-md flex gap-3 flex-col justify-center items-center cursor-pointer"
    >
      <img
        className="w-[200px] h-[200px] object-contain"
        src={product.image}
        alt="Image"
      />
      <div className="text-center">
        <div>{product.price} <span className="text-sm">$</span></div>
        <h4 className="font-bold">{product.title}</h4>
      </div>
    </div>
  );
};

export default ProductItem;
