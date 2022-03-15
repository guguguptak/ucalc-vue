<template>
  <CalcButton caption="MS" :func="$log('dupa')" />
</template>

<script>
import CalcButton from '../components/CalcComponents/CalcButton.vue';

export default {
  name: 'CalcView.vue',
  components: { CalcButton },
};
</script>

<style scoped>

</style>