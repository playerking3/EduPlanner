import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

export default function Perfil({ navigation }) {
  const [imageUri ] = React.useState(null);

  const handleMenuPress = () => {
    navigation.openDrawer()
    console.log("Menu pressionado");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress}>
       <Image style={styles.hamburguer} source={require('../assets/hamburguer.png')} />
     </TouchableOpacity>
      <View style={styles.tudo}>
        <Image style={styles.lapis} source={require('../assets/lapis.png')} />
        <Text style={styles.textoInp}>Nome de usuário</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Nome" />
        </View>
        <Text style={styles.textoInp}>E-mail</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="E-mail" />
        </View>
        <Text style={styles.textoInp}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFDD26',
  },
  tudo: {
    backgroundColor: 'white',
    width: 350,
    height: 700,
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3, 
    elevation: 10,
    marginTop: 60
  },
  hamburguer: {
    marginRight: 320,
    marginTop: 30
  },
  lapis: {
    width: 300,
    height: 300,
    marginLeft: 20
  },
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
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
  textoInp: {
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#C2C2C2',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    

  },
  buttonCancelar:{
     backgroundColor: '#C2C2C2',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    padding: 50

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    
  },
});
