import React, { useCallback, useContext, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Pressable, Alert} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';

export default function Perfil({ navigation }) {
  const [photo, setPhoto] = React.useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUri, setImageUri] = React.useState(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleMenuPress = () => {
    navigation.openDrawer()
    console.log("Menu pressionado");
  };
  const [imageUris, setImageUris] = useState([])

  async function pickImage(setImageUri, setPhoto) {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
          'Desculpe, precisamos de permissões da biblioteca de fotos para fazer isso funcionar!'
      );
      return; // Mata o processamento
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(null);
      setImageUri(result.assets[0].uri);
    }
  }

  async function pickPhoto(setPhoto, setImageUri) {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
          'Permissão necessária',
          'Você precisa conceder permissão para acessar a câmera!'
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(null);
      setPhoto(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress}>
       <Image style={styles.hamburguer} source={require('../assets/hamburguer.png')} />
     </TouchableOpacity>

      <View style={styles.tudo}>
        <Pressable
            onPress={() => {
              setIsModalVisible(true);
            }}>
          {!imageUri && !photo ? (
              <Image
                  source={require('../assets/lapis.png')}
                  style={styles.lapis}
              />
          ) : (
              <Image
                  source={{ uri: imageUri ? imageUri : photo }}
                  style={{
                    width: 200,
                    height: 200,
                    marginVertical: 20,
                    borderRadius: 100,
                    marginLeft: 60,
                    borderWidth: 5,
                    borderColor: '#d9d9d9',
                    elevation: 20,
                    shadowColor: '#52006A',
                  }}
              />
          )}
        </Pressable>

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
      <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
        <View style={styles.modal}>
          <Pressable onPress={() => pickImage(setImageUri, setPhoto)}>
            <Text style={styles.titulo}>Pegar da Galeria</Text>
            <View style={styles.input41}>
              {!imageUri ? (
                  <Image
                      source={require('../assets/galery.png')}
                      style={{
                        width: 150,
                        height: 120,
                        marginTop: 0,
                        marginLeft: 10,
                        borderRadius: 10,
                      }}
                  />
              ) : (
                  <Image
                      source={{ uri: imageUri }}
                      style={{
                        width: 240,
                        height: 200,
                        marginTop: 10,
                        borderRadius: 10,
                      }}
                  />
              )}
            </View>
          </Pressable>

          <Pressable onPress={() => pickPhoto(setPhoto, setImageUri)}>
            <Text style={styles.titulo}>Tirar Foto</Text>
            <View style={styles.input41}>
              {!photo ? (
                  <Image
                      source={require('../assets/camera.png')}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                      }}
                  />
              ) : (
                  <Image
                      source={{ uri: photo }}
                      style={{
                        width: 240,
                        height: 200,
                        marginTop: 10,
                        borderRadius: 10,
                      }}
                  />
              )}
            </View>
          </Pressable>
        </View>
      </Modal>
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
    height: 600,
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
    width: 280,
    height: 280,
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
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
    
  },
  scrollview: {
    backgroundColor: '#FF4D00',
    flex: 1,
  },
  logo: {
    width: 155,
    height: 72,
    marginLeft: 30,
  },
  logo2: {
    width: 70,
    height: 70,
    marginLeft: 90,
    marginTop: -3,
  },
  adiciona:{
    flexDirection: 'row',
    width: 260,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tudoReceita: {
    backgroundColor: 'white',
    width: '90%',
    minHeight: 600,
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 18,
    marginBottom: 50,
    paddingBottom: 20,
    alignItems: 'center',
    textAlign: 'left',
  },
  modal:{
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    minHeight: 545
  },
  textAdd: {
    color: '#FF4D00',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 20,
    shadowColor: '#fffff',
    borderRadius: 100,
    paddingHorizontal: 20,
    fontSize: 25,
    marginTop: -10,
    fontWeight: 600
  },
  input2: {
    backgroundColor: '#fff',
    elevation: 20,
    shadowColor: '#fffff',
    width: 250,
    height: 50,
    margin: 8,
    textAlign: 'left',
    padding: 15,
    borderRadius: 15,
    fontSize: 17,
    color: 'black',
    marginTop: 10,
    fontWeight: '900',
  },
  input3: {
    backgroundColor: '#fff',
    elevation: 20,
    shadowColor: '#fffff',
    width: '88%',
    height: 150,
    margin: 8,
    textAlign: 'left',
    padding: 15,
    borderRadius: 15,
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    fontWeight: '900',
  },
  input4: {
    backgroundColor: '#fff',
    elevation: 20,
    shadowColor: '#fffff',
    width: '88%',
    minHeight: 200,
    margin: 8,
    textAlign: 'left',
    padding: 15,
    borderRadius: 15,
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input41: {
    backgroundColor: '#fff',
    elevation: 20,
    shadowColor: '#fffff',
    width: '88%',
    minHeight: 200,
    margin: 8,
    left: 10,
    textAlign: 'left',
    padding: 15,
    borderRadius: 15,
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 5,
    textAlign: 'left',
  },
  tituloA: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 5,
    textAlign: 'left',
    width: 260
  },
  circuloParaAdicionarReceita: {
    backgroundColor: '#C0300D',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 30,
    left: 145,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
