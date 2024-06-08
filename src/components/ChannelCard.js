import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MyIcon from './CoreComponents/MyIcon';
import YButton from './CoreComponents/YButton';

const ChannelCard = ({channelTitle}) => {
  return (
    <View className="p-2 flex-row justify-between items-center bg-stone-900 border-stone-500 border-t  border-b ">
      <View className="gap-2 flex-row items-center">
        <Image
          className="rounded-full w-10 h-10"
          source={{
            uri: 'https://images.unsplash.com/photo-1639020715359-f03b05835829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />

        <View>
          <Text className=" text-white">{channelTitle}</Text>
          <View className="flex-row gap-2">
            <Text className="text-stone-500 ">5m Abone</Text>
          </View>
        </View>
      </View>
      <View className={'flex-row items-center justify-center gap-2'}>
        <YButton style={{marginLeft: 5}} title="Abone Ol" />
        <MyIcon name={'notifications'} size={20} color={'rgb(120 113 108)'} />
      </View>
    </View>
  );
};

export default ChannelCard;

const styles = StyleSheet.create({});
