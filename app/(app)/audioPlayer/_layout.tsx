import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Header from "@/components/Header/Header";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import TrackListItem from "@/components/AudioPlayer/TrackListItem";
import { SafeAreaView } from "react-native-safe-area-context";

const AudioPlayer = () => {
  const {
    dummyTracks,
    changeTrack,
  } = useAudioPlayer();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Header />

      {/* Track List */}
      <FlatList
        data={dummyTracks}
        renderItem={({ item }) => (
          <TrackListItem item={item} onPress={() => changeTrack(item.id)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.trackList}
      />

      {/* Track Details */}
      <PlayerControls/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 16
  },
  trackList: {
    padding: 16,
  },
});

export default AudioPlayer;
