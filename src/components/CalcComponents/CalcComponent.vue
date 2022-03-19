<template>
  <main class="main">
    <div class="calc-grid">
      <CalcScreen />
      <OperationButton v-for="operation in calcOperations" :key="operation" :operation="operation" />
      <CalcButton caption="=" style="grid-column: 4; grid-row: 5 / 7;" :func="$log('dupa')" />
      <NumericButton v-for="buttonNr in buttonOrder" :key="buttonNr" :number="buttonNr" />
      <CalcButton caption="." style="grid-column: 1; grid-row: 7 " :func="$log('dupa')" />
      <CalcButton caption="±" :func="$log('dupa')" />
      <CalcButton caption="C/CE" :func="$log('dupa')" />
      <CalcButton caption="MS" style="grid-column: 3; grid-row:2" :func="$log('dupa')" />
      <CalcButton caption="MC" style="grid-column: 1; grid-row: 2;" :func="$log('dupa')" />
      <CalcButton caption="MR" style="grid-column: 2; grid-row: 2" :func="$log('dupa')" />
      <CalcButton caption="M+" style="grid-column: 4; grid-row: 2" :func="$log('dupa')" />
    </div>
  </main>
</template>

<script>
import CalcScreen from './CalcScreen.vue';
import CalcButton from './CalcButton.vue';
import OperationButton from './OperationButton.vue';
import NumericButton from './NumericButton.vue';

export default {
  name: 'CalcComponent',
  components: { CalcScreen, NumericButton, OperationButton, CalcButton },
  data: () => ({
    buttonOrder: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
    calcOperations:['/', '*', '-', '+'],
  }),
}
;
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