import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

//https://www.googleapis.com/youtube/v3

// AIzaSyCqEECl0-Y1qmXwwIjzPxpLfXwMe9meNfM

const HomeScreen = () => {
  const navigation = useNavigation();
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',
        {
          params: {
            key: 'AIzaSyCqEECl0-Y1qmXwwIjzPxpLfXwMe9meNfM',
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 10,
          },
        },
      );

      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <View className="flex-1">
      <Header />

      <FlatList
        data={videos}
        renderItem={({item}) => {
          return (
            <HomeCard
              videoInfo={item}
              onPress={() => navigation.navigate('VideoScreen', {video: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
