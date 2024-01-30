// A mock function to mimic making an async request for data
import axios from "axios";
const url = "http://localhost:8080/products";
export function fetchproducts() {
  return axios.get(url);
}
