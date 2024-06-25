import {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import ptLocale from '@fullcalendar/core/locales/pt';
import css from './Calendario.module.css'

export default function Calendario(props) {
    const [currentEvents, setCurrentEvents] = useState([]);
    const [title2, setTitle] = useState('')
    const [selectItem, setSelectItem] = useState('')
    const [eventsCalender, setEventsCalender] = useState([])
    const [eventsCalenderFeriado, setEventsCalenderFeriado] = useState([])


    useEffect(() => {
        async function calendarEvents(){
            let ids = props.listaEventos.map(evento => evento[0]);

            const data = {
                lista_turmas: ids
            };

            await fetch(props.api + '/getAulas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((resp) => resp.json())
                .then(function (data) {
                    let acert = data;
                    console.log(acert, 'aaaaa')
                    listarEventos(acert.aulas, eventsCalender, setEventsCalender)
                })
                .catch(function (error) {
                    console.log(error);
                });

            console.log("IDS", props.listaEventos)
        }

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
            calendarEvents()

        }
        feriadoEvents()
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
        <div className={css.todoCalendario}>
            <FullCalendar
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    listPlugin,
                ]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                locale={ptLocale}

                events={[...eventsCalender, ...eventsCalenderFeriado]}
            />
        </div>
    )
}