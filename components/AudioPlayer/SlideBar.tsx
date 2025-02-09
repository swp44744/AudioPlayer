import { View, Text, StyleSheet } from "react-native";
import React, { Fragment, useState } from "react";
import Slider from "@react-native-community/slider";
import TrackPlayer, { useProgress } from "react-native-track-player";

const SlideBar = () => {
  const { duration, position } = useProgress();
  const [isSliding, setIsSliding] = useState(false);
  const [sliderValue, setSliderValue] = useState(position);

  const handleSlidingStart = () => {
    setIsSliding(true);
  };

  const handleSliding = (value: number) => {
    setSliderValue(value);
  };

  const handleSlidingComplete = async (value: number) => {
    setIsSliding(false);
    await TrackPlayer.seekTo(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{formatTime(isSliding ? sliderValue : position)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={isSliding ? sliderValue : position}
        onValueChange={handleSliding} // Update UI while sliding
        onSlidingStart={handleSlidingStart} // Detect start of sliding
        onSlidingComplete={handleSlidingComplete} // Seek when user stops
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#1DB954"
      />
      <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
  )
};

const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    slider: {
      flex: 1,
      marginHorizontal: 10,
    },
    timeText: {
      fontSize: 14,
      color: "#fff",
    },
  });
  
export default SlideBar;
