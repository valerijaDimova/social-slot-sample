
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function AdCarousel() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
      {[1,2,3].map(i => (
        <View key={i} style={styles.card}>
          <Text>Ad Slot {i}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { marginBottom: 12 },
  card: {
    width: 220,
    height: 100,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center"
  }
});
