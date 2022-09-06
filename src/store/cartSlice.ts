
import { TCartItem } from "../types/Item";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/product";

const KEY = "rfk";

interface CartState {
  cartItems: IProduct[];
  quantity: number;
  isOpen: boolean;
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem(KEY) ?? "[]"),
  quantity: 0,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartQuantity(state, action: PayloadAction<IProduct>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        // @ts-ignore
        state.cartItems.push({ ...action.payload, totalQuantity: 1 });
      }
      localStorage.setItem(KEY, JSON.stringify(state.cartItems));
    },
    decreaseCartQuantity(state, action: PayloadAction<IProduct>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else {
        if (state.cartItems[itemIndex].quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }

      localStorage.setItem(KEY, JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action: PayloadAction<TCartItem>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(KEY, JSON.stringify(state.cartItems));
    },
    openCart: (state) => {
      if (state.isOpen === false) {
        state.isOpen = !state.isOpen;
      }
    },
    closeCart: (state) => {
      if (state.isOpen === true) {
        state.isOpen = !state.isOpen;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

