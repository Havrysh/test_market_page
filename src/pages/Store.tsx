import {Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import {useState} from "react";
import {ItemSort} from "../components/ItemSort";
import {Sort} from "../types/Sort";


const Store = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string>(Sort.ALL);

  const filteredItems = storeItems.filter((item) => {
    if (status === Sort.COMPUTERS && item.deviceType !== "computer") {
      return false;
    }
    if (status === Sort.LAPTOPS && item.deviceType !== "laptop") {
      return false;
    }
    if (status === Sort.TABLETS && item.deviceType !== "tablet") {
      return false;
    }
    if (status === Sort.PHONES && item.deviceType !== "phone") {
      return false;
    }
    if (status === Sort.WRISTWATCH && item.deviceType !== "wristwatch") {
      return false;
    }
    if (status === Sort.HEADPHONES && item.deviceType !== "headphones") {
      return false;
    }

    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <div className="mb-2 mt-3 fs-5">Apple Store</div>
      <ItemSort
        setQuery={setQuery}
        setStatus={setStatus}
        query={query}
        status={status}
      />
      <Row md={2} xs={1} lg={4} className="g-3 mt-3">
        {filteredItems.map((i) => (
          <Col key={i.id}>
            <StoreItem {...i} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
