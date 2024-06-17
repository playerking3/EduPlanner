import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Pressable} from "react-native";

export default function Perfil({ navigation }) {
  const [imageUri ] = React.useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => {
    setIsModalVisible(false);
  };

  async function pickImage(setImageUri, setPhoto) {
    // Pedir permissão para acessar a biblioteca de fotos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // Verifica se a permissão não foi concedida
    if (status !== 'granted') {
      // Exibe uma mensagem de erro na tela
      Alert.alert(
          'Desculpe, precisamos de permissões da biblioteca de fotos para fazer isso funcionar!'
      );
      return; // Mata o processamento
    }

    // Permitir que o usuário selecione uma imagem da biblioteca
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Verifica se não deu erro
    if (!result.canceled) {
      // Passa a uri da imagem para o useState, para poder ser exibida
      setPhoto(null);
      setImageUri(result.assets[0].uri);
    }
  }

  async function pickPhoto(setPhoto, setImageUri) {
    // Pedindo permissão para acessar a câmera
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
        <Pressable
            onPress={() => {
              setIsModalVisible(true);
            }}>
          {!imageUri && !photo ? (
              <Image
                  source={require('../assets/lapis.png')}
                  style={{
                    width: 100,
                    height: 100,
                    marginTop: -10,
                    marginLeft: 10,
                    borderRadius: 10,
                  }}
              />
          ) : (
              <Image
                  source={{ uri: imageUri ? imageUri : photo }}
                  style={{
                    width: 240,
                    height: 200,
                    marginTop: 10,
                    borderRadius: 10,
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
});
