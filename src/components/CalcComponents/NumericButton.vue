<template>
  <button :id="generatedId" @click="numberPressed">
    {{ number }}
  </button>
</template>

<script>
import { mapWritableState } from 'pinia';
import { calcStore } from '../../stores/calcStore.ts';
import {
  CalcController,
  PRECISION_MAX,
} from '../../controller/controller';

export default {
  name: 'NumericButton',

  props: {
    number: Number,
    func: Function,
  },
  computed: {
    generatedId() {
      return ( this.number === undefined ) ? undefined : 'calc-key-' + this.number;
    },
    ...mapWritableState( calcStore, ['result'] ),
  },
methods:{
    numberPressed(){
      return CalcController.numberPressed(this.number)
    }
},
}
</script>

<style scoped>
#calc-key-0 {
  grid-column: 2;
  grid-row: 7;
}
</style>