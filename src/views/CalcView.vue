<template>
  <main class="main">
    <div class="calc-grid">
      <CalcScreen />
      <OperationButton caption="+" style="grid-column: 4; grid-row: 3 / 5;" :func="$log('dupa')" />
      <OperationButton caption="-" :func="$log('dupa')" />
      <OperationButton caption="*" :func="$log('dupa')" />
      <OperationButton caption="/" :func="$log('dupa')" />
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
import CalcButton from '../components/CalcComponents/CalcButton.vue';
import OperationButton from '../components/CalcComponents/OperationButton.vue';
import NumericButton from '../components/CalcComponents/NumericButton.vue';
import CalcScreen from '../components/CalcComponents/CalcScreen.vue';

export default {
  name: 'CalcView.vue',
  components: { CalcScreen, NumericButton, OperationButton, CalcButton },
  data: () => ({
    buttonOrder: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
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

*, *:before, *:after {
  box-sizing: inherit;
}

input, button {
  font-size: inherit;
  font-family: inherit;
}

button {
  padding: 0.2rem 0;
}

button:hover {
  transform: scale(1.1);
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

</style>