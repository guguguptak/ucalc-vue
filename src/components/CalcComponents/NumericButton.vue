<template>
  <button :id="generateId" @click="$log(number)">
    {{ number }}
  </button>
</template>

<script>
export default {
  name: 'NumericButton',

  props: {
    number: Number,
  },
  computed: {
    generateId() {
      return ( this.number === undefined ) ? undefined : 'calc-key-' + this.number;
    },
  },
};

</script>

<style scoped>
#calc-key-0{
  grid-column:2;
  grid-row: 7;
}
</style>