import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { Item } from "../types/Item";

const StoreItem = ({ id, name, price, imgUrl }: Item) => {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 shadow-none"
              onClick={() => increaseCartQuantity(id)}
            >
              Add To Cart
            </Button>
          ) : (
            <Button
              variant="outline-danger"
              className="w-100 shadow-none"
              onClick={() => removeFromCart(id)}
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
