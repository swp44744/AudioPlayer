import { FlatList, StyleSheet } from "react-native";
import React from "react";
import TrackListItem from "./TrackListItem";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { Track } from "@/types/audioPlayer/track";

type RendererProps = {
    tracks: Track[]
}
const ListRenderer = ({tracks}: RendererProps) => {
  const { changeTrack, currentTrack } = useAudioPlayer();
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => (
        <TrackListItem
          item={item}
          onPress={() => changeTrack(item.id)}
          isPlaying={currentTrack.title === item.title}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.trackList}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListRenderer;

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
