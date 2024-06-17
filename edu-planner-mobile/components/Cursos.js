import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import CardCurso from "./CardCurso";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VisualizacaoCurso({ navigation }) {
  const [listaCursos, setListaCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const responseCursos = await fetch(props.api + '/getCursos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token })
        });
        const dataCursos = await responseCursos.json();
        setListaCursos(dataCursos.cursos);

        const responseTurmas = await fetch(props.api + '/getTurma', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token })
        });
        const dataTurmas = await responseTurmas.json();
        setTurmas(dataTurmas.lista_turma);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
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
                  key={curso.id}
                  id={curso.id}
                  img={curso.imagem}
                  titulo={curso.titulo}
                  hora={curso.hora}
                  curso={curso.curso}
                  faixa={curso.faixa}
                  descricao={curso.descricao}
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
