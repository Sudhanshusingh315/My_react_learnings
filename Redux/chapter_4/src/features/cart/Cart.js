import { useDispatch, useSelector } from "react-redux";
import { deleteAsync } from "./CartSlice";
// import { fetchAsync } from "./productSlice";
import "./cart.css";

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <h1>This is cart</h1>
          {items.map((item) => (
            <div className="cart-item">
              <img className="img-fluid" src={item.thumbnail} alt="" />
              <div className="description">
                <p>{item.title}</p>
                <span>{item.brand}</span>
                <strong>${item.price}</strong>
              </div>
              <div className="quantity">
                Quantity
                <select
                  value={item.quantity}
                  // onChange={(e) => handleChange(e, item.id)}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className="close">
                <button onClick={() => dispatch(deleteAsync(item.id))}>
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <h1>
          Total:
          {items.reduce((acc, item) => item.price * item.quantity + acc, 0)}
        </h1> */}
      </div>
    </>
  );
}
