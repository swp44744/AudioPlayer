import React from "react";
import { StyleSheet } from "react-native";
import Header from "@/components/Header/Header";
import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import { SafeAreaView } from "react-native-safe-area-context";
import ListRenderer from "@/components/AudioPlayer/ListRenderer";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

const AudioPlayer = () => {
  const { dummyTracks } = useAudioPlayer();
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "top"]}>
      <Header />
      <ListRenderer tracks={dummyTracks} />
      <PlayerControls />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 16,
  },
  trackList: {
    padding: 16,
  },
});

export default AudioPlayer;
