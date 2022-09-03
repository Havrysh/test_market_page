import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Sort from "../components/Sort";
import { useState } from "react";

const Store = () => {
  const [query, setQuery] = useState("");
  const { products } = useShoppingCart();

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Sort query={query} setQuery={setQuery} />
      <Row md={2} xs={1} lg={4} className="g-3 mt-5">
        {filteredProducts.map((i) => (
          <Col key={i.id}>
            <StoreItem {...i} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
