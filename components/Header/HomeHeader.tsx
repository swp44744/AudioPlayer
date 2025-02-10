import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { FontAwesome5 } from "@expo/vector-icons";

type HeaderProps = {
  title: string,
  action: string
}
const HomeHeader = ({title, action}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <ThemedText style={styles.header}>{title}</ThemedText>
      <FontAwesome5 name={action} color="red" size={25} />
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
