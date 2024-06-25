import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert} from "react-native";
import CardCurso from "./CardCurso";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cursos({ navigation }) {
  const [listaCursos, setListaCursos] = useState([]);

  async function getTurma() {
    console.log("GET TURMAS");

    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };

    fetch("http://10.92.20.44:5000/getCursos", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setListaCursos([...result.cursos])
        })
        .catch((error) => console.error(error));
  }

  useEffect(() => {
    getTurma()
  }, []);

  const handleDelete = async (id) => {
    try {
      setListaCursos(listaCursos.filter(curso => curso.id !== id));
    } catch (error) {
      console.error('Erro ao excluir curso:', error);
    }
  };

  const handleMenuPress = () => {
    navigation.openDrawer();
    console.log("Menu pressionado");
  };

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleMenuPress}>
            <Image style={styles.hamburguer} source={require('../assets/hamburguer.png')} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {listaCursos.map((curso) => (
              <CardCurso
                  key={curso[1]}
                  id={curso[1]}
                  placeholder={curso[0]}
                  img={curso[5]}
                  descricao={curso[2]}
                  faixaE={curso[4]}
                  cargaH={curso[3]}
                  onDelete={handleDelete}
              />
          ))}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  hamburguer: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
