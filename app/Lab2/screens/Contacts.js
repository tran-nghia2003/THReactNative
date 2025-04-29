import React, { useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import ContactListItem from "../components/ContactListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from "../store";
import { fetchContacts } from "../utils/api";
import colors from "../utils/colors";

const keyExtractor = ({ phone }) => phone;

const Contacts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state);

  // Gọi API và cập nhật Redux store
  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((data) => dispatch(fetchContactsSuccess(data)))
      .catch(() => dispatch(fetchContactsError()));
  }, []);

  // Sắp xếp danh bạ theo tên
  const contactsSorted = contacts
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  // Render mỗi item trong danh sách
  const renderItem = ({ item }) => {
    const { name, phone, avatar } = item;
    return (
      <ContactListItem
        name={name}
        phone={phone}
        avatar={avatar}
        onPress={() => navigation.navigate("Profile", { contact: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>Lỗi tải dữ liệu.</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  error: {
    color: "red",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default Contacts;
