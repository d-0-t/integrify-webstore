import CheckoutFormfield from "./CheckoutFormfield";

function DeliveryAddress() {
  return (
    <div className="checkout-section checkout-address--delivery">
      <h3>Delivery Address</h3>
      <CheckoutFormfield
        type="text"
        labelText="Street and Number"
        nameToAppend="street"
        placeholder="Your street name and apt. number, etc."
      />
      <CheckoutFormfield
        type="text"
        labelText="Postal Code / Zip Code"
        nameToAppend="postcode"
        placeholder="Your area's postal code / zip code"
      />
      <CheckoutFormfield
        type="text"
        labelText="City / town:"
        nameToAppend="city"
        placeholder="Name of your city / town"
      />
      <CheckoutFormfield
        type="text"
        labelText="State / Region"
        nameToAppend="region"
        placeholder="Name of your state / region"
      />
      <CheckoutFormfield
        type="text"
        labelText="Country"
        nameToAppend="country"
        placeholder="Name of your country"
      />
    </div>
  );
}

export default DeliveryAddress;
