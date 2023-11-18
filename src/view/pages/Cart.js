import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../actions";
import Table from "../../components/Table";
import { AppContext } from "../../context/AppContext";

export default function Cart() {
  const dispatch = useDispatch();
  // const { cart } = useContext(AppContext);
  const state = useSelector((state) => state.shop);

  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <button
          className="btn btn-danger my-4 float-end"
          onClick={() => clearCartItems()}
        >
          Clear Cart
        </button>
      </div>
      <div className="col-md-12">
        <Table cart={state.cart} />
      </div>
    </div>
  );
}
