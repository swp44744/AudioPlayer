import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Header from "@/components/Header/Header";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import TrackListItem from "@/components/AudioPlayer/TrackListItem";
import { SafeAreaView } from "react-native-safe-area-context";

const AudioPlayer = () => {
  const { changeTrack, currentTrack, dummyTracks } = useAudioPlayer();

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "top"]}>
      <Header />
      <FlatList
        data={dummyTracks}
        renderItem={({ item }) => (
          <TrackListItem
            item={item}
            onPress={() => changeTrack(item.id)}
            isPlaying={currentTrack.title === item.title}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.trackList}
      />

      <PlayerControls currentTrack={currentTrack} />
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
