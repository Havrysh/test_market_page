import React from "react";
import { IProduct } from "../types/product";
import {
  useLazyGetElectronicsQuery,
  useLazyGetJeweleryQuery,
  useLazyGetMensClothingQuery,
  useLazyGetProductsQuery,
  useLazyGetWomensClothingQuery,
} from "../store/products.Api";

type sortProps = {
  setQuery: (input: string) => void;
  query: string;
};

const Sort = ({ query, setQuery }: sortProps) => {
  // const [sortName, setSortName] = useState("Sort by:");
  // const [fetchAll] = useLazyGetProductsQuery();
  // const [fetchElectronics] = useLazyGetElectronicsQuery();
  // const [fetchJewelery] = useLazyGetJeweleryQuery();
  // const [fetchWomensClothing] = useLazyGetWomensClothingQuery();
  // const [fetchMensClothing] = useLazyGetMensClothingQuery();

  // e.preventDefault();
  // const sortHandler = (
  //   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  //   fetchName: IProduct[]) => {
  //   fetchName;
  //   setSortName(e.currentTarget.innerHTML);
  // };

  return (
    <>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control shadow-none rounded w-50"
          placeholder="Search..."
          value={query}
          onChange={({ target }) => {
            setQuery(target.value);
          }}
        />

        {query && (
          <button
            type="button"
            className="btn btn-danger rounded shadow-none ms-3"
            onClick={() => setQuery("")}
          >
            {" "}
            delete
          </button>
        )}
        {/*<div className="dropdown dropstart">*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    className="btn btn-outline-primary dropdown-toggle"*/}
        {/*    data-bs-toggle="dropdown"*/}
        {/*    aria-haspopup="true"*/}
        {/*    aria-expanded="false"*/}
        {/*    id="dropdownMenu"*/}
        {/*  >*/}
        {/*    {sortName}*/}
        {/*  </button>*/}
        {/*<div*/}
        {/*  className="dropdown-menu dropstart w-50"*/}
        {/*  aria-labelledby="dropdownMenu"*/}
        {/*>*/}
        {/*  <a*/}
        {/*    className="dropdown-item"*/}
        {/*    href="#"*/}
        {/*    onClick={(event) => sortHandler(event, fetchAll)}*/}
        {/*  >*/}
        {/*    All products*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="dropdown-item"*/}
        {/*    href="#"*/}
        {/*    onClick={(event) => {*/}
        {/*      event.preventDefault();*/}
        {/*      getElectronics();*/}
        {/*      setSortName(event.currentTarget.innerHTML);*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Electronics*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="dropdown-item"*/}
        {/*    href="#"*/}
        {/*    onClick={(event) => {*/}
        {/*      event.preventDefault();*/}
        {/*      getMensClothes();*/}
        {/*      setSortName(event.currentTarget.innerHTML);*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Men's Clothing*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="dropdown-item"*/}
        {/*    href="#"*/}
        {/*    onClick={(event) => {*/}
        {/*      event.preventDefault();*/}
        {/*      getWomensClothes();*/}
        {/*      setSortName(event.currentTarget.innerHTML);*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Women's Clothing*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="dropdown-item"*/}
        {/*    href="#"*/}
        {/*    onClick={(event) => {*/}
        {/*      event.preventDefault();*/}
        {/*      getJewelery();*/}
        {/*      setSortName(event.currentTarget.innerHTML);*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Jewelery*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="dropdown-item text-wrap"*/}
        {/*    href="https://savelife.in.ua/donate/#donate-army-card-monthly"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    If clicked then proceed*/}
        {/*  </a>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Sort;
