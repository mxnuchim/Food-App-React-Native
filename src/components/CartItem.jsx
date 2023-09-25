import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../data/constants';
import { TrashIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(item.price * quantity);

  return (
    <View style={styles.container}>
      {/** Left side */}
      <Image source={item.img} style={styles.image} />

      {/** Middle */}
      <View style={styles.midContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>{item.name + ' '}</Text>
          {item.otherName ? (
            <Text
              style={{
                ...styles.name,
                fontFamily: 'normal',
                color: COLORS.descText,
              }}
            >
              {item.otherName}
            </Text>
          ) : null}
        </View>
        <Text style={{ ...styles.name, color: COLORS.burntOrange }}>
          £{totalPrice}
        </Text>
        <Pressable>
          <TrashIcon color={COLORS.descText} />
        </Pressable>
      </View>

      {/** Right side */}
      <View style={styles.rightContainer}>
        <Pressable style={styles.btn}>
          <MinusIcon color={COLORS.mainText} />
        </Pressable>
        <Text style={styles.name}>{quantity}</Text>
        <Pressable style={styles.btn}>
          <PlusIcon color={COLORS.mainText} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.bgGray,
    gap: 10,
    paddingHorizontal: '5%',
  },
  image: {
    height: 100,
    width: 100,
    objectFit: 'contain',
  },
  midContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    gap: 7,
  },
  name: { fontFamily: 'semibold', fontSize: 16 },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 7,
  },
  btn: {
    backgroundColor: COLORS.bgWhite,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
