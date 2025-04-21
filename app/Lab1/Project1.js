import { View, Text, StyleSheet } from "react-native";

export default function Project1() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  box: {
    backgroundColor: "skyblue",
    padding: 10,
    margin: 0,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    whiteSpace: "nowrap", // nếu là web
  },
});
