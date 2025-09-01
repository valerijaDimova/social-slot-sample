
import React from "react";
import { Pressable, Text, StyleSheet, Linking } from "react-native";

/**
 * Placeholder that opens a Stripe Checkout URL in the browser.
 * Replace CHECKOUT_URL with a real hosted checkout link for invited organisers.
 */
export default function InviteStripeCheckout() {
  const CHECKOUT_URL = "https://checkout.stripe.com/pay/cs_test_12345";
  return (
    <Pressable style={styles.btn} onPress={() => Linking.openURL(CHECKOUT_URL)}>
      <Text style={styles.text}>Buy Ticket</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: "#635BFF", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8 },
  text: { color: "#fff", fontWeight: "600" }
});
