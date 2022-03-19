<template>
  <button :id="generateId" @click="func">
    {{ caption }}
  </button>
</template>

<script>
export default {
  name: 'OperationButton',
  props: {
    caption: String,
    func: Function,
  },
  computed: {
    generateId() {
      return ( this.caption === undefined ) ? undefined : 'calc-operation-' + OP_NAME_MAP[this.caption];
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

</style>