
import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import events from "@/assets/data/events.json";
import EventCard from "@/components/EventCard";
import AdCarousel from "@/components/AdCarousel";

export default function DiscoverScreen() {
  const [city, setCity] = useState<string>("London");

  return (
    <FlatList
      ListHeaderComponent={<AdCarousel />}
      data={events.filter(e => e.city === city)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <EventCard event={item} />}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 }
});
