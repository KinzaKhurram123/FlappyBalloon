import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Text, ImageBackground } from "react-native";
import images from "./src/constant/images";
import MusicPlayer from "./src/components/BackgroundSound";
import jumps from './src/constant/sound'
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >

      <ImageBackground source={images.splash_screen} style={styles.safe_area} >
        <Text>Hello World</Text>
        {/* <MusicPlayer music={'../assets/sounds/jumps.mp3'} /> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;
