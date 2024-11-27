import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useCameraPermissions, Camera, CameraView } from "expo-camera";
import Dialog from "../components/Modal";
import MyButton from "../components/Button";

export default function AddIdeaScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState("back");
  const [camRef, setCamRef] = useState(null);
  const [image, setImage] = useState(null);

  const toggleFacing = () => {
    setCamera(camera === "back" ? "front" : "back");
  };

  const takePicture = async () => {
    if (camRef) {
      const pic = await camRef.takePictureAsync();
      setImage(pic);
      console.log(pic);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        {/* <Dialog message="Need Camera Permission" isVisible={true} /> */}
        <MyButton text="Request Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    /* 
    form that takes text input and a button onpress that calls
    a function to check the permission and returns the camera view 
    and sets the image 
    another function (?) that checks if a picture is available, display it
    and 
    add a button to submit the form if text && image push the idea object the end of the array
     */

    <View style={styles.container}>
      <CameraView facing={camera} style={styles.camera}>
        <View style={styles.camControl}>
          <TouchableOpacity style={styles.btn} onPress={toggleFacing}>
            <Ionicons name="arrow-redo-outline" size={24} color="#228" />
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={takePicture}>
            <Ionicons name="camera-outline" size={24} color="#228" />
            <Text style={styles.text}>Take a Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    flex: 1,
  },
  camControl: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20,
  },
  btn: {
    backgroundColor: "#ffd",
    padding: 15,
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#aad",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#228",
    marginLeft: 5,
  },
});
