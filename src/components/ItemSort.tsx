import { Sort } from "../types/Sort";

type Props = {
  setQuery: (input: string) => void;
  setStatus: (input: string) => void;
  query: string;
  status: Sort | string;
};

export const ItemSort = ({ setQuery, setStatus, query, status }: Props) => {
  return (
    <form className="d-flex justify-content-between">
      <div className="input-group input-group-sm w-50">
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
      </div>

      <label className="input-group input-group-sm w-25">
        <select
          className="form-select w-25"
          value={status}
          onChange={({ target }) => {
            setStatus(target.value);
          }}
        >
          <option value={Sort.ALL}>All</option>
          <option value={Sort.COMPUTERS}>Computers</option>
          <option value={Sort.LAPTOPS}>Laptops</option>
          <option value={Sort.TABLETS}>Tablets</option>
          <option value={Sort.PHONES}>Phones</option>
          <option value={Sort.HEADPHONES}>Headphones</option>
          <option value={Sort.WRISTWATCH}>Watches</option>
          <option value={Sort.ACCESSORIES}>Accessories</option>
        </select>
      </label>
    </form>
  );
};
