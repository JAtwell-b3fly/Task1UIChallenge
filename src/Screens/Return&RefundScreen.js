import React from 'react';
import Header from './components/Header'; //import custom created header component
import ScreenNav from './components/ScreenNav'; //import custom created screennav buttons component
import ReturnPolicy from './components/ReturnPolicy'; //import custom created return policy component
import ReturnForm from './components/ReturnForm'; //import custom created return form component

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
