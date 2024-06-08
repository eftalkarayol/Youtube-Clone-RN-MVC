import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import VideosController from '../controller/VideosController';
import {VideoContext} from '../context/VideosStore';

//https://www.googleapis.com/youtube/v3

// AIzaSyCqEECl0-Y1qmXwwIjzPxpLfXwMe9meNfM

const HomeScreen = () => {
  const navigation = useNavigation();
  const {vvideos, setVvideos} = useContext(VideoContext);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const fetchedVideo = await VideosController.getVideos();
      setVvideos(fetchedVideo);
    } catch (error) {
      console.log(error, 'ww');
    }
  };

  return (
    <View className="flex-1">
      <Header />

      <FlatList
        data={vvideos}
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
