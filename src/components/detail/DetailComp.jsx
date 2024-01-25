import React, { useState } from "react";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-5">
      <img
        className="w-[500px] h-[500px] object-contain"
        src={productDetail?.image}
        alt="Image"
      />
      <div>
        <div className="text-3xl font-semibold">{productDetail?.title}</div>
        <div className="text-xl font-medium my-2">
          {productDetail?.description}
        </div>
        <div className="my-2 text-xl text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="font-bold text-3xl">
          {productDetail?.price} <span className="text-lg">$</span>
        </div>
        <div className="flex items-center justify-center gap-5 my-4 border-2 rounded-md w-max px-2">
          <div
            onClick={decrement}
            className="text-5xl cursor-pointer font-light select-none"
          >
            -
          </div>
          <input
            className="w-10 text-3xl font-semibold outline-none text-center"
            type="text"
            value={quantity}
          />
          <div
            onClick={increment}
            className="text-4xl cursor-pointer select-none"
          >
            +
          </div>
        </div>
        <div className="border w-[200px] h-16 my-4 rounded-md bg-gray-200 flex items-center justify-center cursor-pointer">
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
