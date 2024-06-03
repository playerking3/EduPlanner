import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faCalendar} from "@fortawesome/free-solid-svg-icons/faCalendar";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

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
        <MenuItem onPress={cursos} icon={faBook} text="Cursos" />
        <MenuItem icon={faCalendar} text="Agenda" />
        <MenuItem onPress={perfil} icon={faUser} text="Perfil" />
      </View>
      <View style={styles.sair}>
        <MenuItem onPress={() => setSairModal(true)} icon={faRightFromBracket} />
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
        <FontAwesomeIcon icon={icon} style={styles.icon} size={22}/>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    flexDirection: 'column',
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

    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  icon: {
    marginRight: 10,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  sair: {
    position: "absolute",
    bottom: 0,
    left: 0

  }
});
