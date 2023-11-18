import React, { useState } from "react";
import Products from "../view/pages/Products";

export default function Table({ cart }) {
  return (
    <div>
      <table className="table table-borderd">
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Image</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total Price</td>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item, index) => {
            // setSum(sum + item.product.price);
            return (
              <tr key={index}>
                <td>{item.product.id}</td>
                <td>{item.product.title}</td>
                <td>
                  <img src={item.product.image} width="20" height="20" />
                </td>
                <td>${item.product.price}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.product.price}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              <b>Sum</b>
            </td>
            <td>
              $
              {cart.reduce(function (prev, current) {
                return prev + +(current.product.price * current.quantity);
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
