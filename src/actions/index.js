import { API } from "../api/Api";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";

export function fetchProducts(setLoading) {
  return (dispatch) => {
    API.listProducts()
      .then((resp) => {
        dispatch(GetAllProducts(resp.data));
        setLoading(false);
      })
      .catch((errors) => console.log(errors));
  };
}

export function GetAllProducts(payload) {
  return {
    type: GET_ALL_PRODUCTS,
    payload,
  };
}

export function AddToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
