import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../CoreComponents/Avatar';
import MyIcon from '../CoreComponents/MyIcon';

const StatusCardHeader = () => {
  return (
    <View className="flex-row justify-between items-center p-2 mt-4">
      <View className="flex-row">
        <Avatar
          avatarSource={
            'https://images.unsplash.com/photo-1697985189201-293f0ddfc36d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
          }
        />
        <View className="ml-3">
          <Text className="font-semibold">Evrim Ağacı</Text>
          <Text className="text-stone-500 mt-2">19 saat önce</Text>
        </View>
      </View>
      <MyIcon name={'ellipsis-vertical'} size={23} />
    </View>
  );
};

export default StatusCardHeader;

const styles = StyleSheet.create({});
