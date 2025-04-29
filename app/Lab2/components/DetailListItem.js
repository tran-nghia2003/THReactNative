import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          style={{ marginRight: 16, color: colors.blue }}
        />
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 14,
    color: colors.greyDark,
    marginTop: 4,
  },
});

export default DetailListItem;
