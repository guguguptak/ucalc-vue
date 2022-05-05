<template>
  <main class="main">
    <div class="calc-grid">
      <CalcScreen />
      <OperationButton v-for="operation in calcOperations" :key="operation" :operation="operation"  />
      <CalcButton caption="=" style="grid-column: 4; grid-row: 5 / 7;" :func="$log('dupa')" />
      <NumericButton v-for="buttonNr in buttonOrder" :key="buttonNr" :number="buttonNr" />
      <CalcButton caption="." style="grid-column: 1; grid-row: 7 " :func="dotPressed" />
      <CalcButton caption="±" :func="signPressed" />
      <CalcButton caption="C/CE" :func="calcClearPressed"/>
      <CalcButton caption="MS" style="grid-column: 3; grid-row: 2" :func="memoryStorePressed" />
      <CalcButton caption="MC" style="grid-column: 1; grid-row: 2" :func="memoryClearPressed" />
      <CalcButton caption="MR" style="grid-column: 2; grid-row: 2" :func="memoryRecallPressed" />
      <CalcButton caption="M+" style="grid-column: 4; grid-row: 2" :func="memoryAddPressed" />
    </div>
  </main>
</template>

<script>
import CalcScreen from './CalcScreen.vue';
import CalcButton from './CalcButton.vue';
import OperationButton from './OperationButton.vue';
import NumericButton from './NumericButton.vue';
import { CalcController } from '../../controller/controller.ts';
import { mapState } from 'pinia';
import { calcStore } from '../../stores/calcStore.ts';

export default {
  name: 'CalcComponent',
  components: { CalcScreen, NumericButton, OperationButton, CalcButton },
  ...mapState( calcStore, ['subtotal', 'lastOp', 'result', 'memory'] ),
  data: () => ( {
    buttonOrder: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
    calcOperations: ['/', '*', '-', '+'],
  } ),
  methods: {
    // numberPressed(){
    //   return CalcController.numberPressed()
    // },
    signPressed() {
      return CalcController.signPressed();
    },
    memoryStorePressed(){
      return CalcController.memoryStorePressed();
    },
    memoryRecallPressed(){
      return CalcController.memoryRecallPressed();
    },
    memoryAddPressed(){
      return CalcController.memoryAddPressed();
    },
    memoryClearPressed(){
      return CalcController.memoryClearPressed();
    },
    calcClearPressed() {
      return CalcController.calcClearPressed();
    },
    dotPressed() {
      return CalcController.dotPressed();
    },
    // handleNumberPressed(buttonNumber) {
    //   return CalcController.handleNumberPressed(this.number);
    // },
    // calcOperationPressed() {
    //   return CalcController.calcOperationPressed();
    // },
  },


};
</script>

<style scoped>
main {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px;
  font-family: Calibri, sans-serif;
}

.calc-grid {
  background: #eee;
  padding: 0.25rem;
  border: 2px #ddd groove;
  display: inline-grid;
  grid-gap: 0.5rem;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

button {
  padding: 0.2rem 0;
}

button:hover {
  transform: scale(1.1);
}

</style>