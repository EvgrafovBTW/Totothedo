import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, NativeModules, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage'

import {userInfo, registration, signIn, signResponse} from './api';

const { StatusBarManager } = NativeModules;

/*API calls field*/

  //fetchCheck();
  //registration();
/*API calls field*/



export default function Auth({navigation}) {
    
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  global.vhod = false;


  const onRegPress = () => {
    registration();
    setName('');
    setPswd('');
  }

  const onSignPress = async () => {
    //console.log("1 "+vhod)
    await signIn();
    if (vhod == true){
    setName('');
    setPswd('');
    navigation.navigate("Body")
           
    } else{
      //console.log('4 ' + vhod)
      alert('не вошёл')
    }

    await userInfo();
            
  }

  global.login = name;
  global.password = pswd;

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.menu}>
      <TextInput style = {styles.txtBox} placeholder='Введите логин' value={name} onChangeText={(value) => setName(value)}></TextInput>
      <TextInput style = {styles.txtBox} placeholder='Введите пароль' value={pswd} secureTextEntry={true} onChangeText={(value) => setPswd(value)}></TextInput>

        <View style={styles.btnBlock}>
          <TouchableOpacity style={styles.confirmBtn} onPress={onSignPress}>
          <Text style={styles.confirmBtnTxt}>Вход</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmBtn} onPress={onRegPress}>
          <Text style={styles.confirmBtnTxt}>Регистрация</Text> 
          </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
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
      backgroundColor: "ivory",
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
    
    marginLeft: 10,
    marginRight: 10,
  },
  menu: {
    height: 200,
    marginTop: 100,
  },
  
});
