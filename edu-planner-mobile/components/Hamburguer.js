import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Menu({ navigation, sairModal, setSairModal }) {
  const perfil = () => {
    navigation.navigate('Perfil');
  };

  const cursos = () => {
    navigation.navigate('Cursos');
  };


  return (
    <View style={styles.container}>
      <View style={styles.menuItems}>
        <MenuItem onPress={cursos} icon={require('../assets/caalendario.png')} text="Cursos" />
        <MenuItem icon={require('../assets/agenda.png')} text="Agenda" />
        <MenuItem onPress={perfil} icon={require('../assets/perfiil.png')} text="Perfil" />
        <View>
          <MenuItem onPress={() => setSairModal(true)} icon={require('../assets/sair.png')} />
        </View>
        
      </View>
    </View>
  );
}

const MenuItem = ({ icon, text, onPress }) => {
  const [pressed, setPressed] = React.useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <View style={styles.menuItem}>
        <Image
          style={[styles.icon, pressed && styles.iconPressed]}
          source={icon}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  menuItems: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start', 
    marginTop: -20, 
  },
  menuItem: {
    backgroundColor: '#FFD700',
    
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height:30,
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
