import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../../redux/actions/actionCart";
import { removeAllQuantities } from "../../../redux/actions/actionQuantity";
import { ProductType } from "../../../types/typesOfProduct";
import { RootState } from "../../../types/typesOfState";
import BillingAddress from "./ContactAddressOfBilling";
import DeliveryAddress from "./ContactAddressOfDelivery";
import ContactInfo from "./ContactInfo";
import ContactNote from "./ContactNote";
import PaymentMode from "./PaymentMode";
import ShippingMode from "./ShippingMode";

function Checkout() {
  const [stateOfBillingAddress, setStateOfBillingAddress]: any =
    useState(false);

  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let btnTheme = "";
  let formTheme = "";
  if (theme === "other") {
    btnTheme = "darktheme__btn";
    formTheme = "darktheme__post";
  }
  function billingAddress(event: React.ChangeEvent<HTMLInputElement>) {
    let checked = event.target.checked;
    if (checked) {
      setStateOfBillingAddress(true);
    } else {
      setStateOfBillingAddress(false);
    }
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function emptyMyCart() {
    dispatch(emptyCart());
    dispatch(removeAllQuantities());
    navigate("/");
    alert(
      "Your cart is now emptied. However, since this is a fake store, no real order has been placed. Sorry!"
    );
  }

  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const { quantities } = useSelector(
    (state: RootState) => state.quantityReducer
  );
  let sum: number = 0;
  cart.map((product: ProductType) => {
    if (product.price && product.id) {
      sum += product.price * quantities[product.id];
    }
    return product;
  });
  const { shipping } = useSelector((state: RootState) => state.shippingReducer);
  sum = Math.round((sum + shipping) * 100) / 100;


  return (
    <section className="cart-checkout">
      <form
        className={`form ${formTheme}`}
        id="form-checkout"
        onSubmit={emptyMyCart}
      >
        <ContactInfo />
        <div className="checkout-sections">
          <DeliveryAddress />
          {stateOfBillingAddress ? <BillingAddress /> : ""}
        </div>
        <div>
          <div className="checkout-sections">
            <div className="checkout-section checkout-section--row">
              <input
                type="checkbox"
                id="form-check-address"
                name="form-check-address"
                onChange={billingAddress}
              />
              <label htmlFor="form-check-address">
                Check this if the billing address is different than the delivery
                address
              </label>
            </div>
          </div>
        </div>
        <ContactNote />
        <ShippingMode />
        <PaymentMode />
        <div className="checkout-sum">
          <p>
            <b>Final price: </b>
            ${sum}
          </p>
        </div>
        <button
          className={`btn formfield__button ${btnTheme} btn--selfcenter`}
          type="submit"
          value="submit"
        >
          Order!
        </button>
      </form>
    </section>
  );
}

export default Checkout;
