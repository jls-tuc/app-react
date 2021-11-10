
import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { mensajes } from './CalendarioEsp'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import 'moment/locale/es'
import { CalendarioEvento } from './CalendarioEvento'
import { KTSVG } from '../../../../../_metronic/helpers'
import { Dropdown1 } from '../../../../../_metronic/partials'
import './Agenda.scss'


moment.locale('es');

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'Tesssto de Prueba',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    notes: 'Probar el esssto',
    user: {
      _id: '123',
      name: 'Alejandro Cordoba'
    }
  }
]

const Views = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda',
};



const Calendario: React.FC = () => {

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || Views.WEEK);

  const onDoubleClick = (e: any) => {

  }

  const onSelectEvent = (e: any) => {

  }

  const onViewChange = (e: any) => {
    setlastView(e);
    localStorage.setItem('lastView', e);
  }


  const eventStyleGetter = (
    event: Object,
    start: any,
    end: any,
    isSelected: boolean
  ) => {
    console.log(`Estados: `, event, start, end, isSelected)
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  }
  return (
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder mb-2 text-dark'>Calendario de Actividades</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}

          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="row">

        <div className='col-2 card-body'>
          <button
            type='button'
            className='btn btn-sm btn-color-Todos btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Todos
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Ministerio btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Ministerio de Ciudadanía
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Coordinacion btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Coordinación General del Ministerio
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-DDHH btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Derechos Humanos
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Mujeres btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Mujeres
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Discapacidad btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Discapacidad
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Defensa btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Defensa Civil y Protección Ciudadana
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Consumidor btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Protección al Consumidor
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Acceso btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Acceso a la Justicia
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Ciudades btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Ciudades Saludables y Prev. de los Consumos Problemáticos
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-148 btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Linea 148
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-NqnLab btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Nqn LAB
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-Diversidad btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Diversidad
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-OPRI btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Of. Prov. de Rel. Institucionales (O.P.R.I.)
          </button>
          <button
            type='button'
            className='btn btn-sm btn-color-DAV btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            Dispositivo de Atención a Varones
          </button>
        </div>
        <div className='col-10 card-body pt-8'>
          {/* begin::Timeline */}
          <div className="calendario-screen">

            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              messages={mensajes}
              eventPropGetter={eventStyleGetter}
              onDoubleClickEvent={onDoubleClick}
              onSelectEvent={onSelectEvent}
              onView={onViewChange}
              views={['month', 'week', 'day', 'agenda']}
              components={{
                event: CalendarioEvento
              }}

            />
          </div>
          {/* end::Timeline */}
        </div>
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export { Calendario }
