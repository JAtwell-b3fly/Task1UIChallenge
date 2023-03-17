// Import necessary components and sub-components
import Header from './Header';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import PaymentForm from './PaymentForm';
import Footer from './Footer';
import style from './styles.css';

function CheckoutScreen() {
  // Define state variables and functions for handling form data
  const [shippingInfo, setShippingInfo] = useState({});
  const [billingInfo, setBillingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const handleShippingSubmit = (data) => {
    setShippingInfo(data);
  };

  const handleBillingSubmit = (data) => {
    setBillingInfo(data);
  };

  const handlePaymentSubmit = (data) => {
    setPaymentInfo(data);
    // Submit all form data to database using API management tool
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setBillingInfo(shippingInfo);
    } else {
      setBillingInfo({});
    }
  };

  return (
    <div>
      <Header />
      <div className="checkout-container">
        <div className="back-button-container">
          {/* Back navigation button goes here */}
        </div>
        <h1 className="checkout-heading">Checkout</h1>
        <h2 className="shipping-heading">Shipping Information</h2>
        <ShippingForm onSubmit={handleShippingSubmit} />
        <button className="submit-button">Submit</button>
        <div className="checkbox-container">
          <input type="checkbox" id="same-as-billing" onChange={handleCheckboxChange} />
          <label htmlFor="same-as-billing">Same as shipping</label>
        </div>
        <h2 className="billing-heading">Billing Information</h2>
        <BillingForm onSubmit={handleBillingSubmit} initialValues={billingInfo} />
        <button className="submit-button">Submit</button>
        <h2 className="payment-heading">Payment Information</h2>
        <PaymentForm onSubmit={handlePaymentSubmit} />
        <button className="continue-shopping-button">Continue Shopping</button>
        <button className="proceed-button">Proceed</button>
      </div>
      <Footer />
    </div>
  );
}
