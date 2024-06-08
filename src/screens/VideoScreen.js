import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import MyIcon from '../components/CoreComponents/MyIcon';
import VideoHeader from '../components/VideoHeader';
import ChannelCard from '../components/ChannelCard';
import CommentsCard from '../components/CommentsCard';
import HomeCard from '../components/HomeCard';
import axios from 'axios';
import {VideoContext} from '../context/VideosStore';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';

const VideoScreen = props => {
  const navigation = useNavigation();
  const {vvideos, setVvideos} = useContext(VideoContext);
  console.log(props.route.params.video);
  const [videoDetail, setVideoDetail] = useState(props.route.params.video);
  // console.log(videoDetail);

  return (
    <View className="flex-1 bg-stone-900">
      {/*Üst kısımdaki bölüm ekranının 3/5 kısmını kaplayan (video oynatma vs.)*/}
      <TouchableOpacity
        onLongPress={() => console.log('merhaba')}
        className="h-52">
        <Video
          source={{uri: 'https://www.youtube.com/watch?v=Pv0iVoSZzN8'}}
          ref={ref => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.backgroundVideo}
        />
      </TouchableOpacity>
      <ScrollView>
        <View className=" " style={{flex: 1}}>
          {/*Video oynatma barı */}

          {/* video info */}
          <VideoHeader
            header={{
              shortHeader: videoDetail?.videoTitle,
              longHeader: videoDetail?.videoHeader,
            }}
          />
          <ChannelCard channelTitle={videoDetail?.channelTitle} />
          <CommentsCard />
        </View>
        {/* Alt kısımda bulunan 2/5 yer kaplayan yapı(önerilen videolar) */}
        <View className="flex-2 bg-stone-900" style={{flex: 1}}>
          <Text>
            <FlatList
              data={vvideos}
              renderItem={({item}) => (
                <HomeCard
                  videoInfo={item}
                  theme={'dark'}
                  onPress={() =>
                    navigation.navigate('VideoScreen', {video: item})
                  }
                />
              )}
            />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
