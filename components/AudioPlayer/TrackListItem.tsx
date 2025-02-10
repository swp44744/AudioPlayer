import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MusicImage from "@/assets/images/music.png";
import FastImage from "react-native-fast-image";
import { Track } from "@/types/audioPlayer/track";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type TrackItemProps = {
  item: Track;
  onPress: () => void;
  isPlaying: boolean;
};

const TrackListItem = ({ item, onPress, isPlaying }: TrackItemProps) => {
  const iconColor = useThemeColor({}, "headerBackButton");
  const { handleFavorits } = useAudioPlayer();
  const { title, artist, favorit } = item;
  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animation.value, [0, 1], [1, 1.5]);
    return {
      transform: [{ scale }],
    };
  });

  const handleFavoritePress = () => {
    animation.value = 1;
    animation.value = withSpring(0, { damping: 5 });

    handleFavorits(item);
  };

  return (
    <View style={[styles.listContainer, isPlaying && styles.activeTrack]}>
      <Pressable style={styles.trackItem} onPress={onPress}>
        <FastImage
          style={styles.image}
          source={MusicImage}
          resizeMode="contain"
        />
        <View style={styles.trackInfo}>
          <ThemedText>{title}</ThemedText>
          <ThemedText style={styles.artistText}>{artist}</ThemedText>
        </View>
      </Pressable>
      <Pressable onPress={handleFavoritePress}>
        <Animated.View style={animatedStyle}>
          <Ionicons
            name={favorit ? "heart" : "heart-outline"}
            size={30}
            color={favorit ? "red" : iconColor}
          />
        </Animated.View>
      </Pressable>
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
    borderRadius: 10,
  },
});

export default TrackListItem;
