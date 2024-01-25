import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const setToLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: getFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existProduct = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (existProduct) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        setToLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        setToLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      setToLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      setToLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.price*cartItem.quantity;
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
