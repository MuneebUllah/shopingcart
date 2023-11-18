import { request, BASE_URL } from "./ApiHandler";
export const API = {
  listProducts: () => request.get(BASE_URL + "products"),
  addProduct: (body) => request.post(BASE_URL + "products", body),
  updateProduct: (id, body) => request.put(BASE_URL + "products/" + id, body),
  deleteProduct: (id) => request.delete(BASE_URL + "products/" + id),
  getSingleProduct: (id) => request.get(BASE_URL + "products/" + id),
};
