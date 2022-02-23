function PaymentMode() {
  return (
    <div className="checkout-sections">
      <div className="checkout-section">
        <h3>Payment Options</h3>

        <div>
          <input
            type="radio"
            id="storepickup"
            name="payment-mode"
            value="storepickup"
          />
          <label htmlFor="storepickup" className="payment-text">
            <span className="payment-title">Cash</span> - Pay with cash for
            nothing at your local pickup.
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="creditcard"
            name="payment-mode"
            value="creditcard"
            defaultChecked
          />
          <label htmlFor="creditcard" className="radio-text">
            <span className="payment-title">Credit/Debit card</span> - We're
            guaranteed to steal your money!
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="taxpayment"
            name="payment-mode"
            value="taxpayment"
            disabled
          />
          <label htmlFor="taxpayment" className="radio-text">
            <span className="payment-title">Taxes</span> - Pick this option if
            you think the taxes you paid already should have covered your
            mindless consumerism.
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="nopayment"
            name="payment-mode"
            value="nopayment"
            disabled
          />
          <label htmlFor="nopayment" className="radio-text">
            <span className="payment-title">How about no?</span> - Pick this
            option if you want to be sued.
          </label>
        </div>
      </div>
    </div>
  );
}

export default PaymentMode;
