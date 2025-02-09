import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { Image } from "expo-image";
import { useThemeColor } from "@/hooks/useThemeColor";
import MusicImage from "@/assets/images/music.png";

type TrackItemProps = {
  item: any;
  onPress: () => void;
};

const TrackListItem = ({ item, onPress }: TrackItemProps) => {
  const iconColor = useThemeColor({}, "headerBackButton");

  return (
    <View style={styles.listContainer}>
      <Pressable style={styles.trackItem} onPress={onPress}>
        <Image style={styles.image} source={MusicImage} contentFit="contain" />
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
});

export default TrackListItem;
