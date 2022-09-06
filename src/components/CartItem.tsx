import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { TCartItem } from "../types/Item";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { useGetProductsQuery } from "../store/products.Api";
import { IProduct } from "../types/product";

const CartItem = ({ id }: IProduct) => {

  const { cartItems, quantity } = useAppSelector((state) => state.cart);
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useActions();
  const { data } = useGetProductsQuery("products");

  const item = data?.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-inline-flex align-items-center"
    >
      <img
        src={item.image}
        alt="Item image"
        style={{
          width: "75px",
          height: "75px",
          objectFit: "contain",
        }}
      />
      <div style={{ width: "60px" }}>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div
        className="d-flex align-items-center flex-row"
        style={{ gap: "1rem ", width: "100px" }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "0.5rem " }}
        >
          <Button
            className="d-flex align-items-center justify-content-center fs-6"
            type="button"
            style={{ width: "1rem", height: "1rem" }}
            onClick={() => decreaseCartQuantity(item)}
          >
            -
          </Button>
          <span className="fs-4">x{quantity}</span>
          <Button
            className="d-flex align-items-center justify-content-center fs-6"
            type="button"
            style={{ width: "1rem", height: "1rem" }}
            onClick={() => increaseCartQuantity(item)}
          >
            +
          </Button>
        </div>
      </div>
      <div style={{ width: "75px" }}>
        {" "}
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        style={{ width: "30px" }}
        onClick={() => removeFromCart(item)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
