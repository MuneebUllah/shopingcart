import React, { useState } from "react";

export default function ProductCard({ img, title, price, id, onClick }) {
  const [width, setWidth] = useState(100);

  const handleWidth = () => {
    setWidth(200);
  };

  return (
    <div className="container">
      <img
        src={img}
        className="img img-fluid"
        style={{ width: width, height: "200px" }}
      />
      <h4>{title}</h4>
      <p>${price}</p>
      <button className="btn btn-success" onClick={handleWidth}>
        Add to cart
      </button>
    </div>
  );
}

// () =>
//  onClick(id)
