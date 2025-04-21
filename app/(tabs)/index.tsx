// app/index.tsx
import { View, Text, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const labs = [1, 2, 3, 4, 5, 6];

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Chọn Lab:</Text>

      {labs.map((lab) => (
        <Link href={`/Lab${lab}`} asChild key={lab}>
          <Pressable
            style={{
              padding: 12,
              backgroundColor: "#90cdf4",
              marginBottom: 12,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Lab {lab}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}
