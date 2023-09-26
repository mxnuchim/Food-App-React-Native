import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../data/constants';
import Input from '../components/Input';
import { menuItems } from '../data/data';
import MenuItem from '../components/MenuItem';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const [searchText, setSearchText] = useState('');
  const screenWidth = Dimensions.get('window').width;

  const navigation = useNavigation();

  const navigateToDetailsPage = (product) => {
    navigation.navigate('ProductDetails', { product });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Menu</Text>
      <View style={styles.separator} />
      <Input
        withSearchIcon
        placeholder={'Search'}
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
        }}
        containerStyle={{ width: '90%' }}
      />

      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <MenuItem
            item={item}
            onAddToCart={() => console.warn('added')}
            onNavigateToDetails={() => navigateToDetailsPage(item)}
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
        style={{ width: screenWidth }}
        contentContainerStyle={styles.menuList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgGray,
    marginHorizontal: '2.5%',
  },
  heading: {
    fontFamily: 'semibold',
    marginBottom: 21,
    marginTop: 34,
  },
  separator: {
    width: '110%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.descText,
    marginBottom: 16,
  },
  menuList: {
    alignItems: 'center',
  },
});
