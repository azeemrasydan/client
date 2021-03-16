import React from "react";
import { Link, Route, useParams , useRouteMatch } from "react-router-dom";
import supplierData from "./data"

const Product = ({ data }) => {

  const { productId } = useParams();
  const product = data.find(p => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <h4>{product.status}</h4>
        <hr />
      </div>
    );
  } else {
    productData = <h2> Sorry. Product doesn't exist </h2>;
  }

  const { url } = useRouteMatch();

  const linkList = supplierData.map((supplier) => {
    return (
      <li key={supplier.id}>
        <Link to={`${url}/${supplier.id}`}>{supplier.name}</Link>
      </li>
    );
  });


  return (
    <div>
      <div>{productData}</div>
      <h3>Supplier</h3>
      <ul>{linkList}</ul>
    </div>
  );
};

export default Product;