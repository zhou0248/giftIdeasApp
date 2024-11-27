import { Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MyButton({ onPress, icon, text }) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#228" />
      <Text> {text} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffd",
    padding: 15,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: 150,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#aad",
  },
});
