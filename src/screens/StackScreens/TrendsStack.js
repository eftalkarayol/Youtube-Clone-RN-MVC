import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrendingScreen from '../TrendingScreen';
import HomeStack from './HomeStack';

const TrendsStack = () => {
  const TrendStack = createNativeStackNavigator();
  return (
    <TrendStack.Navigator screenOptions={{headerShown: false}}>
      <TrendStack.Screen name="TrendScreen" component={TrendingScreen} />
      <TrendStack.Screen name="HomeStack" component={HomeStack} />
    </TrendStack.Navigator>
  );
};

export default TrendsStack;

const styles = StyleSheet.create({});
