import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-black text-white"
    >
      <Text className="text-4xl font-rubik-extrabold mb-3 text-white"> Testing Tailwindcss </Text>
      <Link  href="/sign-in" className="text-white">Sign In</Link>
      <Link  href="/explore" className="text-white">Explore</Link>
      <Link  href="/profile" className="text-white">Profile</Link>
      <Link  href="/properties/1" className="text-white">Property Details</Link>
    </View>
  );
}
