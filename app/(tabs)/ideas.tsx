
import { View, Text, StyleSheet } from "react-native";

export default function IdeasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ideas</Text>
      <Text>• Day plans</Text>
      <Text>• Things to try</Text>
      <Text>• Things to watch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 8 }
});
