import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account Screen</Text>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
