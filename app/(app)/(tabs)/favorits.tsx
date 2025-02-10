import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/Header/HomeHeader";
import ListRenderer from "@/components/AudioPlayer/ListRenderer";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { useMemo } from "react";
import FavListEmpty from "@/components/AudioPlayer/FavListEmpty";

const strings = {
  headerTitle: "Favorits",
  action: "cog",
};

export default function TabTwoScreen() {
  const { dummyTracks } = useAudioPlayer();
  const favTracks = useMemo(() => {
    return dummyTracks.filter((track) => track.favorit);
  }, [dummyTracks]);

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "top"]}>
      <HomeHeader title={strings.headerTitle} action={strings.action} />

      {favTracks.length > 0 ? (
        <ListRenderer tracks={favTracks} />
      ) : (
        <FavListEmpty />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
