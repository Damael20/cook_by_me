<template>
  <div class="filtre">
      {{nomFiltre}}
  </div>
</template>

<script>
export default {
  name: 'Filtre',
  props: {
    nomFiltre: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.filtre{
  background-color: #2A1E14;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;
  color: white;
  font-size: 11px;
}

@media screen  and (min-width: 1200px) {
     .filtre{
       width: 100px;  
     }
}

</style>
