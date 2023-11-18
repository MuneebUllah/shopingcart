import { combineReducers } from "redux";
import { ADD_TO_CART, CLEAR_CART, GET_ALL_PRODUCTS } from "../actions";

const initialState = {
  cart: [],
  product: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case ADD_TO_CART:
      if (state.cart.length === 0) {
        return {
          ...state,
          cart: [
            {
              product: action.payload,
              quantity: 1,
            },
          ],
        };
      } else {
        let check = false;
        state.cart.map((obj) => {
          if (obj.product.id === action.payload.id) {
            obj.quantity = obj.quantity + 1;
            check = true;
          }
        });
        if (!check) {
          state.cart.push({ product: action.payload, quantity: 1 });
        }
        return { ...state };
      }
    default:
      return state;
  }
}

const ShopApp = combineReducers({
  shop: productReducer,
});

export default ShopApp;
