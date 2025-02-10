import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { ThemedText } from "../ThemedText";

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
      <ThemedText style={styles.timeText}>
        {formatTime(isSliding ? sliderValue : position)}
      </ThemedText>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={isSliding ? sliderValue : position}
        onValueChange={handleSliding}
        onSlidingStart={handleSlidingStart} 
        onSlidingComplete={handleSlidingComplete}
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#1DB954"
      />
      <ThemedText style={styles.timeText}>{formatTime(duration)}</ThemedText>
    </View>
  );
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
  },
});

export default SlideBar;
