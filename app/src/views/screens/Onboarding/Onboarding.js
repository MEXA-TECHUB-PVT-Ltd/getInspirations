import 'react-native-gesture-handler';
import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import {
  Text,
  Button,
  Snackbar,
  Headline,
  ActivityIndicator,
  Colors,
  TouchableRipple,
} from 'react-native-paper';
import COLORS from '../../../consts/colors';
import base_url from '../../../consts/base_url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import admob ,{
  MaxAdContentRating ,
  BannerAdSize ,
  TestIds ,
  BannerAd ,
  InterstitialAd ,
  RewardedAd ,
  AdEventType ,
  RewardedAdEventType ,
}from '@react-native-firebase/admob';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Onboarding({navigation}) {
  const [loading, setloading] = useState(true);
  
  useEffect(() => {
    admob()
    .setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.PG,
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
    })
    .then(() => {
      // Request config successfully set!
      console.log('Request config successfully set!');
     
      // navigation.navigate('Onboarding');
    });
    setTimeout(() => {
      navigation.navigate('Main');
    }, 100);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={styles.mainView}>
        <ActivityIndicator animating={loading} color={COLORS.primary} />
        <BannerAd
            unitId={'ca-app-pub-5064357785360902/6179357041'}
            size={BannerAdSize.SMART_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
              console.log('Advert loaded');
            }}
            onAdFailedToLoad={error => {
              console.error('Advert failed to load: ', error);
            }}
          />
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;
