import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="w-[400px] p-2 mb-2 mx-2 border rounded-md flex items-center gap-5 cursor-pointer">
      <img
        className="w-[200px] h-[200px] object-contain"
        src={product.image}
        alt="Image"
          />
          <div>
              <span>{product.price} $</span>
              <h4 className="font-bold">{product.title}</h4>
          </div>
    </div>
  );
};

export default ProductItem;
