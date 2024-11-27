// display idea and picture
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PeopleContext from "../PeopleContext";
import MyButton from "../components/Button";
import Dialog from "../components/Modal";
export default function IdeaScreen() {
  const navigation = useNavigation();
  const { people } = useContext(PeopleContext);

  const renderItem = ({ item }) => (
    <PanGestureHandler>
      <View style={styles.listItem}>
        <Text>{item.name}</Text>
        <Text>{item.dob}</Text>
      </View>
    </PanGestureHandler>
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {/* {people.ideas ? (
            <FlatList
              data={people.ideas}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          ) : (
            <Dialog message="Please add some gift ideas" isVisible={true} />
          )} */}
          <MyButton
            onPress={() => navigation.navigate("AddIdea")}
            icon="bulb-outline"
            text="Add A Gift Idea"
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#bbd",
    backgroundColor: "#ffd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
