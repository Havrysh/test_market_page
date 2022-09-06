import {Offcanvas, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import {useActions} from "../hooks/actions";
import {useGetProductsQuery} from "../store/products.Api";
import {useAppSelector} from "../hooks/redux";

const ShoppingCart = () => {

  const {closeCart} = useActions();
  const {cartItems, isOpen} = useAppSelector(state => state.cart)
  const {data} = useGetProductsQuery("/products");

  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      onShow={data}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bol fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data?.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          {cartItems.length > 0 ? (
            <button type="submit" className="mt-5 btn btn-primary">
              Order
            </button>
          ) : null}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
