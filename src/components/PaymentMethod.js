import React from "react";
import Header from "./Header.js";

function PaymentMethod() {
  return (
    <div>
      <Header />
      <div className="paymentMethod">
        <h1 className="contact-info">Contact Information:</h1>
        <input placeholder="Name" className="name"></input>
        <form className="subform1">
          <input placeholder="Email" className="email"></input>
          <input placeholder="Phone Number" className="phone-number"></input>
        </form>
        <h1 className="shipping-info">Shipping Information:</h1>
        <input placeholder="Address" className="address"></input>
        <form className="subform2">
          <form>
            <input placeholder="City" className="city"></input>
            <input placeholder="Country/Region" className="country"></input>
          </form>
          <form>
            <input placeholder="State" className="state"></input>
            <input placeholder="ZIP Code" className="zip"></input>
          </form>
        </form>
        <h1 className="pay-info">Payment Information:</h1>
        <input placeholder="Card Number" className="card-num"></input>
        <input placeholder="Full Name on Card"></input>
        <form className="subform3">
          <input placeholder="Expiration Date(MM/YYYY)"></input>
          <input placeholder="CVV/CVC" className="cvc"></input>
        </form>
        <input type="checkbox"></input><p className="checkbox-prompt">Use the same address as shipping?</p>
        <input placeholder="Address"></input>
        <form className="subform4">
          <form>
            <input placeholder="City"></input>
            <input placeholder="Country/Region" className="country"></input>
          </form>
          <form>
            <input placeholder="State"></input>
            <input placeholder="ZIP Code" className="zip"></input>
          </form>
        </form>
        <button className="confirm">Continue to Confirmation</button>
      </div>
    </div>
  );
}

export default PaymentMethod;
