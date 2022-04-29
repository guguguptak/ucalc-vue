import { defineStore } from 'pinia';

export const calcStore = defineStore({
  id: 'calcStore',
  state: () => initialState,
});

export const initialState = {
  result: 0,
  subtotal:null,
  lastOp: null,
  opWasLast: false,
  dotPosition: null,
  fakeZeroes: 0,
  memory: null,
  repeatValue: null,
};