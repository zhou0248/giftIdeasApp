import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PeopleContext from "../PeopleContext";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import MyButton from "../components/Button";
import Dialog from "../components/Modal";

export default function AddPersonScreen() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { addPerson } = useContext(PeopleContext);
  const navigation = useNavigation();

  const savePerson = () => {
    if (name && dob) {
      addPerson(name, dob);
      navigation.goBack();
    } else {
      setShowModal(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.textInput}
          />
          <DatePicker
            onSelectedChange={(selectedDate) => {
              setDob(selectedDate);
            }}
            options={{ backgroundColor: "#ffd", mainColor: "#338" }}
            current="2000-01-01"
            minimumDate="1900-01-01"
            maximumDate={new Date().toISOString().split("T")[0]}
            mode="calendar"
          />
          {/* <Dialog message="Please fill in all fields" isVisible={showModal} /> */}
          <MyButton
            onPress={savePerson}
            icon="bookmark-outline"
            text="Save a Person"
          />
          <MyButton
            onPress={() => navigation.goBack()}
            icon="return-down-back-outline"
            text="Cancel"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  textInput: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#aad",
    margin: 10,
    backgroundColor: "#ffd",
  },
});
