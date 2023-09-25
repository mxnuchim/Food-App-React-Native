import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../data/constants';
import Button from '../components/Button';
import MenuItem from '../components/MenuItem';
import { images } from '../assets';
import CartItem from '../components/CartItem';
import { menuItems } from '../data/data';

const { AfricanDoughnut } = images;
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <MenuItem
        text={'African Doughnut'}
        price="30"
        image={AfricanDoughnut}
        onAddToCart={() => console.warn('added')}
      />
      <CartItem item={menuItems[5]} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgGray,
  },
});
