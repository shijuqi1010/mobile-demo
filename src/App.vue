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

<style>
#app {
  font-family: 'SourceHanSansCN-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
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


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
}
</style>