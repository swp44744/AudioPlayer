import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import PlayerButton from "@/components/AudioPlayer/PlayerButton";
import JumpButton from "@/components/AudioPlayer/JumpButton";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import TrackInfo, { TrackDetailsProps } from "./TrackInfo";
import { useThemeColor } from "@/hooks/useThemeColor";
import SlideBar from "./SlideBar";

const PlayerControls: FC<TrackDetailsProps> = () => {
  const {
    playbackState,
    togglePlayback,
    skipToNext,
    skipToPrevious,
    seekTo,
    currentTrack,
  } = useAudioPlayer();

  const backgroundColor = useThemeColor({}, "background");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TrackInfo currentTrack={currentTrack} />
      <View style={styles.playerControls}>
        <PlayerButton name="play-skip-back" onPress={skipToPrevious} />
        <JumpButton
          name="rotate-ccw"
          onPress={() => seekTo("backward")}
          size={25}
        />
        <PlayerButton
          name={playbackState === "playing" ? "pause" : "play"}
          onPress={togglePlayback}
          size={50}
        />
        <JumpButton
          name="rotate-cw"
          onPress={() => seekTo("forward")}
          size={25}
        />
        <PlayerButton name="play-skip-forward" onPress={skipToNext} />
      </View>
      <SlideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  playerControls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  container: {
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 20,
    gap: 16,
  },
});

export default PlayerControls;
