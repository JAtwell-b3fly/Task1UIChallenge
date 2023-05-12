import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';


import { CLabel } from "../components/common/Label";
import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import Group7Layout from "./Layouts/Group7Layout";
import OrderDetails from "../components/Layouts/OrderDetails";

const OrderDetails = () => {

    //State variables initialised
    const navigation = useNavigation();
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

      // fetch order details from the database based on the orderId parameter
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`https://example.com/orders/${route.params.orderId}`);
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
  }, [route.params.orderId]);

  // navigate back to previous screen
  const handleGoBack = () => {
    navigation.goBack();
  };

    return(
        <View>
            <Group7Layout headercomponent2={<SecondHeaderLayout />}
                            headerlabel3 = {<CLabel />}
                            OrderDetails={<OrderDetails />}
            />
        </View>
    )
};

export default OrderDetails;