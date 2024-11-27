import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PeopleContext from "../PeopleContext";
import Dialog from "../components/Modal";
import MyButton from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PeopleScreen() {
  const navigation = useNavigation();
  const { people } = useContext(PeopleContext);
  const sortedPeople = (people) => {
    return people.sort((a, b) => {
      const [ayy, amm, add] = a.dob.split("/").map(Number);
      const [byy, bmm, bdd] = b.dob.split("/").map(Number);
      if (amm === bmm) {
        return add - bdd;
      }
      return amm - bmm;
    });
  };

  const swipeActions = (id) => {
    <TouchableOpacity
      onPress={() => deleteItem(id)}
      style={styles.deleteButton}
    >
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>;
  };

  const renderItem = ({ item }) => (
    <PanGestureHandler>
      <View style={styles.listItem}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.dob}</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("IdeaScreen")}>
          <Ionicons name="gift-outline" size={24} color="#228" />
        </Pressable>
      </View>
    </PanGestureHandler>
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView>
          {people ? (
            <FlatList
              data={sortedPeople(people)}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          ) : (
            <Dialog message="Please add at least one person" isVisible={true} />
          )}

          <MyButton
            onPress={() => navigation.navigate("AddPerson")}
            icon="person-add-outline"
            text="Add A Person"
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#bbd",
    backgroundColor: "#ffd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listText: {
    backgroundColor: "#ffd",
  },
  deleteButton: {},
  deleteText: {},
});
