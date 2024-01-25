import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {itemCount > 0 ? (
        <div>
          {carts?.map((cart, index) => (
            <CartItem key={index} cart={cart} />
          ))}
          <div className="text-4xl">
            Card Total: <span className="font-bold">{totalAmount}$</span>
          </div>
        </div>
      ) : (
        <div className="text-4xl my-10 text-center">Empty...</div>
      )}
    </div>
  );
};

export default Cart;
