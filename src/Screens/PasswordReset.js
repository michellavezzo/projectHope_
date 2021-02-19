import React from 'react';
import { 
    View, 
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
 } from 'react-native';

import Logo from '../../Assets/PNG/Android/logo.png'
import colors from '../colors.js'


//ip localhost 10.0.2.2
// import { Container } from './styles';
const PasswordReset = () =>{
    
  const [user,setUser]=React.useState(null);
  const [email,setEmail]=React.useState(null);

  return(
    <View>
      <Text style={styles.text}>
          DIGITE SEU EMAIL, PARA ENVIO DE TOKEN DE RECUPERAÇÃO
      </Text> 

      <TextInput
          style={ styles.input }      
          placeholder="Email"
          />

          <TouchableOpacity
          style={styles.buttonPurple}
          onPress={() => {
              alert('Botão pressionado');
          }}
          > 

          <Text style={styles.buttonLogin}> ENVIAR </Text>
          </TouchableOpacity>
      </View>
    )
}  



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

export default PasswordReset;