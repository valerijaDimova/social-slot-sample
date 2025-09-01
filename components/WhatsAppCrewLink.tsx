import React from "react";
import { Pressable, Text, StyleSheet, Linking } from "react-native";

export default function WhatsAppCrewLink({ url }: { url: string }) {
  return (
    <Pressable style={styles.btn} onPress={() => Linking.openURL(url)}>
      <Text style={styles.text}>Join WhatsApp Crew</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  text: { color: "#fff", fontWeight: "600" }
});
