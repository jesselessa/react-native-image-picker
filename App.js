import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  // Picking an image
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  // Using the selected image
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
          style={styles.img}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={openImagePickerAsync}>
        <Text style={styles.btnTxt}>Add a profile picture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    // width: 250,
    // height: 250,
    // borderRadius: 150,
    backgroundColor: "white",
    borderWidth: 1,
  },
  img: { width: 270, height: 270, borderRadius: 150 },
  btn: {
    backgroundColor: "#fff",
    width: 200,
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1,
  },
  btnTxt: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
