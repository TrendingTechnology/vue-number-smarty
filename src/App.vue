<template>
  <div id="app">
    <header>
      <h1>@seokky/vue-number-input</h1>
    </header>

    <section>
      <span class="input-label">unsigned, integer, step === 2,</span>
      <span class="input-label">maxLen === 2, align === 'center'</span>
      <vue-number-input
        v-model="test0"
        placeholder="Write some text"
        numberType="integer"
        unsigned
        align="center"
        :step="2"
        :maxLen="2"
      />
    </section>

    <section>
      <span class="input-label">signed, integer, step === 2,</span>
      <span class="input-label">maxLen === 4, align === 'right'</span>
      <vue-number-input
        v-model="test1"
        placeholder="Write some text"
        numberType="integer"
        align="right"
        :step="2"
        :maxLen="4"
      />
    </section>

    <section>
      <span class="input-label">signed, integer, step === 1</span>
      <vue-number-input
        v-model="test2"
        placeholder="Write some text"
        numberType="integer"
      />
    </section>

    <section>
      <span class="input-label">signed, integer, step === 5,</span>
      <span class="input-label">maxValue === 10, minValue === -10</span>
      <vue-number-input
        v-model="test3"
        placeholder="Write some text"
        numberType="integer"
        :maxValue="10"
        :minValue="-10"
        :step="5"
      />
    </section>

    <section>
      <span class="input-label">unsigned, integer, step === 5,</span>
      <span class="input-label">maxValue === 20, minValue === 10</span>
      <vue-number-input
        v-model="test4"
        placeholder="Write some text"
        numberType="integer"
        unsigned
        :maxValue="20"
        :minValue="10"
        :step="5"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      test0: '0',
      test1: '1',
      test2: '2',
      test3: '3',
      test4: '14',
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
header {
  background: rgba(coral, .9);
  margin-bottom: 40px;
  padding: 30px 10px;
  h1 {
    margin: 0;
    color: white;
  }
}
section {
  display: block;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 10px;
  background: rgba(coral, .5);
  .input-label {
    margin-top: 0;
    display: block;
    font-weight: bold;
    padding: 5px 0;
    &:last-of-type {
      margin-bottom: 10px;
    }
  }
}
</style>
