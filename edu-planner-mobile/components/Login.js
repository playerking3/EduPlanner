import React, { useCallback, useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox/lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';
import Dados from "./DadosContext";

// Importe as imagens para o olho aberto e fechado
import OlhoAberto from '../assets/olhoaberto.png';
import OlhoFechado from '../assets/olhofechado.png';

export default function Login({ navigation }) {
  const [imageUri, setImageUri] = React.useState(null);
  const { opDigital, setOpcaoDigital } = useContext(Dados);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  let opcaoDigital = opDigital();

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('UserData', jsonValue);
    } catch (e) {
      return e;
    }
  };

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {

    }
  };

  const handleLogin = () => {
    if (senha !== '' && cpf !== '') {
      // Colocar a verificação da API aqui
      if (opcaoDigital) {
        let dados = {
          cpf: cpf,
          senha: senha,
          digital: true
        }
        const teste = storeData(dados);
      }
      navigation.navigate('Home');
    }
  };

  useFocusEffect(
      useCallback(() => {
        async function verificaDigital() {
          opcaoDigital = await opDigital();
          console.log(opcaoDigital);
          if (opcaoDigital) {
            const dados = await getData('UserData');
            console.log(dados);
            if (dados.digital) {
              const resposta = await LocalAuthentication.authenticateAsync();
              if (resposta.success) {
                navigation.navigate('Home');
              }
            }
          }
        }

        verificaDigital();
      }, [])
  );

  const formatCpf = (value) => {
    const cpf = value.replace(/\D/g, '');
    
    if (cpf.length <= 11) {
      return cpf
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    return cpf;
  };

  const handleCpfChange = (value) => {
    const formattedCpf = formatCpf(value);
    setCpf(formattedCpf);
  };

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
                  value={cpf}
                  onChangeText={handleCpfChange}
                  keyboardType="numeric"
                  maxLength={14}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Digite a sua Senha <Text style={{ color: 'red' }}>*</Text></Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={!mostrarSenha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity
                    style={{ position: 'absolute', top: 10, right: 10 }}
                    onPress={() => setMostrarSenha(!mostrarSenha)}
                >
                  <Image
                      source={mostrarSenha ? OlhoAberto : OlhoFechado}
                      style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPasswordText}>Esqueci a Senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                  onPress={(isChecked) => {
                    console.log("aa", isChecked);
                    setOpcaoDigital(isChecked ? "true" : "false");
                    opcaoDigital = opDigital();
                  }}
                  text={'Entrar com biometria'}
                  textStyle={{ textDecorationLine: 'none' }}
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
      height:       3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  forgotPasswordButton: {
    marginBottom: 20,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

