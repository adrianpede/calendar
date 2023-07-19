import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {

const dispatch = useDispatch();
const {events, activeEvent} = useSelector(state => state.calendar);

const setActiveEvent = (calendarEvent) => {
  dispatch(onSetActiveEvent(calendarEvent));

}

const startSavingEvent = async (calendarEvent) => {
  // todo: llegar al backend 

  // todo bien 
  if(calendarEvent._id){
    // Actualizando 
  } else {
    // Creando 
    dispatch(onAddNewEvent({...calendarEvent, _id:new Date().getTime()}));
  }
}


  return ({
    // Propiedades
    activeEvent,
    events,

    // Metodos
    setActiveEvent,
    startSavingEvent,
  }
    
  )
}
