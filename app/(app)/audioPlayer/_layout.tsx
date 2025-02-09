import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Pressable } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import SlideBar from "@/components/AudioPlayer/SlideBar";
import Header from "@/components/Header/Header";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Image } from "expo-image";
import PlayerButton from "@/components/AudioPlayer/PlayerButton";
import { SafeAreaView } from "react-native-safe-area-context";
import JumpButton from "@/components/AudioPlayer/JumpButton";
import MusicImage from "@/assets/images/music.png";

export default function AudioPlayer() {
  const {
    state,
    togglePlayback,
    skipToNext,
    skipToPrevious,
    seekTo,
    currentTrack,
    dummyTracks,
    changeTrack
  } = useAudioPlayer();

  const backgroundColor = useThemeColor({}, "background");

  // FlatList render item
  const renderItem = ({ item }: { item: any }) => (
    <Pressable style={styles.trackItem} onPress={() => {changeTrack(item.id)}}>
      <Image source={MusicImage} contentFit="contain"  style={styles.trackImage} />
      <View style={styles.trackInfo}>
        <ThemedText>{item.title}</ThemedText>
        <ThemedText style={styles.artistText}>{item.artist}</ThemedText>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Header />
      
      {/* Track List */}
      <FlatList
        data={dummyTracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.trackList}

      />

      {/* Track Details */}
      <View style={{backgroundColor, borderRadius: 20, padding: 16, margin: 8}}>
      <View style={styles.trackDetails}>
        <ThemedText style={styles.trackTitle}>{currentTrack.title}</ThemedText>
        <ThemedText style={styles.trackArtist}>{currentTrack.artist}</ThemedText>
      </View>

      {/* Player Controls */}
      <View style={styles.playerControls}>
        <PlayerButton name="play-skip-back" onPress={skipToPrevious} />
        <JumpButton name="rotate-ccw" onPress={() => seekTo("backward")} size={25} />
        <PlayerButton
          name={state === "playing" ? "pause" : "play"}
          onPress={togglePlayback}
          size={50}
        />
        <JumpButton name="rotate-cw" onPress={() => seekTo("forward")} size={25} />
        <PlayerButton name="play-skip-forward" onPress={skipToNext} />
      </View>
      <SlideBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  trackList: {
    padding: 16,
  },
  trackItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  trackImage: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  trackInfo: {
    marginLeft: 15,
  },
  artistText: {
    fontSize: 12,
    color: "#777",
  },
  trackDetails: {
    alignItems: "center",
    marginVertical: 20,
  },
  trackTitle: {
    fontSize: 21,
  },
  trackArtist: {
    fontSize: 16,
    color: "#777",
  },
  playerControls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    gap: 25,
    marginBottom: 30,
  },
  seekButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
  },
});
