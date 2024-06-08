import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SubscriptionHeader from '../components/SubscriptionComponents/SubscriptionHeader.js';
import SubscriptionChannelsAvatar from '../components/SubscriptionComponents/SubscriptionChannelsAvatar.js.js';
import SubsFilterButton from '../components/SubscriptionComponents/SubsFilterButton.js';
import HomeCard from '../components/HomeCard.js';
import StatusCard from '../components/StatusCard/StatusCard.js';
import {defaultVideo} from '../utils/defaultVideo.js';
const SubscriptionsScreen = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  return (
    <ScrollView className="bg-white">
      <SubscriptionHeader />
      {/*Abone olunan kanal avatarları kısmı */}

      <View className={'flex-row w-100 justify-between'}>
        {/*ScrollView'in boyutunu sınırlandırmak için kullandığımız view */}
        <View className="w-4/5">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'Eftal Karayol'}
              channelAvatar={
                'https://images.unsplash.com/photo-1697985189201-293f0ddfc36d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
              }
            />

            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'Mert Karayol'}
              channelAvatar={
                'https://images.unsplash.com/photo-1714182370392-a32d43080717?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Eftal Karayol'}
              channelAvatar={
                'https://images.unsplash.com/photo-1697985189201-293f0ddfc36d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
              }
            />

            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'Eftal Karayol'}
              channelAvatar={
                'https://images.unsplash.com/photo-1697985189201-293f0ddfc36d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Eftal Karayol'}
              channelAvatar={
                'https://images.unsplash.com/photo-1697985189201-293f0ddfc36d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Eftal Karayol'}
              channelAvatar={
                'https://images.unsplash.com/photo-1697985189201-293f0ddfc36d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
              }
            />
          </ScrollView>
        </View>

        <View className="items-center justify-center w-1/5">
          <Text className="text-blue-950">Tümü</Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        className="p-2"
        showsHorizontalScrollIndicator={false}>
        <SubsFilterButton
          label={'Tümü'}
          index={{currentIndex: filterIndex, staticIndex: 0}}
          onPress={() => setFilterIndex(0)}
        />

        <SubsFilterButton
          label={'Bugün'}
          index={{currentIndex: filterIndex, staticIndex: 1}}
          onPress={() => setFilterIndex(1)}
        />

        <SubsFilterButton
          label={'Canlı'}
          index={{currentIndex: filterIndex, staticIndex: 2}}
          onPress={() => setFilterIndex(2)}
        />

        <SubsFilterButton
          label={'İzlemeye devam edin'}
          index={{currentIndex: filterIndex, staticIndex: 3}}
          onPress={() => setFilterIndex(3)}
        />

        <SubsFilterButton
          label={'İzlenmeyenler'}
          index={{currentIndex: filterIndex, staticIndex: 4}}
          onPress={() => setFilterIndex(4)}
        />
      </ScrollView>

      <HomeCard videoInfo={defaultVideo} />
      <StatusCard />
    </ScrollView>
  );
};

export default SubscriptionsScreen;

const styles = StyleSheet.create({});
