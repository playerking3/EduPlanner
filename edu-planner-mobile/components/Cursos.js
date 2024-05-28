import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import CardCurso from "./CardCurso";

export default function Home({ navigation }) {
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
        <CardCurso 
          img={require("../assets/img1.png")}
          titulo="Oficina de bolos"
          hora="10"
          descricao=""
          curso='Culinária'
          faixa='12 a 15'
          descricao='Na Oficina de Bolos para Crianças, os participantes mergulham em uma experiência cheia de cores, sabores e muita diversão. Sob a orientação cuidadosa de nossos instrutores especializados, cada criança aprende os fundamentos da confeitaria enquanto deixa sua criatividade fluir livremente.
Durante o curso, as crianças aprendem desde os conceitos básicos da preparação de massa até as técnicas de decoração mais elaboradas. Elas têm a oportunidade de misturar, mexer e decorar, criando verdadeiras obras-primas açucaradas com suas próprias mãos.'
        />

        <CardCurso 
          img={require("../assets/img2.png")}
          titulo="Dramaturgia"
          hora="10"
          descricao=""
          curso='Teatro'
           faixa='10 a 12'
          descricao='Na Dramaturgia, os participantes são levados em uma jornada fascinante que os leva desde os conceitos básicos da construção de personagens até as técnicas avançadas de escrita de roteiros. Sob a orientação cuidadosa de nossos instrutores experientes, cada aluno é incentivado a explorar sua própria voz e visão artística, criando peças únicas e cativantes.

Durante o curso, os alunos são desafiados a pensar profundamente sobre o mundo ao seu redor, a explorar questões importantes e a expressar suas ideias de maneira poderosa e impactante. Eles aprendem a arte de criar diálogos autênticos, a desenvolver tramas envolventes e a dar vida a personagens memoráveis que ressoam com o público.'
        />

        <CardCurso 
          img={require("../assets/img3.png")}
          titulo="Iniciação ao Inglês"
          hora="40"
          curso='Teatro'
           faixa='8 a 14'
          descricao="Um curso de inglês para iniciantes pode ser uma grande oportunidade de desbloquear conhecimento e iniciar novas habilidades. Falar outra língua pode parecer distante para quem nunca estudou, mas tudo começa com o primeiro passo. A Cultura Inglesa encara esse momento inicial como algo incrível. Por isso, os cursos para iniciantes ajudam pessoas a começarem uma jornada de aprendizado de maneira didática e interessante. É o começo da conquista de um objetivo. Se tem dúvidas sobre aulas de inglês para iniciantes e como funcionam, este conteúdo vai ajudar você."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDD26",
  },
  header: {
    backgroundColor: "#FFDD26",
    height: 100,
    justifyContent: 'center',
  },
  hamburguer: {
    marginTop: 45,
    marginLeft: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
});
