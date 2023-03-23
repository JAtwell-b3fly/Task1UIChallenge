import React, { useState } from 'react';
import Header from './Header'; //import the custom created header component
import ScreenNav from './ScreenNav'; //import the custom created screennav buttons component
import OrderHistoryFilterForm from './OrderHistoryFilterForm'; //import the custom created Orderhistoryfilter form component
import OrderHistoryTable from './OrderHistoryTable'; //import the custom created orderhistorytable component
import styles from '.styles'; //import styles from stylesheet

function OrderHistoryScreen() {
  const [filterData, setFilterData] = useState({}); // state to store filter form data

  // function to handle filter form submit
  function handleFilterSubmit(data) {
    setFilterData(data);
    // make API call to get order history data based on filter data and update state with results
  }

  return (
    <div className="order-history-screen">
      <Header />
      <ScreenNav />
      <h1 className="order-history-heading">Order History</h1>
      <div className="order-history-filter-container">
        <OrderHistoryFilterForm onSubmit={handleFilterSubmit} />
        <button className="filter-button">Filter</button>
      </div>
      <OrderHistoryTable filterData={filterData} />
    </div>
  );
}

export default OrderHistoryScreen;
