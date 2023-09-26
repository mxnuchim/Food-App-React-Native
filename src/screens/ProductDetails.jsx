import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../data/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationDots from '../components/NavigationDots';
import ExtraInformation from '../components/ExtraInformation';
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import Button from '../components/Button';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params.product;
  const [quantity, setQuantity] = useState(1);

  const fullName = product.name + ' ' + product.otherName;

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.main}
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.btnContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        {/** Image */}
        <>
          <Image source={product.img} style={styles.image} />
          <NavigationDots />
        </>

        {/** Titles */}
        <>
          <View style={styles.topContainer}>
            <Text style={styles.name}>
              {product?.otherName ? fullName : product.name}
            </Text>
            <Text style={{ ...styles.name, color: COLORS.burntOrange }}>
              £{product.price}
            </Text>
          </View>
          <DescriptionText text={product.description} maxChars={50} />
        </>

        {/** EXTRA INFORMATION COMPONENT */}
        <ExtraInformation product={product} />

        {/** INCREMENT & DECREMENT QUANTITY BUTTONS */}
        <View style={styles.rightContainer}>
          <Pressable
            onPress={handleDecreaseQuantity}
            style={[styles.btn, { opacity: quantity <= 1 ? 0.5 : 1 }]}
            disabled={quantity <= 1}
          >
            <MinusIcon color={COLORS.mainText} />
          </Pressable>
          <Text style={styles.name}>{quantity}</Text>
          <Pressable style={styles.btn} onPress={handleIncreaseQuantity}>
            <PlusIcon color={COLORS.mainText} />
          </Pressable>
        </View>

        {/** ACTION BUTTONS */}

        <Button
          btnText="Add to cart"
          btnStyle={{ height: 45, marginBottom: 16 }}
          onPress={() => console.warn('added')}
        />
        <Button
          btnText="Subscribe to a Plan"
          btnStyle={{
            height: 45,
            backgroundColor: COLORS.bgWhite,
            borderWidth: 1,
            borderColor: COLORS.burntOrange,
          }}
          btnTextStyle={{
            color: COLORS.burntOrange,
          }}
          onPress={() => console.warn('subscribed')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const DescriptionText = ({ text, maxChars }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const maxLines = 3;

  return (
    <View>
      <Text
        numberOfLines={expanded ? 0 : maxLines}
        style={styles.descriptionText}
      >
        {text}
      </Text>
      {text.length > maxChars && (
        <Pressable onPress={toggleExpand}>
          <Text
            style={{ ...styles.descriptionText, color: COLORS.burntOrange }}
          >
            {expanded ? ' Read Less' : 'Read More'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgGray,
  },
  main: {
    flex: 1,
    width: '90%',
    backgroundColor: COLORS.bgGray,
  },
  btnContainer: {
    width: '100%',
    marginBottom: 30,
  },
  image: {
    height: 300,
    width: '100%',
    objectFit: 'contain',
    borderRadius: 8,
    backgroundColor: COLORS.bgWhite,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 24,
    marginBottom: 10,
    fontFamily: 'normal',
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  name: { fontFamily: 'semibold', fontSize: 16 },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: COLORS.bgWhite,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
});

export default ProductDetails;
