import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
