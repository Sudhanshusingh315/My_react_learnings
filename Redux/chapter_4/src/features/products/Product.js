import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./productSlice";
import styles from "./Product.css";
import { addAsync } from "../cart/CartSlice";

export function Product() {
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={styles.asyncButton}
        onClick={() => dispatch(fetchAsync())}
      >
        Fetch product
      </button>
      {/* actual component */}
      {products.map((product) => (
        <div className="card">
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "100%" }}
          />
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <p>{product.description}</p>
          <p>{product.id}</p>
          <p>
            <button onClick={() => dispatch(addAsync(product))}>
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
