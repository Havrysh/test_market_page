import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TCartItem } from "../types/Item";
import { IProduct } from "../types/product";

const BASE_URL = "https://fakestoreapi.com";

type ShoppingCartProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: TCartItem[];
  products: IProduct[];
  getProducts: () => void;
  getElectronics: () => void;
  getJewelery: () => void;
  getWomensClothes: () => void;
  getMensClothes: () => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useLocalStorage<TCartItem[]>(
    "shopping-cart",
    []
  );
  const [products, setProducts] = useLocalStorage<IProduct[]>("store", []);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return (
      cartItems.find((item: { id: number }) => item.id === id)?.quantity || 0
    );
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const getProducts = async () => {
    setProducts(
      await fetch(`${BASE_URL}/products`).then((response) => response.json())
    );
  };

  const getElectronics = async () => {
    setProducts(
      await fetch(`${BASE_URL}/products/category/electronics`)
        .then((response) => response.json())
        .then((response) => response.slice(0, 8))
    );
  };

  const getJewelery = async () => {
    setProducts(
      await fetch(`${BASE_URL}/products/category/jewelery`)
        .then((response) => response.json())
        .then((response) => response.slice(0, 8))
    );
  };

  const getMensClothes = async () => {
    setProducts(
      await fetch(`${BASE_URL}/products/category/men's%20clothing`)
        .then((response) => response.json())
        .then((response) => response.slice(0, 8))
    );
  };

  const getWomensClothes = async () => {
    setProducts(
      await fetch(`${BASE_URL}/products/category/women's%20clothing`)
        .then((response) => response.json())
        .then((response) => response.slice(0, 8))
    );
  };

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        products,
        getProducts,
        getElectronics,
        getJewelery,
        getWomensClothes,
        getMensClothes,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
