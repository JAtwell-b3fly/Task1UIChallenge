import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import the custom created header component
import ScreenNav from './client/components/Layout/ScreenNav'; //import the custom created screennav buttons component
import OrderHistoryFilterForm from './OrderHistoryFilterForm'; //import the custom created Orderhistoryfilter form component
import OrderHistoryTable from './OrderHistoryTable'; //import the custom created orderhistorytable component

import styles from '.styles'; //import styles from stylesheet

const OrderScreen = () => {

  const navigation = useNavigation();

  const [orderData, setOrderData] = useState([]);

  const [orderDetails, setOrderDetails] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderTotalPrice, setOrderTotalPrice] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [orderItemPrices, setOrderItemPrices] = useState([]);

  // handle form submit to filter orders
  useEffect(() => {
    // fetch order data from database for the current user and update orderData state
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/orders?userId=${userId}`);
        const data = await response.json();
        setOrderData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  // handleFilter function and other functions for the component
  const handleFilter = async (e) => {
    e.preventDefault();
  
    // get form data
    const form = e.target;
    const formData = new FormData(form);
  
    // create filter object with form data
    const filter = {};
    if (formData.get('orderNumber')) {
      filter.orderNumber = formData.get('orderNumber');
    }
    if (formData.get('orderDate')) {
      filter.orderDate = formData.get('orderDate');
    }
    if (formData.get('orderStatus')) {
      filter.orderStatus = formData.get('orderStatus');
    }
  
    // send filter object to server to get filtered orders
    try {
      const response = await fetch(`/api/orders?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filter),
      });
      const data = await response.json();
      setOrderData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // handle navigation to order details screen
  const handleOrderDetails = (orderId) => {
    useEffect(() => {
      // fetch order details from the database based on the orderId parameter
      const fetchOrderDetails = async () => {
        try {
          const response = await fetch(`https://example.com/orders/${orderId}`);
          const data = await response.json();
          setOrderDetails(data);
  
          // update variables with fetched data
          setFirstName(data.billingAddress.firstName);
          setLastName(data.billingAddress.lastName);
          setPhysicalAddress(data.billingAddress.physicalAddress);
          setEmailAddress(data.billingAddress.emailAddress);
          setPhoneNumber(data.billingAddress.phoneNumber);
          setOrderNumber(data.orderNumber);
          setOrderDate(data.orderDate);
          setOrderStatus(data.orderStatus);
          setOrderTotalPrice(data.orderTotalPrice);
          setOrderItems(data.orderItems);
          setOrderItemPrices(data.orderItemPrices);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchOrderDetails();
    }, [orderId]);
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    if (!orderDetails) {
      return <Text>Loading...</Text>;
    }
  
    navigation.navigate('OrderDetails', {
      orderNumber: orderNumber,
      orderDate: orderDate,
      orderStatus: orderStatus,
      orderTotalPrice: orderTotalPrice,
      orderItems: orderItems,
      orderItemPrices: orderItemPrices,
      firstName: firstName,
      lastName: lastName,
      physicalAddress: physicalAddress,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
    });
  };


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
};

export default OrderScreen;
