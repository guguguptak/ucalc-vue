<template>
  <main class="todo-list">
    <div class="box box-list">
      <header class="list-title">// TODO</header>
      <ol class="list">
        <li class="li">bugs</li>
        <ul>
          <li><kbd>=</kbd> should repeat last operation</li>
          <li>add rounding (to handle IEEE floats)</li>
          <li>next operation after pressing total doesn't allow e.g  adding to the last result
          </li>
        </ul>
        <li class="li">features</li>
        <ul>
          <li>add keyboard handling</li>
          <li>add more calc functions (eg. percentages)</li>
        </ul>
      </ol>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CalcTODOs',
};
</script>

<style scoped>
ul {
  list-style-type: circle;
  padding: 0.3rem 0 0.3rem 0;
}
li{
  padding: 0.3rem 0 0.3rem 0;
}


.li {
  font-weight: bold;
}

.todo-list {
}

.box-list {
  background-color: #def7fa;
}

.list-title {
  font-size: 1.8rem;
  padding: 1.2rem;
  color: deepskyblue;
  font-weight: bold
}

.list {
  margin-left: 2rem;
  font-size: 1.4rem;
}
</style>