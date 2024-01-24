import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="w-[340px] p-2 border rounded-md flex gap-3 flex-col justify-center items-center cursor-pointer">
      <img
        className="w-[200px] h-[200px] object-contain"
        src={product.image}
        alt="Image"
          />
          <div className="text-center">
              <span>{product.price} $</span>
              <h4 className="font-bold">{product.title}</h4>
          </div>
    </div>
  );
};

export default ProductItem;
