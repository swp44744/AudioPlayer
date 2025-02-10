import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import PlayerButton from "@/components/AudioPlayer/PlayerButton";
import MusicImage from "@/assets/images/music.png";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { useThemeColor } from "@/hooks/useThemeColor";
import FastImage from "react-native-fast-image";

const AudioPlayerBar = () => {
  const {
    playbackState,
    togglePlayback,
    skipToNext,
    skipToPrevious,
    currentTrack,
  } = useAudioPlayer();

  const backgroundColor = useThemeColor({}, "background");

  return (
    <View style={[styles.player, { backgroundColor }]}>
      <FastImage
        style={styles.image}
        source={MusicImage}
        resizeMode="contain"
      />
      <ThemedText numberOfLines={1} style={{ flex: 1 }}>
        {playbackState === "playing"
          ? currentTrack?.title || "Unknown Track"
          : "Not Playing"}
      </ThemedText>
      <PlayerButton name="play-skip-back" onPress={skipToPrevious} size={30} />
      <PlayerButton
        name={playbackState === "playing" ? "pause" : "play"}
        onPress={togglePlayback}
        size={40}
      />
      <PlayerButton name="play-skip-forward" onPress={skipToNext} size={30} />
    </View>
  );
};

export default AudioPlayerBar;

const styles = StyleSheet.create({
  player: {
    width: "100%",
    borderRadius: 15,
    marginBottom: 26,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    gap: 8,
  },
  image: {
    height: 40,
    width: 40,
  },
});
