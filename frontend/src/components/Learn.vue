<script>
   import axios from 'axios'

export default{
 data() {
    return {
      data: "",
    };
  },
  methods: {
    displayData(){
     axios.get("http://localhost:3330/")
     .then((res) => {this.data = res.data})
     .catch((err) => console.log(err.message))
   }
  }
   }
</script>

<template>
  
  <main>
    <button @click="displayData">Click me</button>
    {{ data }}
  </main>
</template>

<style scoped>

</style>
