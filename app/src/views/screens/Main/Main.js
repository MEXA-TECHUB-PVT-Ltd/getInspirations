import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
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
  Linking
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
import RNRestart from 'react-native-restart';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Main({ navigation }) {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState('');
  const callApi = async () => {
    setloading(true);
    var InsertAPIURL = 'https://getinspiration.app/api/getLink/';
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    await fetch(InsertAPIURL, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(response => {
        setloading(false);
        Linking.openURL(response[0].link);
        // console.log(response[0].link);

      })
      .catch(error => {

        alert('this is error' + error);
      });

  }
  useEffect(() => {
 
    // RNRestart.Restart();
  },[]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* <View style={styles.mainView}>
        
      </View> */}
      <ImageBackground source={require('../../../assets/bkg.png')} resizeMode="cover" style={{
        // flex: 1,
        width: width,
        height: height,
        alignSelf: 'center',
      }}>
        <View style={styles.counterContainer}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.counterImage}
          />
        </View>
        <View style={[styles.counterContainer, {
          alignSelf: 'center',
          padding: 10,
          borderRadius: 20,
          marginTop: 20,
        }]}>
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: 20,
            }}
          >Get Motivation in One Tap </Text>
        </View>

        <Button
          mode='contained'
          style={{
            borderRadius: 50,
            color: COLORS.white,
            backgroundColor: COLORS.primary,
            width: '70%',
            marginTop: '16%',
            alignSelf : 'center'
          }}
          contentStyle={{
            padding: '2%',
            // fontFamily: 'JosefinSans-Bold',
       
          }}
          loading={loading}
          disabled={loading}
          onPress={() => callApi()}>

          <Text
            style={{
              color: COLORS.white,
            }}
          >Get Inspiration
          </Text>
        </Button>
        <View style={{
          marginTop: 20,
          paddingHorizontal:'30%',
          alignSelf: 'center',
          // width: '90%',
          }}>
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

      </ImageBackground>
    </SafeAreaView>
  );
}

export default Main;
