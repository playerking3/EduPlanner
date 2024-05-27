import {useState} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'; // Para visualização em lista
import ptLocale from '@fullcalendar/core/locales/pt';
import './Calendario.module.css'
export default function Calendario() {
    const [currentView, setCurrentView] = useState('dayGridMonth');
    const [events, setEvents] = useState([]);

    function handleEventClick(info) {

        let titulo = info.event.title
        let html = ""

        if (info.event.end) {
            html += `<p><strong>Início:</strong> ${info.event.start?.toLocaleString()}</p>`
            html += `<p><strong>Fim:</strong> ${info.event.end?.toLocaleString()}</p>`


            if (info.event.extendedProps.descricao) {
                html += `<p><strong>Descrição:</strong> ${info.event.extendedProps.descricao}</p>`
            }

            // Tags
            if (info.event.extendedProps.tags) {
                html += `<p><strong>Tags:</strong> ${info.event.extendedProps.tags.map(tag => tag.nome).join(", ")}</p>`
            }
        } else {
            html += `<p>Feriado.</p>`
            html += `<p><strong>Data:</strong> ${info.event.start?.toLocaleString()}</p>`
        }
    }

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                initialView={currentView}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={events}
                locale={ptLocale}
                eventClick={handleEventClick}
            />
        </div>
    )
}