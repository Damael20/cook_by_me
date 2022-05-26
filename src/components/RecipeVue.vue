<template>
    
    <div class="Recipe" :style="'background: url('+reciepe.attributes.Image.data.attributes.formats.small.url+'), rgba(0,0,0,0.5);'">
      <router-link class="recipeLink" :to="'/recipe/'+reciepe.id">
        <p>Voir la recette</p>
        <div class="notation">
          <NoteVue active="true"/>
          <NoteVue />
          <NoteVue />
          <NoteVue />
          <NoteVue />
        </div>
       
        <h2>{{reciepe.attributes.Name}}</h2>
        </router-link>
   </div>
   
</template>

<script>
import NoteVue from './NoteVue.vue';

export default {
    name: "Recipe",
    props: {
        reciepe: {
            type: Object
        },
    },
    components: { NoteVue },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Recipe{
  background: url('./../assets/unsplash_1Shk_PkNkNw.png'), rgba(0,0,0,0.5);
  background-size: cover,cover;
  background-blend-mode: darken;
  border-radius: 25px;
  width: 116px;
  height: 116px;
  color: white;
  

}

.notation {
      align-items: center;
      display: flex;
      justify-content: center;
      text-align: left;
      padding-top: 7px ;
}

.Recipe h2{
  font-size: 12px;
}

.Recipe p{
  font-size: 14px;
  font-weight: bold;
}

.Recipe img{
  width: 17px;
  fill: white;
}

.recipeLink{
  color: white;
  text-decoration: none;
}

</style>