import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

const Tab = ({ onPress, abaSelecionada }) => (
  <TouchableOpacity onPress={onPress} style={styles.tab}>
    <Image source={abaSelecionada === 'atividades' ? require('../assets/setacima.png') : require('../assets/setacima.png')} style={styles.tabImage} />
  </TouchableOpacity>
);

const Calendario = ({ navigation, props }) => {
  const [dataSelecionada, setDataSelecionada] = useState('');
  const windowHeight = Dimensions.get('window').height;
  const translateY = useSharedValue(windowHeight - 300);
  const calendarScale = useSharedValue(1);
  const [abaSelecionada, setAbaSelecionada] = useState('calendario');
  const atividades = { '2024-06-20': [{ id: '1', title: 'Reunião com a equipe' }, { id: '2', title: 'Entrega do projeto' }], '2024-06-21': [{ id: '3', title: 'Consulta médica' }] };
  const [eventsCalender, setEventsCalender] = useState([])
  const [eventsCalenderFeriado, setEventsCalenderFeriado] = useState([])

  const aoPressionarDia = (dia) => {
    setDataSelecionada(dia.dateString);
    setAbaSelecionada('atividades');
    translateY.value = withSpring(0, { damping: 20, stiffness: 50 });
    calendarScale.value = withSpring(0.8, { damping: 20, stiffness: 50 });
  };
  const handleMenuPress = () => {
    navigation.openDrawer()
    console.log("Menu pressionado");
  };

  const toggleAba = () => {
    if (abaSelecionada === 'atividades') {
      setAbaSelecionada('calendario');
      translateY.value = withSpring(windowHeight - 300, { damping: 20, stiffness: 50 });
      calendarScale.value = withSpring(1, { damping: 20, stiffness: 50 });
    } else {
      setAbaSelecionada('atividades');
      translateY.value = withSpring(0, { damping: 20, stiffness: 50 });
      calendarScale.value = withSpring(0.8, { damping: 20, stiffness: 50 });
    }
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => { ctx.startY = translateY.value; },
    onActive: (event, ctx) => {
      const nextTranslateY = ctx.startY + event.translationY;
      translateY.value = Math.min(Math.max(nextTranslateY, 0), windowHeight - 300);
      calendarScale.value = withSpring(event.translationY < 0 ? 0.8 : 1, { damping: 20, stiffness: 50 });
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateY: translateY.value }] }));
  const animatedCalendarStyle = useAnimatedStyle(() => ({ transform: [{ scale: calendarScale.value }] }));

  useEffect(() => {
    async function feriadoEvents(){
      await fetch(props.api + '/getFeriados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
          .then((resp) => resp.json())
          .then(function (data) {
            let acert = data;
            listarEventos(acert.feriados, eventsCalenderFeriado, setEventsCalenderFeriado)
            console.log(acert.feriados, 'feriados')
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    if (props.listaEventos.length > 0) {
      feriadoEvents()
    }
  }, [props.listaEventos]);

  function listarEventos(lista, itens, setItens) {
    let aux = []

    lista.map(item => (aux.push({
      title: item[1],
      date: item[2],
      color: item[0]=== 'feriado' ? 'black' : item[0]==='emenda' ? 'gray':'purple'
    })));

    setItens(aux);

    console.log(aux, 'listagem log')
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: '#FFD700' }} onPress={handleMenuPress}>
          <Image style={{ marginVertical: 20, marginLeft: 20, marginTop: 50 }} source={require('../assets/hamburguer.png')} />
        </TouchableOpacity>

        <View style={styles.container2}>
          <Calendar
              onDayPress={aoPressionarDia}
              markedDates={{
                [dataSelecionada]: { selected: true, marked: true, selectedColor: 'orange' },
              }}
              style={styles.calendar}
          />

          <FlatList
              data={eventsCalender.concat(eventsCalenderFeriado)}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                  <View>
                    <Text style={styles.activityItem}>{item.title}</Text>
                  </View>
              )}
              ListEmptyComponent={<Text style={styles.noActivities}>Nenhuma atividade</Text>}
          />
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  container: { flex: 1},
  container2: { flex: 1, backgroundColor: '#FFD700', alignItems:'center'},
  calendarContainer: { width: Dimensions.get('window').width * 0.9, aspectRatio: 1, borderRadius: 10, overflow: 'hidden', marginTop: 20 },
  calendar: { borderRadius: 10 },
  bottomSheet: { flex: 1, width: "90%", backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 20, overflow: 'hidden' },
  tab: { backgroundColor: '#fff', paddingVertical: 10, alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  tabImage: { width: 30, height: 30, resizeMode: 'contain' },
  activityItem: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#FFD700', color: '#fff', borderRadius: 5, marginVertical: 5, textAlign: 'center' },
  noActivities: { textAlign: 'center', marginTop: 20, color: '#999' },
});

export default Calendario;
