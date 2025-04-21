import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";

export default function Project2() {
  const showAlert = () => {
    Alert.alert("Alert", "hello!");
  };

  return (
    <View style={styles.container}>
      <Button title="Button 1" onPress={showAlert} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
