import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(170, 170, 170)",
  },
});

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }
    return accumulator;
  }, {});

  const sections = Object.keys(groupedData).map((key) => groupedData[key]);

  return sections.sort((a, b) => (a.title > b.title ? 1 : -1));
};

const PEOPLE = [
  { name: { title: "Mr", first: "John", last: "Anderson" } },
  { name: { title: "Ms", first: "Bella", last: "Brown" } },
  { name: { title: "Mr", first: "Chris", last: "Carter" } },
  { name: { title: "Mrs", first: "Diana", last: "Dawson" } },
  { name: { title: "Ms", first: "Ella", last: "Evans" } },
  { name: { title: "Mr", first: "Frank", last: "Foster" } },
  { name: { title: "Ms", first: "Grace", last: "Green" } },
  { name: { title: "Mr", first: "Harry", last: "Hill" } },
  { name: { title: "Ms", first: "Ivy", last: "Irving" } },
  { name: { title: "Mr", first: "Jack", last: "Johnson" } },
  { name: { title: "Ms", first: "Kate", last: "Keller" } },
  { name: { title: "Mr", first: "Leo", last: "Lewis" } },
  { name: { title: "Ms", first: "Mia", last: "Morris" } },
  { name: { title: "Mr", first: "Noah", last: "Nelson" } },
  { name: { title: "Ms", first: "Olivia", last: "Owens" } },
  { name: { title: "Mr", first: "Paul", last: "Perry" } },
  { name: { title: "Ms", first: "Quinn", last: "Quincy" } },
  { name: { title: "Mr", first: "Ryan", last: "Reed" } },
  { name: { title: "Ms", first: "Sophia", last: "Smith" } },
  { name: { title: "Mr", first: "Tom", last: "Turner" } },
  { name: { title: "Ms", first: "Uma", last: "Underwood" } },
  { name: { title: "Mr", first: "Victor", last: "Vance" } },
  { name: { title: "Ms", first: "Wendy", last: "White" } },
  { name: { title: "Mr", first: "Xander", last: "Xavier" } },
  { name: { title: "Ms", first: "Yara", last: "Young" } },
  { name: { title: "Mr", first: "Zane", last: "Zimmerman" } },
];

export default function Project6() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}
