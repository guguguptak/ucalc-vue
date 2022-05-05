<template>
  <div id="screen" style="grid-column: 1 / 5;">
    <div id="subtotal">
      &nbsp; {{ subtotal }} {{ lastOp }}
    </div>
    <div id="input-line">
      <div id="memory">
        {{ memory ? 'M' : '' }}
      </div>
      <input id="result" maxlength="13" type="text" readonly :value='result ? result : 0' />

    </div>
  </div>
</template>

<script>
import { calcStore } from '../../stores/calcStore.ts';
import {
  mapState,
  mapWritableState,
} from 'pinia';

export default {
  name: 'CalcScreen',
  computed: {
    ...mapState( calcStore, ['subtotal', 'lastOp', 'result', 'memory'] ),
    // ...mapWritableState( calcStore, ['subtotal', 'lastOp', 'result', 'memory'] ),
  },
};
</script>

<style scoped>
input {
  padding: 0.25rem 0.5rem;
  font-size: 125%;
  max-width: 12rem;
}

#subtotal {
  text-align: right;
  padding-right: 0.5rem;
  font-size: 80%;
  background: linear-gradient(to bottom, #cbebff 0%, #FFFFFF 100%);
}

#input-line {
  display: flex;
}

#memory {
  font-size: 60%;
  display: inline;
  background: #fff;
  padding: 0.25rem;
  min-width: 1.5rem;
}

#screen {
  border: 1px solid #888;
  grid-column: 1 / 5;
}

#result {
  text-align: right;
  border: none;
  padding-top: 0;
}
</style>