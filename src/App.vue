<template>
  <div id="app">
    <header>
      <h1>vue-number-smarty</h1>
      <a id="githubLink" href="https://github.com/Seokky/vue-number-smarty" target="_blank">github</a>
    </header>

    <section class="demo-case">
      <div class="demo-case__half">
        <pre>
          <b>&lt;vue-number-input</b>
            <b>v-model</b>="test0"
            <b>placeholder</b>="Write some text"
            <b>numberType</b>="integer"
            <b>unsigned</b>
            <b>textColor</b>="darkblue"
            <b>color</b>="darkblue"
            <b>fontWeight</b>="bold"
            <b>align</b>="left"
            <b>:maxLen</b>="4"
          <b>/&gt;</b>
        </pre>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test0"
          placeholder="Write some text"
          numberType="integer"
          unsigned
          align="left"
          textColor="darkblue"
          color="darkblue"
          fontWeight="bold"
          :maxLen="4"
        />
      </div>
    </section>

    <section class="demo-case">
      <div class="demo-case__half">
        <pre>
          <b>&lt;vue-number-input</b>
            <b>v-model</b>="test1"
            <b>placeholder</b>="Write some text"
            <b>numberType</b>="integer"
            <b>signed</b>
            <b>align</b>="right"
            <b>:step</b>="5"
            <b>:minValue</b>="-50"
            <b>:maxValue</b>="50"
          <b>/&gt;</b>
        </pre>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test1"
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
        <pre>
          <b>&lt;vue-number-input</b>
            <b>v-model</b>="test2"
            <b>placeholder</b>="Write some text"
            <b>numberType</b>="integer"
            <b>unsigned</b>
            <b>error</b>
          <b>/&gt;</b>
        </pre>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test2"
          placeholder="Write some text"
          numberType="integer"
          unsigned
          error
        />
      </div>
    </section>

    <section class="demo-case">
      <div class="demo-case__half">
        <pre>
          <b>&lt;vue-number-input</b>
            <b>v-model</b>="test3"
            <b>placeholder</b>="Write some text"
            <b>numberType</b>="float"
            <b>unsigned</b>
            <b>align</b>="center"
            <b>:step</b>="0.5"
            <b>:intPartMaxLen</b>="2"
            <b>:floatPartMaxLen</b>="3"
          <b>/&gt;</b>
        </pre>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test3"
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
        <pre>
          <b>&lt;vue-number-input</b>
            <b>v-model</b>="test3"
            <b>placeholder</b>="Readonly"
            <b>numberType</b>="float"
            <b>readonly</b>
          <b>/&gt;</b>
        </pre>
      </div>
      <div class="demo-case__half">
        <vue-number-input
          v-model="test4"
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
  #githubLink {
    display: inline-block;
    margin-top: 5px;
    text-decoration: none;
    color: black;
    background: white;
    padding: 3px 15px;
    border-radius: 2px;
    color: rgba(0,0,0,.8);
    box-shadow: 0px 2px 2px rgba(0,0,0,.2);
  }
}
.demo-case {
  display: flex;
  max-width: 700px;
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
      width: 280px;
    }
    pre {
      text-align: left;
      margin-left: -60px;
      font-size: 1.05rem;
      margin: 0;
    }
  }
}
</style>
