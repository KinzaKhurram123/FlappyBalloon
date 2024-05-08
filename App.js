import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
