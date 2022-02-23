import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import detailPathConstructor from "../../../functions/detailPathConstructor";
import middleClickBehavior from "../../../functions/middleClickBehavior";
import useDisabilityCheck from "../../../hooks/useDisabilityCheck";
import { ProductType } from "../../../types/typesOfProduct";
import { KeyValueAnyType, RootState } from "../../../types/typesOfState";
import ButtonCartManip from "../../Buttons/ButtonCartManip";
import ProductQuantity from "./ProductQuantity";
import Rating from "./Rating";

function ProductCard({ prod }: ProductType & KeyValueAnyType) {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let appTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__product";
  }

  let navigate = useNavigate();
  function routeChange(whereFrom: string, id?: number) {
    let path = detailPathConstructor(whereFrom, id);
    navigate(path);
  }

  const disabilityCheck = useDisabilityCheck;

  return (
    <div key={prod.id} className={`product-section__product ${appTheme}`}>
      <div className="product-section__productTop">
        <div
          className="product-section__product__imageContainer"
          onClick={() => routeChange("shop", prod.id)}
          onMouseDown={(event) => middleClickBehavior(event, prod.id)}
        >
          <img
            src={prod.image}
            alt={prod.title}
            className="product-section__product__image"
          />
        </div>
        <h4
          className="product-section__product__title"
          onClick={() => routeChange("shop", prod.id)}
          onMouseDown={(event) => middleClickBehavior(event, prod.id)}
        >
          {prod.title}
        </h4>
      </div>
      <div className="product-section__productBottom">
        <p className=" product-section__product__price">${prod.price}</p>
        <Rating rating={prod.rating} />
        <div className="quantityAndCartBtn">
          {disabilityCheck(prod.id, cart) ? (
            <ProductQuantity productId={prod.id} mode="horizontal" />
          ) : (
            ""
          )}
          <ButtonCartManip product={prod} cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
