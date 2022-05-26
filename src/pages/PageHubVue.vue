<template>
  <main >
    <div class="pageClassic">
      
      <div class="hubContent">
      <div class="navigationArea">
        <router-link class="retour" to="/"><img src="../assets/akar-icons_arrow-back-thick-fill.svg"></router-link>
        <router-link class="profil" to="/"><img src="../assets/unsplash_rDEOVtE7vOs.svg"></router-link>
      </div>
        <h1>On cuisine quoi aujourd'hui ?</h1>
        <div class="researchArea">
            <form>
              <input type="research">
              <input type="submit" class="rechercher" value=" ">
            </form>
        </div>

        <div class="groupFiltre">
          <div class="ligneFiltre">
            <Filtre nomFiltre="Energie"/>
              <Filtre nomFiltre="Tonic"/>
              <Filtre nomFiltre="Vegan"/>
              <Filtre nomFiltre="Cardio"/>
          </div>
          <div class="ligneFiltre">
              <Filtre nomFiltre="Detox"/>
              <Filtre nomFiltre="Poulet"/>
              <Filtre nomFiltre="Recup"/>
          </div>
        
        </div>

        <div class="RecipeDisposition">
          <div class="RecipeArea">
            <Recipe
              v-for="reciepe in reciepes" 
              :key="reciepe.id" 
              :reciepe="reciepe"
            />
            </div>
        </div>      
        <router-link class="lien voirPlus" to="/recipe">Voir plus</router-link>
        
        <div class="iconeBasPage">
          <img src="./../assets/logo.svg">
        </div>
      </div>

        


    
    </div>
  </main>
</template>

<script>

import Filtre from './../components/FiltreVue.vue'
import api from '../plugins/axios';
import Recipe from './../components/RecipeVue.vue' 

export default {
  name: 'HubPage',
  props: {
    msg: String
  },
  components: {
    Filtre,
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
    .pageClassic{
      display: flex;
      justify-content: center; 
    }
    .groupFiltre{
      margin-top: 15px;
    }

    .ligneFiltre{
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      justify-content: center;
    }

    input[type="research"]{
          background: #C4C4C4;
        border: none;
        width: 75%;
        padding: 10px;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
    }
    .rechercher{
      background: #C4C4C4;
      color: white;
      background: url('../assets/bx_search.svg'),#2A1E14;
      background-position: center, top ;
      background-repeat: no-repeat, repeat;
      border: none;
      width: 42px;
      padding: 10px;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }


    .RecipeDisposition{
  display: flex;
  justify-content: center;
  padding-top: 15px;
}

.RecipeArea{
  display: grid;
  grid-template-columns: repeat(2, 116px);
  grid-gap: 20px;
}

@media screen and (min-width: 1200px) {
    .RecipeArea{
      grid-template-columns: repeat(4, 186px);
    }

    .Recipe{
      width: 183px;
      height: 183px;
    }

    .hubContent{
      width: 800px;
    }

    input[type="research"]{
      width: 90%;
    }
}
</style>
