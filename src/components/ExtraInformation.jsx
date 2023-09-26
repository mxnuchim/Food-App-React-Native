import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../data/constants';
import { ChevronDownIcon } from 'react-native-heroicons/outline';

const ExtraInformation = ({ product }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const sections = [
    { name: 'Ingredients', content: product.ingredients },
    { name: 'Nutritional Information', content: product.nutritionalInfo },
    { name: 'How to Prepare', content: product.howToPrepare },
    { name: 'Dietary Information', content: product.dietaryInfo },
    { name: 'Storage Information', content: product.storageInfo },
    { name: 'Extra', content: product.extra },
  ];

  return (
    <View style={styles.extrasContainer}>
      {sections.map((section, index) => (
        <View key={index}>
          <Pressable
            onPress={() => toggleSection(section.name)}
            style={styles.box}
          >
            <Text style={styles.title}>{section.name}</Text>
            <ChevronDownIcon
              color={COLORS.mainText}
              size={16}
              style={{
                transform:
                  activeSection === section.name ? [{ rotate: '180deg' }] : [],
              }}
            />
          </Pressable>
          {activeSection === section.name && (
            <Text style={styles.content}>{section.content}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default ExtraInformation;

const styles = StyleSheet.create({
  extrasContainer: {
    paddingVertical: 8,
    width: '100%',
  },
  box: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },
  title: {
    fontFamily: 'normal',
    marginVertical: 10,
    fontSize: 14,
  },
  content: {
    paddingVertical: 10,
    fontFamily: 'normal',
    fontSize: 12,
    color: COLORS.descText,
  },
});
