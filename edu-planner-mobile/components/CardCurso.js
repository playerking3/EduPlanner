import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function CardCurso({ img, titulo, descricao, hora, curso, faixa }) {
  const [ver, setVer] = useState(false);
  const desc = Array.from({ length: 101 }, (_, i) => 1974 + i);

  const handleVerMais = () => {
    setVer(!ver);
  };

  return (
    <View style={styles.div1}>
      <Image style={styles.img} source={img} />
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{titulo}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.textos}>
          <Text style={styles.texto}>Presencial</Text>
          <Text style={styles.texto}>Cursos livres</Text>
          <Text style={styles.texto}>{curso}</Text>
        </ScrollView>
        <View style={styles.row}>
          <Image style={styles.icon} source={require('../assets/relogio.png')} />
          <Text>Carga Horária: {hora} horas</Text>
        </View>
        {ver && (
          <>
          <View style={styles.row}>
              <Image style={styles.icon} source={require('../assets/crianca.png')} />
              <Text>Faixa Etária {faixa} anos</Text>
            </View>
            <Text style={styles.descricao}>
              {descricao}
            </Text>
            
          </>
        )}
        <TouchableOpacity onPress={handleVerMais} style={styles.button}>
          <Text style={styles.buttonText}>{ver ? 'Mostrar menos' : 'Mostrar mais'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 20,
    backgroundColor: "#FFF",
    padding: 0,
    borderRadius: 10,
    width: '90%',
    flexWrap: 'wrap',
  },
  img: {
    width: '35%',
    height: '100%',
    marginRight: 7,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    maxWidth: '65%', 
    paddingBottom: 10,
    paddingTop: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 30,
    width: 140,
  },
  buttonText: {
    color: "#FFF",
    textAlign: 'center',
  },
  textos: {
    flexDirection: 'row',
  },
  texto: {
    borderWidth: 2,
    borderColor: 'orange',
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    marginRight: 5,
    paddingHorizontal: 10
  },
  descricao: {
    marginTop: 10,
    textAlign: 'justify',
    paddingHorizontal: 8
  },
});
