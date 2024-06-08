import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MyIcon from '../CoreComponents/MyIcon';
import BadgetIcon from '../BadgetIcon';

const SubscriptionHeader = () => {
  return (
    <View className="bg-white p-3 flex-row justify-between items-center">
      <Image
        className="w-20 h-10"
        source={require('../../assets/images/logo.png')}
      />

      <View className="flex-row justify-center items-center gap-5">
        <MyIcon name={'bar-chart-outline'} size={25} />
        <View>
          <BadgetIcon label={9} iconName={'notifications-outline'} size={25} />
        </View>
        <MyIcon name="search-outline" size={25} />
        <Image
          className="w-8 h-8 rounded-full"
          source={{
            uri: 'https://media.istockphoto.com/id/1245820677/tr/foto%C4%9Fraf/beyaz-arka-planda-duran-g%C3%BCl%C3%BCmseyen-olgun-adam%C4%B1n-portresi.jpg?s=612x612&w=0&k=20&c=dxKlT5KS_KFj6eYXHGSx_uKZhBatrD8qqyAZLTTIcq4=',
          }}
        />
      </View>
    </View>
  );
};

export default SubscriptionHeader;

const styles = StyleSheet.create({});
