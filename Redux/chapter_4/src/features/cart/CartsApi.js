// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchItems() {
  return axios.get("http://localhost:8080/cart");
}

export function addItems(item) {
  return axios.post("http://localhost:8080/cart", item);
}

export function updateItems(id, itemsUpdate) {
  return axios.patch(`http://localhost:8080/cart/${id}`, itemsUpdate);
}

export function deleteItems(id) {
  return axios.delete(`http://localhost:8080/cart/${id}`);
}
