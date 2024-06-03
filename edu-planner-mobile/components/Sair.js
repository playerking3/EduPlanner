import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Sair({setSairModal}) {
  const navigation = useNavigation()

  const handleMenuPress = () => {
    navigation.openDrawer();
    console.log("Menu pressionado");
  };

  const handleLogout = () => {
    setSairModal(false)
    navigation.navigate('Login');
  };
   const handlHome = () => {
     setSairModal(false)
    navigation.navigate('Home');
  };

 return (
  <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.mensagem}><Text>Você tem certeza que deseja sair de sua conta?</Text></View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlHome} style={[styles.button, styles.cancelar]}>
                <Text>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.sair]}>
                 <Text>Sair</Text>
            </TouchableOpacity>
        </View>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   position: 'absolute',
   top: 0, 
   left: 0,
   width: '100%',
   height: '100%',
   backgroundColor: 'rgba(255,255,255,0.5)'
 },
 card: {
   backgroundColor: 'white',
   borderRadius: 10,
   elevation: 5,
 },
 buttonContainer: {
   flexDirection: 'row',
   marginTop: 20,
 },
 button: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 50
 },
 cancelar:{
   backgroundColor: '#FFD700',
   borderBottomLeftRadius: 10
 },
 sair:{
   backgroundColor: '#FF6B00',
  borderBottomRightRadius: 10
 },
 mensagem:{
   padding: 15
 }
});
