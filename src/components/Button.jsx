import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ShoppingBagIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../data/constants';

const Button = ({ btnText, withIcon, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      {withIcon ? <ShoppingBagIcon color={COLORS.bgWhite} /> : null}
      <Text style={styles.btnText}>{btnText ?? 'Add to cart'}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.burntOrange,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    gap: 5,
    width: '100%',
    marginTop: 5,
  },
  btnText: { color: COLORS.bgWhite, flexShrink: 1, fontFamily: 'normal' },
});
