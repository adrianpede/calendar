import { createSlice } from '@reduxjs/toolkit';

import { addHours } from 'date-fns/esm';

const tempEvent =  {
    title:'cumple del jefe',
    notes:'hay que comprar el pastel',
    start:new Date(),
    end:addHours(new Date(), 2),
    bgColor:'#fafafa',
    user:{
      _id:'123',
      name:'Adrián'
    }
  };

export const calendarSlice = createSlice({ 

name: 'calendar', 
 initialState: { 
  events: [
    tempEvent
  ],
  activeEvent:null
 }, 
 reducers: { 
  increment: (state, /* action */ ) => { 
  state.counter += 1;
   }, 
 } 
});


// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;