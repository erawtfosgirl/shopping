import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartItem = ({ cart }) => {
    const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-5 border w-[700px] p-3 my-5 rounded-md">
      <img
        className="w-[100px] h-[100px] object-contain my-5"
        src={cart?.image}
        alt="Image"
      />
      <div className="flex flex-col gap-3">
        <div className="font-bold">{cart?.title}</div>
        <div className="text-gray-400">{cart?.price}$ ({cart?.quantity})</div>
        <div onClick={()=>dispatch(removeFromCart(cart?.id))} className="rounded-md bg-red-600 w-20 text-white flex items-center justify-center py-2 cursor-pointer">
          Delete
        </div>
      </div>
    </div>
  );
};

export default CartItem;
