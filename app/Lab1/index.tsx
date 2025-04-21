// app/Lab1/index.tsx
import { View, Text, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Lab1Screen() {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Lab1 - Chọn Project:
      </Text>

      {projects.map((p) => (
        <Link href={`/Lab1/Project${p}`} asChild key={p}>
          <Pressable
            style={{
              padding: 12,
              backgroundColor: "#4fd1c5",
              marginBottom: 12,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Project {p}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}
