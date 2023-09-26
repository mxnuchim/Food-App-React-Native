import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { images } from '../assets';
import { COLORS } from '../data/constants';
import Button from './Button';
import { HeartIcon } from 'react-native-heroicons/outline';
import { HeartIcon as HeartIconSolid } from 'react-native-heroicons/solid';

const MenuItem = ({ item, onAddToCart, onNavigateToDetails }) => {
  const [liked, setLiked] = useState(false);

  const nameText = item.name + ' ' + item?.otherName;

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <Pressable style={styles.container} onPress={onNavigateToDetails}>
      <Pressable style={styles.heart} onPress={toggleLiked}>
        {liked ? (
          <HeartIconSolid color={'red'} />
        ) : (
          <HeartIcon color={COLORS.descText} />
        )}
      </Pressable>
      <View style={{ backgroundColor: COLORS.bgWhite }}>
        <Image source={item.img} style={styles.image} />
      </View>
      <View style={styles.midContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>
            {item?.otherName && item.name.length <= 11
              ? item.name
              : item.name.length <= 11
              ? item.name
              : `${item.name.slice(0, 11)}...`}
            {item.otherName ? (
              <Text
                style={{
                  ...styles.name,
                  fontFamily: 'normal',
                  color: COLORS.descText,
                }}
              >
                {' ' + item.otherName.slice(0, 11 - item.name.length) + '...'}
              </Text>
            ) : null}
          </Text>
        </View>
        <Text style={{ ...styles.name, color: COLORS.burntOrange }}>
          £{item.price.toFixed(0)}
        </Text>
      </View>
      <Button withIcon onPress={onAddToCart} />
    </Pressable>
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
    margin: 10,
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
