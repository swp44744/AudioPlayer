import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";
import PlayerButton from "@/components/AudioPlayer/PlayerButton";
import MusicImage from "@/assets/images/music.png";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { useThemeColor } from "@/hooks/useThemeColor";

type AudioPlayerBarProps = {
  backgroundColor: string;
  state: string;
  currentTrack: { title: string } | null;
  skipToNext: () => void;
  skipToPrevious: () => void;
  togglePlayback: () => void;
};

const AudioPlayerBar = () => {
  const { state, togglePlayback, skipToNext, skipToPrevious, currentTrack } =
    useAudioPlayer();
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View style={[styles.player, { backgroundColor }]}>
      <Image style={styles.image} source={MusicImage} contentFit="contain" />
      <ThemedText numberOfLines={1} style={{ flex: 1 }}>
        {state === "playing"
          ? currentTrack?.title || "Unknown Track"
          : "Not Playing"}
      </ThemedText>
      <PlayerButton name="play-skip-back" onPress={skipToPrevious} size={30} />
      <PlayerButton
        name={state === "playing" ? "pause" : "play"}
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
