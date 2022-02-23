import { memo } from "react";
import { useSelector } from "react-redux";
import { AllProductsType, ProductType } from "../../../types/typesOfProduct";
import { RootState } from "../../../types/typesOfState";
import ProductsInCartRow from "./ProductsInCartRow";

function ProductsInCart({ products }: AllProductsType) {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  const { quantities } = useSelector((state: RootState) => state.quantityReducer);
  let cartTheme = "";
  if (theme === "other") {
    cartTheme = "darktheme__product-section-cart";
  }

  let sum: number = 0;
  let vat: number = 0.25;
  let vatSum: number = 0;
  cart.map((product: ProductType) => {
    if (product.price && product.id) {
      sum += product.price*quantities[product.id];
    }
    return product;
  });
  sum = Math.round(sum * 100) / 100;
  vatSum = Math.round(sum * vat * 100) / 100;

  return (
    <div className={`product-section-cart ${cartTheme}`}>
      <table className="product-table">
        <thead className="product-cart-head">
          <tr>
            <th>Item</th>
            <th></th>
            <th>Quantity</th>
            <th>Item price</th>
            <th>Cost</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="product-cart">
          {products.map((prod: ProductType) => {
            return <ProductsInCartRow key={prod.id} prod={prod} />;
          })}
          <tr className="product-cart__sumline">
            <td className="product-cart__sumline__sumlabel" colSpan={4}>
              Sum:{" "}
            </td>
            <td className="product-cart__product__price product-details__info--highlight">
              ${sum}
            </td>
          </tr>
          <tr className="product-cart__sumline">
            <td className="product-cart__sumline__sumlabel" colSpan={4}>
              {vat * 100}% VAT:{" "}
            </td>
            <td className="product-cart__product__price">${vatSum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default memo(ProductsInCart);
