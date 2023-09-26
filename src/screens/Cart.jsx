import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../data/constants';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { menuItems } from '../data/data';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(menuItems.slice(0, 4));

  const screenWidth = Dimensions.get('window').width;

  // Function to update the quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      // Ensure both price and quantity are valid numbers
      if (typeof item.price === 'number' && typeof item.quantity === 'number') {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {/** HEADING AREA */}
        <View style={styles.topContainer}>
          <BackButton
            onPress={() => navigation.goBack()}
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          />
          <Text style={styles.heading}>Cart</Text>
          <View style={{ width: '10%' }} />
        </View>
        <View style={styles.separator} />

        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem item={item} updateQuantity={updateQuantity} />
          )}
          keyExtractor={(item) => item.id}
          style={{ width: screenWidth }}
          contentContainerStyle={styles.menuList}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.totalContainer}>
          <View style={styles.totalTextContainer}>
            <Text style={styles.heading}>{'Total' + ' '}</Text>

            <Text
              style={{
                ...styles.heading,
                fontFamily: 'normal',
                color: COLORS.descText,
              }}
            >
              {`(${cartItems.length} items)`}
            </Text>
          </View>
          <Text
            style={styles.heading}
          >{`£${calculateTotalAmount().toString()}`}</Text>
        </View>

        <Button btnText={`Checkout - £${calculateTotalAmount().toString()}`} />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgGray,
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.bgGray,
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'semibold',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 18,
  },
  separator: {
    width: '110%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.descText,
    marginBottom: 16,
  },
  menuList: {
    flex: 1,
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 18,
  },
  totalTextContainer: { flexDirection: 'row', alignItems: 'center' },
});
