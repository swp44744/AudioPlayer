import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";
import { Route } from "@/common/routes";

const FavListEmpty = () => {
  return (
    <View style={styles.contianer}>
      <ThemedText style={styles.title}>
        Your favorites list is empty. Check out the playlist!
      </ThemedText>
      <Pressable style={styles.button} onPress={() => {router.navigate(`${Route.AudioPlayer}`)}}>
      <Text style={styles.buttonText}>🎵 Go to Player</Text>
    </Pressable>
    </View>
  );
};

export default FavListEmpty;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#C11C84", 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
