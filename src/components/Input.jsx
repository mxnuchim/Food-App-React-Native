import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { COLORS } from '../data/constants';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const Input = ({
  placeholder,
  onChangeText,
  value,
  withSearchIcon,
  containerStyle,
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {withSearchIcon ? (
        <MagnifyingGlassIcon color={COLORS.mainText} size={16} />
      ) : null}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.bgWhite,
    borderColor: 'lightgray',
    borderRadius: 8,
    paddingHorizontal: '4%',
    marginBottom: 20,
    height: 40,
    alignItems: 'center',
    gap: 12,
  },
  input: { flex: 1, height: '100%', fontFamily: 'normal' },
  searchIcon: {
    marginRight: 10,
  },
});
