import {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'; // Para visualização em lista
import ptLocale from '@fullcalendar/core/locales/pt';
import css from './Calendario.module.css'

export default function Calendario(props) {
    const [currentEvents, setCurrentEvents] = useState([]);
    const [title2, setTitle] = useState('')
    const [selectItem, setSelectItem] = useState('')
    const [eventsCalender, setEventsCalender] = useState([])
    const [listaEventos, setListaEventos] = useState([])

    useEffect(() => {
        async function getApi(props){
            const data = {
                token: JSON.parse(localStorage.getItem('token'))
            };

            await fetch(props.api + '/getTurma', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((resp) => resp.json())
                .then(function (data) {
                    let acert = data;
                    setTurmas([...acert.lista_turma]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, []);

    /*const fullCalendarEvents = eventos.map(evento => ({
        title: evento.descricao,
        start: evento.data,
        backgroundColor: evento.tipo === 'feriado' ? '#ff8080' : '#fffb94',
        borderColor: evento.tipo === 'feriado' ? '#ff8080' : '#fffb94',
        extendedProps: { ...evento, backgroundColor: evento.tipo === 'feriado' ? '#ff8080' : '#fffb94' }
    }));*/

    // function closeModal() {
    //     const selected = selectItem;
    //     const calendarApi = selected.view.calendar;
    //     calendarApi.unselect();
    //     console.log(title2)
    //
    //     calendarApi.addEvent({
    //         id: `${selected.dateStr}-${title2}`,
    //         title: "Python para Web",
    //         start: new Date(2024, 5, 1),
    //         end: new Date(2024, 5, 15),
    //     });
    //
    //     setIsOpen(false);
    // }


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

                events={[{
                    id: "1215",
                    title: "All-day event",
                    date: "2024-06-15",
                }]}
            />
        </div>
    )
}