import React from "react";

const DetailComp = ({ productDetail }) => {
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
      </div>
    </div>
  );
};

export default DetailComp;
