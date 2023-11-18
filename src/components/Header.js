import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Header() {
  // const { cart } = useContext(AppContext);
  const state = useSelector((state) => state.shop);
  console.log(state);
  const location = useLocation();
  // const params = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>My Shopping Cart</h3>
        </div>
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <ul className="navbar-nav">
              <li className={`nav-link`}>
                <Link
                  className={location.pathname === "/" ? "text-success" : ""}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className={`nav-link`}>
                <Link
                  className={
                    location.pathname === "/cart" ? "text-success" : ""
                  }
                  to={"/cart"}
                >
                  Cart ({state.cart.length})
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
