import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import Sort from "../components/Sort";
import { useState } from "react";
import { productsApi, useGetProductsQuery } from "../store/products.Api";

const Store = () => {
  const [query, setQuery] = useState("");
  const { data } = useGetProductsQuery("/products");
  // const filteredProducts = data?.filter((item) =>
  //   item.title.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <>
      {/*<Sort query={query} setQuery={setQuery} />*/}
      <Row md={2} xs={1} lg={4} className="g-3 mt-5">
        {data?.map((i) => (
          <Col key={i.id}>
            <StoreItem {...i} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
