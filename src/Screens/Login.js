//import React, { Fragment } from 'react'; // funcs 
import * as React from 'react';

import Logo from '../../Assets/PNG/Android/logo.png'
import colors from '../colors.js'
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
} from 'react-native'; //template react componentes p celular
import { Colors } from 'react-native/Libraries/NewAppScreen';

// funcoes movidas direto para a principal pois navigation nao funcionava, pesquisar dps
// const FormLogin = ({ navigation }) =>{
//   return(
//     <View>
//     <TextInput
//         style={ styles.input }      
//         placeholder="Email"
//       />
//       <TextInput
//         style={ styles.input }
//         secureTextEntry={true}
//         placeholder="Senha"
//       />
//       <TouchableOpacity
//          style={styles.buttonPurple}
//          onPress={() => {
//           alert('Botão pressionado');
//         }}
//        > 
//          <Text style={styles.buttonLogin}> ENTRAR </Text>
//         </TouchableOpacity>
//   </View>
//   )
// }

// const CreateAccount = ({ navigation }) =>{
//   return(
//     <View> 

//     <Text style={styles.text}>
//       NÃO POSSUI CONTA?
//     </Text> 

//     <TouchableOpacity 
//          style={styles.buttonWhite}
//          onPress = {() => navigation.navigate('CreateAccount')}
         
//        >
//          <Text style={styles.buttonCreateAccount}> CRIAR NOVA CONTA </Text>
//         </TouchableOpacity>

//     </View>

//   )
// }

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={Logo} 
        style={styles.logoImg} /> 

      <View> 
      <TextInput
        style={ styles.input }      
        placeholder="Email"
      />

      <TextInput
        style={ styles.input }
        secureTextEntry={true}
        placeholder="Senha"
      />

      <TouchableOpacity
         style={styles.buttonPurple}
         onPress = {() => navigation.navigate('Home')}
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
