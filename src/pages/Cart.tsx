import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../components/Shop/Checkout/Checkout";
import ProductsInCart from "../components/Shop/Cart/ProductsInCart";
import Search from "../components/Shop/Elements/Search";
import useProducts from "../hooks/useProducts";
import { getKeyword } from "../redux/actions/actionKeyword";
import { RootState } from "../types/typesOfState";
import ButtonToEmptyCart from "../components/Buttons/ButtonToEmptyCart";

function Cart() {
  const dispatch = useDispatch();

  const { keyword } = useSelector((state: RootState) => state.keywordReducer);
  const { cart } = useSelector((state:RootState) => state.cartReducer);
  let filteredProducts = useProducts(keyword, cart);
  const handleSearch = useCallback(
    (event) => {
      let newKeyword = event.target.value;
      const illegalChars = /[*]/g;
      newKeyword = newKeyword.replaceAll(illegalChars, "");

      dispatch(getKeyword(newKeyword));
    },
    [dispatch]
  );

  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let btnTheme = "";
  if (theme === "other") {
    btnTheme = "darktheme__btn--checkout";
  }

  const [ showCheckout, setShowCheckout ] = useState(false);
  function checkoutButtonFunction() {
    if (!showCheckout) setShowCheckout(true);
    else setShowCheckout(false)
  }  

  return (
    <main id="page-shop">
      <section className="shop-head cart-head">
        <h2>Shopping Cart</h2>
        <Search keyword={keyword} handleChange={handleSearch} />
      </section>
      <section className="cart-products">
      { cart.length !== 0
        ? <ProductsInCart products={filteredProducts} />
        : <div className="yourCartIsEmpty">Your cart is pretty much empty.</div>
      }
      { cart.length !== 0
        ? <div className="emptyAndCheckout">
            <ButtonToEmptyCart />
            <button
              className={`btn formfield__button ${btnTheme}`}
              onClick={() => checkoutButtonFunction()}
            >
              Checkout?!
            </button>
          </div>
        : ""
      }

      </section>
      { cart.length !== 0 && showCheckout
        ? <Checkout />
        : ""
      }
    </main>
  );
}

export default Cart;
