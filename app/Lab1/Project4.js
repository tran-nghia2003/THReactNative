import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

// Component hiển thị số lần nhấn (nhận props từ cha)
const CounterText = ({ count }) => {
  return (
    <Text style={styles.text}>
      You've pressed the button: {count} time{count !== 1 ? "s" : ""}!
    </Text>
  );
};

export default function Project4() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <CounterText count={count} />
      <Pressable onPress={() => setCount(count + 1)}>
        <Text style={styles.linkText}>Press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
