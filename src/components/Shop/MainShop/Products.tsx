import { memo } from "react";
import { useSelector } from "react-redux";
import { AllProductsType, ProductType } from "../../../types/typesOfProduct";
import { RootState } from "../../../types/typesOfState";
import ProductCard from "../Elements/ProductCard";

function Products({ products }: AllProductsType) {

  const { category } = useSelector((state: RootState) => state.categoryReducer);
  
  return (
    <div className="product-wrap">
      <div className="product-section">
        {products.map((prod: ProductType) => {
          return (
          prod.category === category || category === ""
          ? <ProductCard key={prod.id} prod={prod} />
          : ""
          )
        })}
      </div>
    </div>
  );
}

export default memo(Products);
