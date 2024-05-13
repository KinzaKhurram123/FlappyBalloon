import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../../constant/images';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const GetStart = ({navigation}) => {
  return (
    <ImageBackground source={images.splash_screen} style={{flex: 1}}>
      <View style={styles.main_view}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.start_btn}>
          <Text style={styles.btn_text}>Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GetStart;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  start_btn: {
    height: 40,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
