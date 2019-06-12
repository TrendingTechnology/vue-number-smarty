<template>
  <div id="app">
    <h1>@seokky/vue-number-input</h1>

    <section>
      <h3>unsigned | integer | step === 2 | maxLen === 2</h3>
      <vue-number-input
        v-model="test0"
        placeholder="Write some text"
        numberType="integer"
        unsigned
        :step="2"
        :maxLen="2"
      />
    </section>

    <section>
      <h3>signed | integer | step === 2 | maxLen === 4</h3>
      <vue-number-input
        v-model="test1"
        placeholder="Write some text"
        numberType="integer"
        :step="2"
        :maxLen="4"
      />
    </section>

    <section>
      <h3>signed | integer | step === 1</h3>
      <vue-number-input
        v-model="test2"
        placeholder="Write some text"
        numberType="integer"
      />
    </section>

    <section>
      <h3>signed | integer | step === 5 | maxValue === 10 | minValue === -10</h3>
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
      <h3>unsigned | integer | step === 5 | maxValue === 20 | minValue === 10</h3>
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
  margin-top: 60px;
}
section {
  display: block;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-bottom: 2px solid rgba(0,0,0,.5);
  h3 {
    margin-top: 0;
  }
}
</style>
