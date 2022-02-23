import CheckoutFormfield from "./CheckoutFormfield";

function BillingAddress() {
  return (
    <div
      className={`checkout-section checkout-address--billing`}
    >
      <h3>Billing Address</h3>
      <CheckoutFormfield
        type="text"
        labelText="Street and Number"
        nameToAppend="street-billing"
        placeholder="Your street name and apt. number, etc."
      />
      <CheckoutFormfield
        type="text"
        labelText="Postal Code / Zip Code"
        nameToAppend="postcode-billing"
        placeholder="Your area's postal code / zip code"
      />
      <CheckoutFormfield
        type="text"
        labelText="City / town:"
        nameToAppend="city-billing"
        placeholder="Name of your city / town"
      />
      <CheckoutFormfield
        type="text"
        labelText="State / Region"
        nameToAppend="region-billing"
        placeholder="Name of your state / region"
      />
      <CheckoutFormfield
        type="text"
        labelText="Country"
        nameToAppend="country-billing"
        placeholder="Name of your country"
      />
    </div>
  );
}

export default BillingAddress;
