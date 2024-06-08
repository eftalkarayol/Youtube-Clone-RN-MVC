import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SubscriptionChannelsAvatar = ({channelName, channelAvatar, badge}) => {
  const channelNametoArray = channelName.split('');

  const karakterSayisi = channelNametoArray.length;
  return (
    <View className="items-center justify-center  m-1  h-24 p-1 relative">
      <Image
        className="w-16 h-16 rounded-full mb-1"
        source={{uri: channelAvatar}}
      />
      <Text>
        {/*Karakter Sayısının 8 ve 8 den küçük olma durumu kontrol ediliyor çünkü 8 den fazla ise 8 karakterden sonra ... olacak*/}
        {karakterSayisi <= 8
          ? //Eğer 8 ve 8den küçükse kanal ismi direk yazdırılıyor
            channelName
          : //fazla ise
            //önce ilk sekiz karakter alınıyor  //sonrasinde Join metodu ile sonuna '...' ekleniyor
            channelNametoArray.slice(0, 8).join('') + '...'}
      </Text>
      {badge && (
        <View className="bg-blue-700 rounded-full border-2 border-white w-3 h-3 absolute right-3 bottom-7" />
      )}
    </View>
  );
};

export default SubscriptionChannelsAvatar;

const styles = StyleSheet.create({});
