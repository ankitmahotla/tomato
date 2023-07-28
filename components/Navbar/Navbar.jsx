import { View, Text } from "react-native";

export default function Navbar() {
  return (
    <View
      style={{
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "red",
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
        Tomato
      </Text>
    </View>
  );
}
