import React, {useCallback, useContext, useEffect, useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox/lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect} from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';
import Dados from "./DadosContext";

export default function Login({ navigation }) {
  const [imageUri, setImageUri] = React.useState(null);
  const { opDigital, setOpcaoDigital} = useContext(Dados)
  const [cpf, setCpf] = useState(null)
  const [senha, setSenha] = useState('')

  let opcaoDigital = opDigital()

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('UserData', jsonValue);
    } catch (e) {
      return e
    }
  };

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  const handleLogin = () => {
    if (senha!= '' && cpf != ''){
      //colocar a verificação da api aqui
      if (opcaoDigital){
        let dados = {
          cpf: cpf,
          senha: senha,
          digital: true
        }
        const teste = storeData(dados)

      }
      navigation.navigate('Home');
    }

  };

  useFocusEffect(
    useCallback(() => {
      async function verificaDigital(){
        opcaoDigital = await opDigital()
        console.log(opcaoDigital)
        if (opcaoDigital){
          const dados = await getData('UserData')
          console.log(dados)
          if (dados.digital){
            const resposta = await LocalAuthentication.authenticateAsync()
            if (resposta.success){
              navigation.navigate('Home');
            }
          }
        }
      }

      verificaDigital()
    }, [])
  )

  return (
    <ImageBackground source={require('../assets/fundoLogin.png')} resizeMode="cover" style={styles.container}> 
      <View style={styles.div}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo2.png')} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Digite o seu CPF <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="CPF"
              onChangeText={setCpf}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Digite a sua Senha <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={setSenha}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Fazer Login</Text>
          </TouchableOpacity>
          <View style={styles.checkBox}>
            <BouncyCheckbox
                onPress={(isChecked)=> {
                  console.log("aa", isChecked)
                  setOpcaoDigital(isChecked ? "true" : "false")
                  opcaoDigital = opDigital()
                }}
                text={'Entrar com biometria'}
                textStyle={{textDecorationLine: 'none'}}
                fillColor={'orange'}

            />
          </View>
        </View>
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    width: '100%',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 16,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    width: 350,
    height: 600,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
    elevation: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
