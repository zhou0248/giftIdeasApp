import { useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import MyButton from "../components/Button";

export default function Dialog({ message, isVisible }) {
  const [visible, setVisible] = useState(isVisible);
  const toggleModal = () => {
    setVisible(!visible);
    console.log("toggle button pressed", visible);
  };

  return (
    <View style={styles.content}>
      <Modal
        isVisible={visible}
        hasBackdrop={true}
        onSwipeComplete={toggleModal}
        swipeDirection="up"
        onBackdropPress={toggleModal}
      >
        <View style={styles.modal}>
          <Text style={styles.text}>{message}</Text>
          <MyButton onPress={toggleModal} text="Close" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    marginTop: 200,
    backgroundColor: "#ffd",
    borderWidth: 2,
    borderColor: "#bbd",
    padding: 30,
    borderRadius: 15,
    alignSelf: "center",
  },
  text: {
    paddingBottom: 15,
    fontSize: 18,
  },
});
