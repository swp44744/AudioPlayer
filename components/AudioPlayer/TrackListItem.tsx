import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MusicImage from "@/assets/images/music.png";
import FastImage from "react-native-fast-image";
import { Track } from "@/types/audioPlayer/track";

type TrackItemProps = {
  item: Track;
  onPress: () => void;
  isPlaying: boolean
};

const TrackListItem = ({ item, onPress, isPlaying }: TrackItemProps) => {
  const iconColor = useThemeColor({}, "headerBackButton");



  return (
    <View style={[styles.listContainer, isPlaying && styles.activeTrack]}>
      <Pressable style={styles.trackItem} onPress={onPress}>
        <FastImage
          style={styles.image}
          source={MusicImage}
          resizeMode="contain"
        />
        <View style={styles.trackInfo}>
          <ThemedText>{item.title}</ThemedText>
          <ThemedText style={styles.artistText}>{item.artist}</ThemedText>
        </View>
      </Pressable>
      <Ionicons name="list-outline" size={30} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  trackItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  trackInfo: {
    marginLeft: 15,
  },
  artistText: {
    fontSize: 12,
    color: "#777",
  },
  image: {
    height: 40,
    width: 40,
  },
  activeTrack: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10
  }
});

export default TrackListItem;
