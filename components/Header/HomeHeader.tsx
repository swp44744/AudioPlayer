import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <ThemedText style={styles.header}>Home</ThemedText>
      <FontAwesome5 name="user-circle" color="red" size={25} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 22,
    flex: 1,
  },
});
