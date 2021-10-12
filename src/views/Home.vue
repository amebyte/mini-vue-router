<template>
  <div class="home">
    Home page
    <p v-for="(item, key) in data" :key="key">{{item}}</p>
  </div>
</template>

<script>
const data = [1,2,3]
export default {
  name: 'Home',
  computed: {
      data() {
          return data
      }
  }
}
</script>
