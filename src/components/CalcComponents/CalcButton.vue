<template>
  <button :id="generateId" @click="func">
    {{ caption }}
  </button>
</template>

<script>
export default {
  name: 'CalcButton',
  props: {
    caption: String,
    func: Function,
  },
  computed: {
    generateId() {
      return ( this.caption === undefined ) ? undefined : 'calc-' + BUTTONS_NAME_MAP[this.caption];
    },
  },
};
const BUTTONS_NAME_MAP = {
  '=': 'total',
  '.': 'dot',
  '±': 'sign',
  'MS': 'memory-store',
  'MC': 'memory-clear',
  'MR': 'memory-recall',
  'M+': 'memory-add',
  'C/CE': 'clear',

};
</script>

<style scoped>
/*#calc-total {*/
/*  grid-column: 4;*/
/*  grid-row: 5 / 7;*/
/*}*/
</style>