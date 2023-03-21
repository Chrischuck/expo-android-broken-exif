import * as React from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function AssetExample() {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      exif: true,
      quality: 1,
    });

    console.log(JSON.stringify(result.exif, null, 2));
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 100, width: 100 }}
        source={require("./exif-test.jpeg")}
      />
      <Button title="select image" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
