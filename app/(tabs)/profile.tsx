
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Your profile</Text>
        <Text>Name: Sample User</Text>
        <Text>Notifications: Enabled</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { padding: 16, borderRadius: 12, backgroundColor: "#fff", elevation: 2 },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 8 }
});
