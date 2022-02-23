import CheckoutFormfield from "./CheckoutFormfield";

function ContactInfo() {
  return (
    <div className="checkout-sections">
      <div className="checkout-section">
        <h3>Contact Information</h3>
        <CheckoutFormfield
          type="email"
          labelText="Email:"
          nameToAppend="email"
          placeholder="Your email address"
        />
        <CheckoutFormfield
          type="text"
          labelText="Full Name:"
          nameToAppend="name"
          placeholder="Your full name"
        />
        <CheckoutFormfield
          type="tel"
          labelText="Phone:"
          nameToAppend="phone"
          placeholder="Your phone number"
        />
      </div>
    </div>
  );
}

export default ContactInfo;
