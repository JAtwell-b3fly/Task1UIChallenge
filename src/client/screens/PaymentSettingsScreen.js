import React, { useState } from 'react';
import Header from './Header'; //import the custom created header component
import Footer from './Footer'; //import the custom created footer component
import ScreenNav from './ScreenNav'; //import the custom created screennav buttons component
import PaymentSettingsFormView from './PaymentSettingsFormView'; //import the custom created paymentsettings form-view component
import PaymentSettingsForm from './PaymentSettingsForm'; //import the custom created paymentsettings form component
import axios from 'axios';
import styles from './styles'; //import the custom stylesheet

const PaymentSettingsScreen = () => {
  const [editing, setEditing] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  
  const handleCheckboxChange = (event) => {
    setEditing(event.target.checked);
  };
  
  const handleDelete = (paymentMethod) => {
    const updatedPaymentMethods = paymentMethods.filter(pm => pm.id !== paymentMethod.id);
    setPaymentMethods(updatedPaymentMethods);
    axios.delete(`/api/payment-methods/${paymentMethod.id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  
  const handleAdd = () => {
    const newPaymentMethod = { /* set default properties for new payment method */ };
    setPaymentMethods([...paymentMethods, newPaymentMethod]);
  };
  
  const handleSave = (updatedPaymentMethod) => {
    if (updatedPaymentMethod.id) { // existing payment method
      axios.put(`/api/payment-methods/${updatedPaymentMethod.id}`, updatedPaymentMethod)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    } else { // new payment method
      axios.post('/api/payment-methods', updatedPaymentMethod)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
    setEditing(false);
  };
  
  return (
    <>
      <Header title="Payment Settings" />
      <ScreenNav />
      <h2 style={{ textAlign: 'center' }}>Payment Settings</h2>
      {editing ? (
        <PaymentSettingsForm
          paymentMethods={paymentMethods}
          onSave={handleSave}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <PaymentSettingsFormView
          paymentMethods={paymentMethods}
          onCheckboxChange={handleCheckboxChange}
          onAdd={handleAdd}
          onDelete={handleDelete}
        />
      )}
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default PaymentSettingsScreen;
