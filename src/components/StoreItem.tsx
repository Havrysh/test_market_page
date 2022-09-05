import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { IProduct } from "../types/product";

const StoreItem = ({id, price, image, title}: IProduct) => {

  const { increaseCartQuantity, removeFromCart } = useActions();
  const { quantity, cartItems } = useAppSelector((state) => state.cart);
  const item = cartItems.find(i => i.id === id)
  // if (item == null) return null;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="flex-shrink-1">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 shadow-none"
              onClick={() => increaseCartQuantity(item)}
            >
              Add To Cart
            </Button>
          ) : (
            <Button
              variant="outline-danger"
              className="w-100 shadow-none"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
