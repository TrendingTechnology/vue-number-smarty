<template lang="pug">
  div#app
    header
      h1 Vue-number-smarty
      a#githubLink(
        href="https://github.com/Seokky/vue-number-smarty"
        target="_blank"
      ) github

    section.demo-case
      div.demo-case__half
        pre.
          &lt;vue-number-input
            v-model="test0"
            placeholder="Write some text"
            numberType="integer"
            unsigned
            textColor="darkblue"
            color="darkblue"
            fontWeight="bold"
            align="left"
            :maxLen="4"
          /&gt;
      div.demo-case__half
        vue-number-input(
          v-model="test0"
          placeholder="Write some text"
          numberType="integer"
          unsigned
          align="left"
          textColor="darkblue"
          color="darkblue"
          fontWeight="bold"
          :maxLen="4"
        )

    section.demo-case
      div.demo-case__half
        pre.
          &lt;vue-number-input
            v-model="test1"
            placeholder="Write some text"
            numberType="integer"
            signed
            align="right"
            :step="5"
            :minValue="-50"
            :maxValue="50"
          /&gt;
      div.demo-case__half
        vue-number-input(
          v-model="test1"
          placeholder="Write some text"
          numberType="integer"
          signed
          align="right"
          :step="5"
          :minValue="-50"
          :maxValue="50"
        )

    section.demo-case
      div.demo-case__half
        pre.
          &lt;vue-number-input
            v-model="test2"
            placeholder="Write some text"
            numberType="integer"
            unsigned
            error
          /&gt;
      div.demo-case__half
        vue-number-input(
          v-model="test2"
          placeholder="Write some text"
          numberType="integer"
          unsigned
          error
        )

    section.demo-case
      div.demo-case__half
        pre.
          &lt;vue-number-input
            v-model="test3"
            placeholder="Write some text"
            numberType="float"
            unsigned
            align="center"
            :step="0.5"
            :intPartMaxLen="2"
            :floatPartMaxLen="3"
          /&gt;
      div.demo-case__half
        vue-number-input(
          v-model="test3"
          placeholder="Write some text"
          numberType="float"
          unsigned
          align="center"
          :step="0.5"
          :intPartMaxLen="2"
          :floatPartMaxLen="3"
        )

    section.demo-case
      div.demo-case__half
        pre.
          &lt;vue-number-input
            v-model="test4"
            placeholder="Readonly"
            numberType="float"
            readonly
          /&gt;
      div.demo-case__half
        vue-number-input(
          v-model="test4"
          placeholder="Readonly"
          numberType="float"
          readonly
        )
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
    text-shadow: 0px 2px 2px rgba(0,0,0,.2);
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
      max-width: 315px;
      display: flex;
    }
    pre {
      text-align: left;
      font-size: 1.05rem;
      margin: 0;
      width: 250px;
    }
  }
}
</style>
