import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import colors from "../utils/colors";

const ContactListItem = ({ name, phone, avatar, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "500",
  },
  phone: {
    fontSize: 14,
    color: colors.greyDark,
    marginTop: 2,
  },
});

export default ContactListItem;
