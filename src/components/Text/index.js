import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONTS} from '../../constant/themes';

const CustomText = ({style, text, numberOfLines}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    ...FONTS.Regular14,
  },
});

export default CustomText;
