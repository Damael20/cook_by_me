<template>
  <div class="RecipeDisposition">
    <div class="RecipeArea">
        <Recipe
            v-for="reciepe in reciepes" 
            :key="reciepe.id" 
            :reciepe="reciepe"
        />
        {{RecipeAreaVue}}
    </div>
  </div>
  
</template>

<script>
import api from '../../plugins/axios'
import Recipe from './../components/RecipeVue.vue' 

export default {
  name: 'RecipeAreaVue',
  props: {
    RecipeAreaVue: String, 
  },
  components: {
    Recipe
  },
  data() {
        return {
            reciepes: []
        }
    },
    mounted () {
        api.get('reciepes?populate=*').then((response) => {
            this.reciepes = response.data.data
            console.log(this.reciepes)
        });
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.RecipeDisposition{
  display: flex;
  justify-content: center;
  padding-top: 15px;
}

.RecipeArea{
  display: grid;
  grid-template-columns: 116px 116px;
  grid-template: repeat(auto-flow, 116px);
  grid-gap: 20px;
}

</style>
