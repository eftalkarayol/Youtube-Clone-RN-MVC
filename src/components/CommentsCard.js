import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyIcon from './CoreComponents/MyIcon';
import IconBox from './CoreComponents/IconBox';
import YInput from './CoreComponents/YInput';

const CommentsCard = () => {
  return (
    //En dış Kutu
    <View className="mb-6">
      {/* yorumlar başlığı ve icon */}
      <View className="flex-row justify-between p-2 ">
        <Text className="text-white  text-sm font-semibold ">Yorumlar</Text>
        <MyIcon name={'chevron-expand-outline'} size={20} color={'white'} />
      </View>
      {/* Image ve yorum inputu */}
      <View className="flex-row  p-2">
        <Image
          className="w-10 h-10 rounded-full mr-2"
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1675034389774-b6f4b471394c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
          }}
        />
        <YInput />
      </View>
    </View>
  );
};

export default CommentsCard;

const styles = StyleSheet.create({});
