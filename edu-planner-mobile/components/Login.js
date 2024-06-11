import React, { useCallback, useContext, useState } from "react";
import {View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox/lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';
import OlhoAberto from '../assets/olhoaberto.png';
import OlhoFechado from '../assets/olhofechado.png';
import {Dados} from "../context/context";

export default function Login({ navigation }) {
  const [imageUri, setImageUri] = React.useState(null);
  const { opDigital, setOpcaoDigital, fetchData, setAuth, setUser } = useContext(Dados);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

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

  const handleLogin = async () => {
    const data = {
      cpf: cpf,
      password: senha,
    };

    console.log(data);

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const acert = await response.json();
      if (acert.status === 'success') {
        await AsyncStorage.setItem('token', JSON.stringify(acert.token));
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', acert.info);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
      useCallback(() => {
        async function verificaDigital() {
          let opcaoDigital;
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

  async function cadastrar() {
    console.log(cpf)
    if (!cpf || !senha) {
      Alert.alert("Preenchimento obrigatório", "Por favor, preencha todos os campos.");
      return;
    }

    let loginResp = await fetchData('/login', 'POST', { 'cpf': cpf, 'password': senha });
    console.log("LOGIN", loginResp)

    if (loginResp.status === "success") {
      setAuth(loginResp.token.key);
      navigation.navigate('Home');
    } else {
      Alert.alert("Erro", "CPF ou senha incorretos. Tente novamente.");
    }
  }


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
                  keyboardType="numeric"
                  maxLength={14}
                    onChangeText={setCpf}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Digite a sua Senha <Text style={{ color: 'red' }}>*</Text></Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={!mostrarSenha}
                    value={senha}
                    onChangeText={setSenha}
                    keyboardType="visible-password"
                    placeholderTextColor="#fff"
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
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
              <Text style={styles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                  onPress={(isChecked) => {
                    console.log("aa", isChecked);
                    setOpcaoDigital(isChecked ? "true" : "false");
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
    width: 340,
    height: 600,
    borderRadius: 30,
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

