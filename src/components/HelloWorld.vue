<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    
    <ul>
      <li><a href="/elementUI" target="_blank" rel="noopener">ElementUI Sortable Table</a></li>
      <li><a href="/bootstrapVue" target="_blank" rel="noopener">Bootstrap Vue Sortable Table</a></li>
      <li><a href="/vuetify" target="_blank" rel="noopener">Vuetify Sortable Table</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
