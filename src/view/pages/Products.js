import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchProducts } from "../../actions";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.shop);
  console.log(state);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const getProducts = async (id, values) => {
    // TEST FETCH API
    await fetch("http://localhost:8080/user/home")
      .then((resp) => resp.json())
      .then((resp) => {
        setProducts(resp);
        setLoading(false);
      })
      .catch((errors) => {
        console.log(errors);
      });
   
  };
  useEffect(() => {
    dispatch(fetchProducts(setLoading));
   
  }, []);


  const clickHandler = (index) => {
    dispatch(AddToCart(state.product[index]));
  };

  return (
    <div className="row">
      {loading ? (
        <Loading />
      ) : (
        state.product.map((item, index) => {
          return (
            <div className="col-md-3" key={index}>
              <ProductCard
                id={index}
                img={item.image}
                price={item.price}
                title={item.title}
                onClick={clickHandler}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
