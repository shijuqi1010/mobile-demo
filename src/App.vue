<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
html {
  margin: 0;
  padding: 0;
  // -ms-text-size-adjust: 100%;
  // -webkit-text-size-adjust: 100%;
  -webkit-text-size-adjust: none; 
}
body {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
}
* {
  margin: 0;
  padding: 0;
}

a img {
  border: 0;
}

a,
a:link,
a:hover,
a:visited {
  color: inherit;
  text-decoration: none;
  display: block;
}

p{
  margin-block-end: 0;
  margin-block-start: 0;
}

ul{
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
 input{
  border: none;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
}
</style>