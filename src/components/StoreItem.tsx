import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { IProduct } from "../types/product";

const StoreItem = ({ id, title, price, image }: IProduct) => {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const quantity = getItemQuantity(id);

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
