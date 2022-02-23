import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getShipping } from "../../../redux/actions/actionCart";

function ShippingMode() {
  const dispatch = useDispatch();
  // Default the price after every render to avoid wrong price
  useEffect(() => {
    dispatch(getShipping(665.69));
  }, [dispatch]);
  
  function updateShipping(event: React.ChangeEvent<HTMLInputElement>) {
    let newShippingPrice = Number(event.target.value);
    dispatch(getShipping(newShippingPrice));
  }
  return (
    <div className="checkout-sections">
      <div className="checkout-section">
        <h3>Shipping Options</h3>
        <div>
          <input
            type="radio"
            id="storepickup"
            name="shipping-mode"
            value="12.99"
            onChange={updateShipping}
          />
          <label htmlFor="storepickup" className="radio-text">
            <span className="shipping-price">$12.99</span> - Pick up at local
            store (not really)
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="postalpickup"
            name="shipping-mode"
            value="419.90"
            onChange={updateShipping}
          />
          <label htmlFor="postalpickup" className="radio-text">
            <span className="shipping-price">$419.90</span> - Send to Post
            Pickup (just kidding)
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="homedelivery"
            name="shipping-mode"
            value="665.69"
            onChange={updateShipping}
            defaultChecked
          />
          <label htmlFor="homedelivery" className="radio-text">
            <span className="shipping-price">$665.69</span> - Home delivery (I
            hope you do know that this is a fake store?)
          </label>
        </div>
      </div>
    </div>
  );
}

export default ShippingMode;
