import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, FlatList, View, Text, Image, StyleSheet } from 'react-native';

import { HeaderLayout } from '../../components/Layouts/Header'; //import custom created header component
import { ProductList } from '../../components/Forms/ProductList'; //import custom created wishlish catalogbox component
import { CLabel } from '../../components/common/Label'; //import the custom created Heading Label section component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/WishlistScreenStyles.css'; //import the custom created stylesheet
import { db } from '../firebase';
import { useCart } from '../contexts/CartContext';

const Wishlist = () => {

  //State management
  const navigation = useNavigation();
  const [wishlistItems, setWishlistItems] = useState([]);

  //Action
  useEffect(() => {
    // Fetch wishlist items from the database
    const fetchWishlistItems = async () => {
      try {
        const snapshot = await db.collection('wishlist').get();
        const items = [];
  
        snapshot.forEach((doc) => {
          const { productId, productTitle, productImage, productShortDescription, productLongDescription, productPrice, productRating, productReview } = doc.data();
  
          // Add only necessary data to items array
          items.push({ productId, productTitle, productImage, productShortDescription, productPrice });
        });
  
        setWishlistItems(items);
      } catch (error) {
        console.error('Error fetching wishlist items', error);
      }
    };
  
    fetchWishlistItems();
  }, []);

  //Action
  const handleProductPress = (productId) => {
    // Navigate to Wishlist Product Details Screen
    navigation.navigate('WishlistProductDetailsScreen.js', { productId });
  };

  //Action
  const addToCart = async (productId) => {
    try {
      // Retrieve product details from the database using its productId
      const productRef = db.collection('products').doc(productId);
      const productDoc = await productRef.get();
  
      if (!productDoc.exists) {
        console.error(`Product with ID ${productId} does not exist`);
        return;
      }
  
      // Add the product to the cart
      const productData = productDoc.data();
      const { title, price } = productData;
      const item = {
        productId,
        title,
        price,
        quantity: 1,
      };
      const { addItem } = useCart(); // Access the addItem function from the CartContext
      addItem(item);
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
  };

  //Action
  const handleWishlistButtonPress = async () => {
    try {
      // Remove product from wishlist in database
      await db.collection('wishlist').doc(productId).delete();
      // Remove product from wishlistItems in state
      setWishlistItems(wishlistItems.filter((item) => item.productId !== productId));
      // Update wishlistCount in context
      setWishlistCount(wishlistCount - 1);
    } catch (error) {
      console.error('Error removing product from wishlist', error);
    }
  };

  //Navigation
  const handleCartNavigation = () => {
    // Navigate to Shopping Cart Screen
    navigation.navigate('CartScreen.js');
  };

  //Navigation
  const handleWishlistNavigation = () => {
    // Reload Wishlist Screen
    navigation.replace('WishlistScreen.js');
  };


  return(
    <Group2Layout headercomponent={<HeaderLayout />}
                  headinglabel={<CLabel />}
                  catalogboxsection={<ProductList />}
    />
  );
}

export default Wishlist;

