import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../data/constants';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
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
