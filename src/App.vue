<template>
  <div id="app">
    <header>
      <h1>vue-number-smarty</h1>
      <a href="https://github.com/Seokky/vue-number-smarty">github</a>
    </header>

    <section class="demo-case">
      <div class="demo-case__half">
        <ul class="props-list">
          <li>unsigned</li>
          <li>numberType === integer</li>
          <li>step === 1 (default)</li>
          <li>maxLen === 4</li>
          <li>align === 'left' (default)</li>
        </ul>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test0"
          placeholder="Write some text"
          numberType="integer"
          unsigned
          align="left"
          :maxLen="4"
        />
      </div>
    </section>

    <section class="demo-case">
      <div class="demo-case__half">
        <ul class="props-list">
          <li>unsigned</li>
          <li>numberType === integer</li>
          <li>step === 2</li>
          <li>maxLen === 2</li>
          <li>align === 'center'</li>
        </ul>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test1"
          placeholder="Write some text"
          numberType="integer"
          unsigned
          align="center"
          :step="2"
          :maxLen="2"
        />
      </div>
    </section>

    <section class="demo-case">
      <div class="demo-case__half">
        <ul class="props-list">
          <li>signed</li>
          <li>numberType === integer</li>
          <li>step === 5</li>
          <li>minValue === -50</li>
          <li>maxValue === 50</li>
          <li>align === 'right'</li>
        </ul>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test2"
          placeholder="Write some text"
          numberType="integer"
          signed
          align="right"
          :step="5"
          :minValue="-50"
          :maxValue="50"
        />
      </div>
    </section>

    <section class="demo-case">
      <div class="demo-case__half">
        <ul class="props-list">
          <li>error</li>
          <li>unsigned</li>
          <li>numberType === integer</li>
          <li>step === 1 (default)</li>
          <li>align === 'left' (default)</li>
          <li>maxLen === 6 (default)</li>
        </ul>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test3"
          placeholder="Write some text"
          numberType="integer"
          unsigned
          error
        />
      </div>
    </section>

    <!-- <section class="demo-case">
      <div class="demo-case__half">
        <ul class="props-list">
          <li>unsigned</li>
          <li>numberType === float</li>
          <li>step === 1 (default)</li>
          <li>align === 'center'</li>
          <li>maxLen === 6 (default)</li>
        </ul>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test4"
          placeholder="Write some text"
          numberType="float"
          unsigned
          align="center"
        />
      </div>
    </section> -->

    <section class="demo-case">
      <div class="demo-case__half">
        <ul class="props-list">
          <li>unsigned</li>
          <li>numberType === float</li>
          <li>step === 0.5 (default)</li>
          <li>align === 'center'</li>
          <li>intPartMaxLen === 2</li>
          <li>floatPartMaxLen === 3</li>
        </ul>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test5"
          placeholder="Write some text"
          numberType="float"
          unsigned
          align="center"
          :step="0.5"
          :intPartMaxLen="2"
          :floatPartMaxLen="3"
        />
      </div>
    </section>

    <section class="demo-case">
      <div class="demo-case__half">
        <ul class="props-list">
          <li>readonly</li>
        </ul>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test5"
          placeholder="Readonly"
          numberType="float"
          readonly
        />
      </div>
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
      test4: '4',
      test5: '5',
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
  padding: 20px 10px;
  h1 {
    margin: 0;
    color: white;
  }
}
.demo-case {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0,0,0,.2);
  .demo-case__half {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    &:first-of-type {
      border-right: 2px solid coral;
      background: rgba(0,0,0,.025);
    }
  }
  .props-list {
    padding: 0;
    margin: 0;
    text-align: left;
    li {
      padding: 3px;
      font-weight: bold;
      color: coral;
    }
  }
}
</style>
