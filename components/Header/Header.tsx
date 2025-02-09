import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";

const Header = () => {
  const iconColor = useThemeColor({}, "headerBackButton");
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons
          name="chevron-down-circle"
          size={30}
          color={iconColor}
          style={{ paddingBottom: 4 }}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
});
