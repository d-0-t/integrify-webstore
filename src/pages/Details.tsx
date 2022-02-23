import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonCartManip from "../components/Buttons/ButtonCartManip";
import ButtonToPath from "../components/Buttons/ButtonPath";
import ProductQuantity from "../components/Shop/Elements/ProductQuantity";
import Rating from "../components/Shop/Elements/Rating";
import useDisabilityCheck from "../hooks/useDisabilityCheck";
import useOneProduct from "../hooks/useOneProduct";
import { RootState } from "../types/typesOfState";

function Details() {
  const { id } = useParams<string>();
  let { cart } = useSelector((state: RootState) => state.cartReducer);
  let [product] = useOneProduct(Number(id));

  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let appTheme = "";
  let infoTheme = "";
  let imgContTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__product-details";
    infoTheme = "darktheme__product-details__info";
    imgContTheme = "darktheme__product-details__imageContainer";
  }

  const disabilityCheck = useDisabilityCheck;

  return (
    <main id="page-shop">
      <div className="shop-head">
        <h2>Item details</h2>
        <ButtonToPath linkToPath="/shop" classToApply="btn btn--back" buttonText="Back to store"/>
      </div>
      {product.id !== Number(id)
      ? (
        <div className={`product-details ${appTheme}`}>Loading...</div>
        )
      : (
        <div className={`product-details ${appTheme}`}>
          <div className={`product-details__imageContainer ${imgContTheme}`}>
            <img
              src={product.image}
              alt={product.title}
              className="product-details__imageContainer__image"
            />
          </div>
          <div className={`product-details__info ${infoTheme}`}>
            <h4 className="product-details__info__title">{product.title}</h4>
            <Rating rating={product.rating}/>
            <p className="product-details__info__price">${product.price}</p>
            <div className="quantityAndCartBtn">
                {disabilityCheck(product.id, cart)
                ? <ProductQuantity productId={product.id} mode="horizontal" />
                : ""
                }
              <ButtonCartManip product={product} cart={cart} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Details;
