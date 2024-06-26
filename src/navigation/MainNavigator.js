import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStart from '../screens/GetStart';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar
          showHideTransition="slide"
          animated
          translucent
          barStyle="dark-content"
          backgroundColor={'#FFFFFF'}
        />
      )}
      <Stack.Navigator
        initialRouteName={'GetStart'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
