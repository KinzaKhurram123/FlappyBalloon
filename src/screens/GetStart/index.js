import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../../constant/images';
import {styles} from './index.style';
import {navigate} from '../../navigation/NavigationRef';

const GetStart = () => {
  return (
    <ImageBackground source={images.splash_screen} style={{flex: 1}}>
      <View style={styles.main_view}>
        <TouchableOpacity
          onPress={() => navigate('Home')}
          style={styles.start_btn}>
          <Text style={styles.btn_text}>Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GetStart;
