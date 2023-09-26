import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../data/constants';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

const BackButton = ({ onPress, style }) => {
  return (
    <Pressable style={{ ...styles.backBtn, ...style }} onPress={onPress}>
      <ChevronLeftIcon color={COLORS.mainText} size={18} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backBtn: {
    marginTop: 34,
    borderRadius: 8,
    backgroundColor: COLORS.bgWhite,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
