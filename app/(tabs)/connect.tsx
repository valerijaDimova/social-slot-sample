
import { View, Text, StyleSheet } from "react-native";
import WhatsAppCrewLink from "@/components/WhatsAppCrewLink";

export default function ConnectScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect</Text>
      <WhatsAppCrewLink url="https://wa.me/1234567890" />
      <Text style={{ marginTop: 12 }}>Buddy requests coming next</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 12 }
});
