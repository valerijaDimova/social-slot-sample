
import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Linking } from "react-native";

type Event = {
  id: string;
  title: string;
  starts_at: string;
  city: string;
  image_url?: string;
  is_paid?: boolean;
  external_link?: string;
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <Pressable
      onPress={() => {
        if (event.external_link) Linking.openURL(event.external_link);
      }}
      style={styles.card}
    >
      {event.image_url ? (
        <Image source={{ uri: event.image_url }} style={styles.image} />
      ) : null}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{event.title}</Text>
        <Text>{new Date(event.starts_at).toLocaleString()}</Text>
        <Text>{event.city}</Text>
        {event.is_paid ? <Text>Paid</Text> : <Text>Free</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    gap: 12,
    marginBottom: 12,
    elevation: 2
  },
  image: { width: 72, height: 72, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "600" }
});
