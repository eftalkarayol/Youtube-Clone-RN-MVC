import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const StatusCommentCard = () => {
  return (
    <View className="bg-gray-300 p-3 w-11/12 m-auto rounded-lg mt-3 mb-3">
      <View className="flex-row mb-2">
        <Text>Yorumlar</Text>
        <Text> 1</Text>
      </View>

      <View className="flex-row justify-between ">
        <Image
          style={{width: 30, height: 30, borderRadius: 15}}
          source={{
            uri: 'https://media.istockphoto.com/id/1334102192/tr/foto%C4%9Fraf/adult-young-woman-silhouette-portrait-in-studio.jpg?s=612x612&w=0&k=20&c=bK0X7ZSR7CynTNPcyRNUtzbAVn6Hpzfvr5o7PTsHQHI=',
          }}
        />
        <TextInput
          className="bg-gray-400 w-4/5 m-auto rounded-full p-3"
          placeholder="Yorumunuz"
          placeholderTextColor={'black'}
        />
      </View>
    </View>
  );
};

export default StatusCommentCard;

const styles = StyleSheet.create({});
