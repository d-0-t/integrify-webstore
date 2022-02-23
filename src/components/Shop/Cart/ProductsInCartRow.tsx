import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import detailPathConstructor from "../../../functions/detailPathConstructor";
import middleClickBehavior from "../../../functions/middleClickBehavior";
import { ProductType } from "../../../types/typesOfProduct";
import { KeyValueAnyType, RootState } from "../../../types/typesOfState";
import ButtonCartManip from "../../Buttons/ButtonCartManip";
import ProductQuantity from "../Elements/ProductQuantity";

function ProductsInCartRow({ prod }: ProductType & KeyValueAnyType) {
  const { cart } = useSelector((state: RootState) => state.cartReducer);

  let navigate = useNavigate();
  function routeChange(whereFrom: string, id?: number) {
    let path = detailPathConstructor(whereFrom, id);
    navigate(path);
  }

  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let imgContTheme = "";
  if (theme === "other") {
    imgContTheme = "darktheme__product-section-cart__imgCont";
  }

  const { quantities } = useSelector(
    (state: RootState) => state.quantityReducer
  );

  return (
    <tr key={prod.id} className="product-cart__product">
      <td>
        <div
          className={`product-cart__product__imageContainer ${imgContTheme}`}
          onClick={() => routeChange("shop", prod.id)}
          onMouseDown={(event) => middleClickBehavior(event, prod.id)}
        >
          <img
            src={prod.image}
            alt={prod.title}
            className="product-cart__product__image"
          />
        </div>
      </td>
      <td className="product-cart__product__title">
        <h4
          onClick={() => routeChange("shop", prod.id)}
          onMouseDown={(event) => middleClickBehavior(event, prod.id)}
        >
          {prod.title}
        </h4>
      </td>
      <td className="product-cart__product__quantity">
        <ProductQuantity productId={prod.id} />
      </td>
      <td className="product-cart__product__price">${prod.price}</td>
      {prod.price && prod.id ? (
        <td className="product-cart__product__cost">
          ${Math.round(prod.price * quantities[prod.id] * 100) / 100}
        </td>
      ) : (
        <td></td>
      )}
      <td>
        <div className="product-cart__product__btn" aria-label="Remove item from cart">
          <ButtonCartManip product={prod} cart={cart} customText={"X"} />
        </div>
      </td>
    </tr>
  );
}

export default memo(ProductsInCartRow);
