import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../constant/themes';

const GetStart = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black', marginTop: SIZES.padding}}>Hello</Text>
    </View>
  );
};

export default GetStart;

const styles = StyleSheet.create({});
