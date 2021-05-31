<template>
  <div id="app">
    <ThemeProvider  :theme="themeGlobal">
      <router-view/>
    </ThemeProvider>
  </div>
</template>

<script>
import {ThemeProvider} from 'vue-styled-components';

export default ({
  name:'app',
  components: {
    ThemeProvider
  },
  data(){
    return{
      themeGlobal:{
        primary:"#005765"
      }
    }
  }
})
</script>
