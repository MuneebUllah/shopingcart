import React from "react";

export default function ProductCard({ img, title, price, id, onClick }) {
  return (
    <div className="container">
      <img
        src={img}
        className="img img-fluid"
        style={{ width: "100%", height: "200px" }}
      />
      <h4>{title}</h4>
      <p>${price}</p>
      <button className="btn btn-success" onClick={() => onClick(id)}>
        Add to cart
      </button>
    </div>
  );
}
