import { memo } from "react";
import { useParams } from "react-router-dom";
import ShowProducts from "./ShowProducts";

const Products = () => {
  const params = useParams();

  return (
    <div>
      <div>{params.prefix}</div>
      <ShowProducts />
    </div>
  );
};

export default memo(Products);
