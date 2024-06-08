import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import StatusCardHeader from './StatusCardHeader';
import ReadMoreCard from './ReadMoreCard';
import StatusIconCard from './StatusIconCard';
import StatusCommentCard from './StatusCommentCard';

const StatusCard = () => {
  const [content, setContent] = useState(
    "This article aims to measure the time it takes for a screen to load data and draw its UI elements. These steps must be taken before the user can interact with the UI. Measuring load time is not just a task, it's a critical step to ensure a fast and smooth user experience. It's your key to determining if new feature development or refactoring positively or negatively impacted the app’s performance. Rest assured, after finishing this guide, you’ll build a custom hook that can be seamlessly plugged into any React, or React Native app and start measuring load time. Implementation Let's dive into the implementation. Our first task is to define the properties we want to use. Our goal is to create a solution that can be effortlessly integrated into any screen and start measuring time. screenName: defined screen name isLoading: indicating if loading is finished and a user can start with interaction With these two in place, we can start building a custom hook. hook to start measuring screen load In useEffect we start measuring time with performance.now() once the user arrives on the screen and sets the start time. The performance.now() method returns a high-resolution timestamp in milliseconds. After the data is loaded, we set the endTime and calculate the time to load by measuring the difference between the end and start times. Start Measuring Let’s simply use what we have built so far and start measuring time. To do this, we need to simply import and call useGetPerformance hook with its properties.",
  );
  return (
    <View className="border-t border-b border-stone-300">
      <StatusCardHeader />
      <ReadMoreCard content={content} />
      <Image
        className="w-100 h-96 mt-5"
        source={{
          uri: 'https://images.unsplash.com/photo-1714357779320-235515316e22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <StatusIconCard />
      <StatusCommentCard />
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({});
