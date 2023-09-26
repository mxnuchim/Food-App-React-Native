import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../data/constants';

const NavigationDots = () => {
  const [activeDot, setActiveDot] = useState(1);

  const handleDotClick = (dotNumber) => {
    setActiveDot(dotNumber);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.dot,
          activeDot === 1 && styles.activeDot, // Apply active style if dot 1 is active
        ]}
        onPress={() => handleDotClick(1)}
      />
      <Pressable
        style={[
          styles.dot,
          activeDot === 2 && styles.activeDot, // Apply active style if dot 2 is active
        ]}
        onPress={() => handleDotClick(2)}
      />
      <Pressable
        style={[
          styles.dot,
          activeDot === 3 && styles.activeDot, // Apply active style if dot 3 is active
        ]}
        onPress={() => handleDotClick(3)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.burntOrange,
  },
});

export default NavigationDots;
