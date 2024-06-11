import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

export default function Perfil({ navigation }, {senha, email, nome}) {
  const [imageUri ] = React.useState(null);

  const handleMenuPress = () => {
    navigation.openDrawer()
    console.log("Menu pressionado");
  };

  const perfil = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress}>
       <Image style={styles.hamburguer} source={require('../assets/hamburguer.png')} />
     </TouchableOpacity>
      <View style={styles.tudo}>
        <Image style={styles.lapis} source={require('../assets/defaultUser.png')} />
        <Text style={styles.textoInp}>Nome de usuário: </Text>
        <Text style={styles.textoInp}>{nome}</Text>
        <Text style={styles.textoInp}>E-mail: </Text>
        <Text style={styles.textoInp}>{email}</Text>
        <Text style={styles.textoInp}>Senha: </Text>
        <Text style={styles.textoInp}>{senha}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={perfil}  style={[styles.button, { backgroundColor: '#FFA500' }]} >
            <Text style={styles.buttonText}>Editar Perfil</Text>
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
    width: 320,
    height: 500,
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3, 
    elevation: 10,
    marginTop: 60
  },
  hamburguer: {
    marginRight: 260,
    marginTop: 30
  },
  lapis: {
    width: 200,
    height: 200,
    marginLeft: 60,
    borderRadius: 100,
    marginVertical: 20,
    borderWidth: 3,
    borderColor: 'white',
    elevation: 20,
    shadowColor: '#5d5d5d',
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
    fontSize: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 50
  },
  buttonCancelar:{
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    padding: 50

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 40,

  },
});
