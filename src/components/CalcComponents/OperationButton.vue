<template>
  <button :id="generateId" @click="func">
    {{ operation }}
  </button>
</template>

<script>
export default {
  name: 'OperationButton',
  props: {
    operation: String,
    func: Function,
  },
  computed: {
    generateId() {
      return ( this.operation === undefined ) ? undefined : 'calc-operation-' + OP_NAME_MAP[this.operation];
    },
  },
};
const OP_NAME_MAP = {
  '+': 'plus',
  '-': 'minus',
  '*': 'times',
  '/': 'divide',
};
// const OP_NAME_MAP = {
//     'plus': '+',
//     'minus': '-',
//     'times': '*',
//     'divide': ' / ',
//   }
;
</script>

<style scoped>
#calc-operation-plus{
  grid-column: 4;
  grid-row: 3 / 5;
}
</style>