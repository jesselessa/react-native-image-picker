// React
import { useState } from "react";
// React Native
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
// Other library
import * as ImagePicker from "expo-image-picker";

export default function App() {
  // Hook - State
  let [selectedImage, setSelectedImage] = useState(null);

  // API call
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        {selectedImage !== null && (
          <View style={styles.container}>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.picture}
            />
          </View>
        )}

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.btn}>
          <Text style={styles.btnText}>Add a profile picture</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 80,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  btnText: {
    fontSize: 20,
    color: "black",
  },
  picture: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginTop: 30,
  },
});
