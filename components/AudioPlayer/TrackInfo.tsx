import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

const TrackInfo = () => {
  const { currentTrack } = useAudioPlayer();

  return (
    <View style={styles.trackDetails}>
      <ThemedText style={styles.trackTitle}>{currentTrack.title}</ThemedText>
      <ThemedText style={styles.trackArtist}>{currentTrack.artist}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  trackDetails: {
    alignItems: "center",
  },
  trackTitle: {
    fontSize: 21,
  },
  trackArtist: {
    fontSize: 16,
    color: "#777",
  },
});

export default TrackInfo;
