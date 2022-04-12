<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
}

#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
