<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue"/>
    <ThemeColor >style-components</ThemeColor>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {ThemeColor} from '@/style-components'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ThemeColor
  }
}
</script>
