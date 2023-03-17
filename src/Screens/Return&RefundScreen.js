import React from 'react';
import Header from './components/Header';
import ScreenNav from './components/ScreenNav';
import ReturnPolicy from './components/ReturnPolicy';
import ReturnForm from './components/ReturnForm';

function ReturnAndRefundScreen() {
  return (
    <div className="return-and-refund-screen">
      <Header title="Return and Refunds" />
      <ScreenNav />
      <ReturnPolicy />
      <h2 className="return-form-heading">Return and Refund Form</h2>
      <ReturnForm />
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default ReturnAndRefundScreen;
