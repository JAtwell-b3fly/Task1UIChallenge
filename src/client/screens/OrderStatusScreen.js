import React, {useEffect, useState} from "react";
import { View, Text, Button } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';

import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import { CLabel } from "../components/common/Label";
import Group7Layout from "./Layouts/Group7Layout";
import OrderStatusDetails from "../components/Layouts/OrderStatusDetails";

const OrderStatus = ({ navigation, route }) => {

    //Set the state of each variable
    const [orderNumber, setOrderNumber] = useState('');
    const [orderStatus, setOrderStatus] = useState('Pending');
    const [orderTotal, setOrderTotal] = useState(0);
    const [orderDate, setOrderDate] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        if (route.params) {
          const { orderNumber, orderTotal, orderDate } = route.params;
          setOrderNumber(orderNumber);
          setOrderTotal(orderTotal);
          setOrderDate(orderDate);
        }
      }, [route.params]);
    
      useEffect(() => {
        setTotalAmount(route.params.totalAmount);
        generateOrderNumber();
      }, [route.params.totalAmount]);
    
      const generateOrderNumber = async () => {
        let orderNumber = '';
    
        do {
          orderNumber = uuidv4().substr(0, 6);
    
          const snapshot = await db.collection('orders').where('orderNumber', '==', orderNumber).get();
          if (snapshot.size === 0) {
            break;
          }
        } while (true);
    
        setOrderNumber(orderNumber);
    
        // Save order number to customer's order history and user account
        // ... code to save order number ...
      };

  // Function to navigate to the Home screen
  const navigateToHome = () => {
    navigation.navigate('HomeScreen.js');
  };

  // Function to navigate to the Orders screen
  const navigateToOrders = () => {
    navigation.navigate('OrderScreen.js');
  };

  // Function to navigate to the Payment screen
  const navigateToPayment = () => {
    navigation.navigate('PaymentScreen.js');
  };

    return(
        <View>
            <Group7Layout headercomponent2={<SecondHeaderLayout />}
                            headerlabel2={<CLabel />}
                            OrderStatusDetails={<OrderStatusDetails />}
            />
        </View>
    )
}

export default OrderStatus;