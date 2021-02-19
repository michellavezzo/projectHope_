import React, { useState } from "react";
import { 
    View, 
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Picker,
    Image,
    
 } from 'react-native';

import Logo from '../../Assets/PNG/Android/logo.png'
import colors from '../colors.js'

// import { Container } from './styles';
// usar flatLIst para listas, virtualizedList, sectionLIst
//onvaluechange (switch)
const Ask1 = () =>{
  return(
    <View>
      <Text style={styles.text}>
        Pergunta 01 de 05
      </Text> 

      <Text style={styles.text}>
        Com qual desses perfis voce mais se identifica?
      </Text> 

      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> dependente </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Co-dependente </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> ex-dependente </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> especialista </Text>
        </TouchableOpacity>
    
      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> PROXIMA PERGUNTA </Text>
        </TouchableOpacity>
  </View>
  )
}
const Ask2 = () =>{
  return(
    <View>
      <Text style={styles.text}>
        Pergunta 02 de 05
      </Text> 

      <Text style={styles.text}>
        Como voce descreveria a sua relação com a droga?
      </Text> 

      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Muito dependente </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Dependente </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Pouco dependente </Text>
        </TouchableOpacity>

    
      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> PROXIMA PERGUNTA </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Responder Mais tarde </Text>
        </TouchableOpacity>
  </View>
  )
}
const Ask3 = () =>{
  return(
    <View>
      <Text style={styles.text}>
        Pergunta 03 de 05
      </Text> 

      <Text style={styles.text}>
        Qual sua idade?
      </Text> 

      <TextInput
        style={ styles.input }      
        placeholder="Idade"
      />
    
      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> PROXIMA PERGUNTA </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Responder Mais tarde </Text>
        </TouchableOpacity>
  </View>
  )
}
const Ask4 = () =>{
  const [selectedValue, setSelectedValue] = useState("day");
  return(
    <View>
      <Text style={styles.text}>
        Pergunta 04 de 05
      </Text> 

      <Text style={styles.text}>
        Há quanto tempo voce nao utiliza drogas?
      </Text> 
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Dias" value="day" />
        <Picker.Item label="Mês" value="month" />
        <Picker.Item label="Anos" value="year" />
        
      </Picker>

      <TextInput
        style={ styles.input }      
        placeholder="00"
      />

    
      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> PROXIMA PERGUNTA </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Responder Mais tarde </Text>
        </TouchableOpacity>
  </View>
  )
}
const Ask5 = () =>{
  return(
    <View>
      <Text style={styles.text}>
        Pergunta 05 de 05
      </Text> 

      <Text style={styles.text}>
        Como voce descreveria a sua relação com a familia?
      </Text> 

      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> SUBSTITUIR POR IMG </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> SUBSTITUIR POR IMG </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> SUBSTITUIR POR IMG </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('este botao precisa ser selecionado');
        }}
       > 
         <Text style={styles.buttonLogin}> SUBSTITUIR POR IMG </Text>
        </TouchableOpacity>

    
      <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> CONCLUIR QUESTIONÁRIO </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonPurple}
         onPress={() => {
          alert('Botão pressionado');
        }}
       > 
         <Text style={styles.buttonLogin}> Responder Mais tarde </Text>
        </TouchableOpacity>
  </View>
  )
}
const CreateAccount = ({navigate}) =>{

  const [user,setUser]=React.useState(null);
  const [email,setEmail]=React.useState(null);
  const [password,setPassword]=React.useState(null);

  return(
    <View style = {styles.container}>
        <Image source={Logo} 
        style={styles.logoImg} /> 

      <Text style={styles.text}>
        CRIAR NOVA CONTA
      </Text> 
      <TextInput
          style={ styles.input }      
          placeholder="Nome"
        />
      <TextInput
          style={ styles.input }      
          placeholder="Email"
        />
        <TextInput
          style={ styles.input }
          secureTextESntry={true}
          placeholder="Senha"
        />
        <TouchableOpacity
          style={styles.buttonPurple}
          onPress={() => {
            alert('Botão pressionado');
          }}
        > 
          <Text style={styles.buttonLogin}> ENTRAR </Text>
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
      padding:10,
      textAlign: 'center',
      color:"black",
      fontWeight: 'bold',
      fontSize: 25,
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
      padding: 10,
      marginBottom: 10,
      height: 40,
      borderColor: 'gray',
      borderWidth: 0
  
    },
  });

export default CreateAccount;