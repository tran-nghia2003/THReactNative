import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../utils/colors";

const ContactThumbnail = ({ avatar, name, phone }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      {phone && <Text style={styles.phone}>{phone}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 16,
    color: colors.white,
    marginTop: 4,
  },
});

export default ContactThumbnail;
