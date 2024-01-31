// Prodcut componenta
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./productSlice";
import { addAsync } from "../cart/cartSlice";

export function Product() {
  const products = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchAsync());
        }}
      >
        fetch me
      </button>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "100%" }}
          />
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <p>{product.description}</p>
          <p>
            <button
              onClick={() => {
                dispatch(addAsync(product));
              }}
            >
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
