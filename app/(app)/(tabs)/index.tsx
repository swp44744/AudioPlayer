import React from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import HomeHeader from "@/components/Header/HomeHeader";
import PromoCard from "@/components/AudioPlayer/PromoCard";
import AudioPlayerBar from "@/components/AudioPlayer/AudioPlayerBar";
import { Route } from "@/common/routes";

const HomeScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: bottom }]} edges={["top", "bottom"]}>
      <HomeHeader />
      <View style={{ flex: 1 }}>
        <PromoCard />
      </View>
      <Pressable onPress={() => router.navigate(`${Route.AudioPlayer}`)}>
        <AudioPlayerBar />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
});
