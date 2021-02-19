//import React, { Fragment } from 'react'; // funcs 
import React, { useState, useCallback } from 'react';

import Logo from '../../Assets/PNG/Android/logo.png'
import colors from '../colors.js'
import api from '../services/api'

import {
  //SafeAreaView, // div p ios
  StyleSheet, // como se fosse css
  ScrollView, //div que rola
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  Alert, 
} from 'react-native'; //template react componentes p celular


const Login = ({ navigation }) => {

  const [user, setUser]= useState(null);
  const [email,setEmail]= useState("michassa1l@michel.com");
  const [password, setPassword]= useState("123");
  const [errorMessage, setErrorMessage]= useState(null); // isso foi um teste apagar
  //const [response, setResponse]= React.useState


  const signIn = useCallback(() => {
    try {
      console.log('amigo estou aqui');

      api.post('http://192.168.27.108:3000/authenticate', {
        email, password,
      }).then(res => {
        const { user, token } = res.data;

        console.log('amigo estou aqui wuuuuuuuu');

        AsyncStorage.multiSet([
          ['@projectHope: token', token],
          ['@projectHope: user',  JSON.stringify(user)],
        ]);

        console.log(res);
      }).catch(error => {
        console.log(error);
      })
      
      Alert.alert('LOgin')
    } catch(err) {
      console.log('teste err', err);
    }
  }, [email, password]);
   

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} 
        style={styles.logoImg} /> 

      <View>
      <Text style={styles.text}> {email} - {password} </Text>
      {errorMessage && <Text> {errorMessage}</Text>}
      </View> 

      <View> 
      <TextInput
        style={ styles.input }      
        placeholder="Email"
        onChangeText={ setEmail }
        value={ email }
      />

      <TextInput
        style={ styles.input }
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={ setPassword }
        value={ password }
      />

      <TouchableOpacity
        style={styles.buttonPurple}
        //onPress = {() => navigation.navigate('Home')}
        //onPress = {() => this.signIn }
        onPress={ signIn }
      > 
         <Text style={styles.buttonLogin}> ENTRAR </Text>
      </TouchableOpacity>
      </View>
      
      <View>     
        <TouchableOpacity
          style={styles.buttonForgotPass}
          onPress = {() => navigation.navigate('PasswordReset')}
        >
          <Text style={styles.buttonForgotPass}> ESQUECI MINHA SENHA </Text>
        </TouchableOpacity>
      </View>

      <View> 

        <Text style={styles.text}> NÃO POSSUI CONTA? </Text> 

        <TouchableOpacity 
          style={styles.buttonWhite}
          onPress = {() => navigation.navigate('CreateAccount')}
        > 
          <Text style={styles.buttonCreateAccount}> CRIAR NOVA CONTA </Text>
        </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({  //basicamente o css
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: colors.background,
  }, 
  text: {
    marginTop: 50,
    padding:10,
    textAlign: 'center',
    color:"black",
  },

  logoImg: {
    width:365,
    height:145,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    

  },
  buttonWhite: {
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    borderWidth:2,
    borderColor: colors.strong_purple, 
  },

  buttonPurple: {
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    borderWidth:2,
    borderColor: colors.strong_purple,
    backgroundColor:colors.strong_purple, 
  },

  buttonLogin: {
    margin:4,
    color: 'white',
    
  },
  buttonForgotPass:{
    color: colors.grey,
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 25,

  },
  buttonCreateAccount:{
    margin:4,
    alignItems:'center',
    color: colors.strong_purple,
  },
  input: {   
    height: 40,
    borderColor: 'gray',
    borderWidth: 0

  },
  

  
});

export default Login;
