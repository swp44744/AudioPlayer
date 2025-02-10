import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";

const strings = {
  title: "Limited time only.",
  subtitle: "6 Months for $2.99.",
  footer: "Accept Now",
  subfooter: "6 Months for $2.99, then $10.99/month",
};
const PromoCard = () => {
  const buttonColor = useThemeColor({}, "headerBackButton");

  return (
    <LinearGradient
      colors={["#b71035", "#ff0000", "#C11C84"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.card}
    >
      <ThemedText style={styles.title}>{strings.title}</ThemedText>
      <ThemedText style={styles.title}>{strings.subtitle}</ThemedText>

      <View style={styles.iconContainer}>
        <Ionicons name="musical-notes" size={200} color={buttonColor} />
      </View>

      <ThemedText style={styles.acceptText}>{strings.footer}</ThemedText>
      <ThemedText style={styles.description}>{strings.subfooter}</ThemedText>
    </LinearGradient>
  );
};

export default PromoCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 20,
    height: "80%",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 32,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 26,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 26,
  },
});
