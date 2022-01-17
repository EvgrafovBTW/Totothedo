import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, NativeModules, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {fetchCheck, registration, signIn} from './api';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import Auth from "./Authorisation"
import Body from './appHub';

const { StatusBarManager } = NativeModules;
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Авторизация"
        component={Auth}
      />

      <Stack.Screen
        name="Body"
        component={Body}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'silver',
  },
  txtBox: {
      marginTop: 10,
      borderRadius: 1,
      backgroundColor: "pink",
  },
  confirmBtn: {
    marginTop: 10,
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    alignItems: 'center'

  },
  confirmBtnTxt:{
    fontSize: 24,
    fontWeight: '400',
    color: "#fff",
  },
  btnBlock: {
    flex: 2,
    flexDirection: 'column',
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  menu: {
    height: 200,
    marginTop: 100,
  },
  
});
