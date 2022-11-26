import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  Image
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigationState,
  useRoute,
  useNavigationContainerRef,
  StackActions,
  NavigationActions,
} from '@react-navigation/native';
import COLORS from './app/src/consts/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from './app/src/views/screens/Onboarding/Onboarding';
import Main from './app/src/views/screens/Main/Main';
import SplashScreen from 'react-native-splash-screen'
const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
