import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { images } from '../assets';
import { COLORS } from '../data/constants';
import Button from './Button';
import { HeartIcon } from 'react-native-heroicons/outline';
import { HeartIcon as HeartIconSolid } from 'react-native-heroicons/solid';

const MenuItem = ({ text, price, image, onAddToCart }) => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.heart} onPress={toggleLiked}>
        {liked ? (
          <HeartIconSolid color={'red'} />
        ) : (
          <HeartIcon color={COLORS.descText} />
        )}
      </Pressable>
      <View style={{ backgroundColor: COLORS.bgWhite }}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.name}>
          {text.length <= 11 ? text : text.slice(0, 11) + '...'}
        </Text>
        <Text style={{ ...styles.name, color: COLORS.burntOrange }}>
          £{price}
        </Text>
      </View>
      <Button withIcon onPress={onAddToCart} />
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 156,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.bgWhite,
    borderRadius: 8,
    position: 'relative',
    gap: 10,
    paddingHorizontal: '2%',
  },
  heart: { position: 'absolute', top: 13, right: 13, zIndex: 1 },
  image: { height: 100, width: 100, objectFit: 'contain' },
  midContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  name: { fontFamily: 'semibold' },
});
