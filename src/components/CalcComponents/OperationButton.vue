<template>
  <button :id="generateId" @click="calcOperationPressed">
    {{ operation }}
  </button>
</template>

<script>
import { CalcController } from '../../controller/controller';

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
  methods:{
    calcOperationPressed(){
      return CalcController.calcOperationPressed(this.operation)
    }
  }
};
const OP_NAME_MAP = {
  '+': 'plus',
  '-': 'minus',
  '*': 'times',
  '/': 'divide',
};

</script>

<style scoped>
#calc-operation-plus{
  grid-column: 4;
  grid-row: 3 / 5;
}
</style>