import React, {useContext} from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  const [imageUri ] = React.useState(null);

  const handleMenuPress = () => {
    navigation.openDrawer()
    console.log("Menu pressionado");
  };

 return (
    <ImageBackground source={require('../assets/fundoLogin.png')} resizeMode="cover" style={styles.container}>
     <View style={styles.header}>
     <TouchableOpacity onPress={handleMenuPress}>
       <Image source={require('../assets/hamburguer.png')} />
     </TouchableOpacity>
      <Image source={require('../assets/logo2.png')} style={styles.logo} />
     </View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    backgroundColor: '#FFDD26',
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
    elevation: 10,
  },
  logo: {
    width: 100,
    height: 100,
  }
});

