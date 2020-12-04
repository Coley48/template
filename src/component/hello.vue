<template>
  <div>
    <p class="test">Hello, {{ greeting }}.</p>
  </div>
</template>

<script>
// require("../css/style.less");

export default {
  data: function () {
    return {
      greeting: "my-component",
    };
  },
};
</script>



<style>
.example {
  display: flex;
  text-align: center;
  user-select: none;
  background: lightblue;
  height: 400px;
}

.test {
  font-size: 1.2rem;
  text-align: center;
  color: lightcoral;
}
</style>
