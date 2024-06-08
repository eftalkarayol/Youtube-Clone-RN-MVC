import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyIcon from './CoreComponents/MyIcon';

const BadgetIcon = ({label, iconName, size, color}) => {
  return (
    <View className="relative">
      <MyIcon name={iconName} size={size} />

      <View className="absolute bg-red-500   w-5 h4 rounded-full items-center justify-center left-3 bottom-3 ">
        <Text className="text-white " style={{fontSize: 12}}>
          {label}+
        </Text>
      </View>
    </View>
  );
};

export default BadgetIcon;

const styles = StyleSheet.create({});
