<template>
  <main >
    <div class="pageClassic">
      <div class="navigationArea">
        <router-link class="retour" to="/homepage"><img src="../assets/akar-icons_arrow-back-thick-fill.svg"></router-link>
        <router-link class="profil" to="/"><img src="../assets/unsplash_rDEOVtE7vOs.svg"></router-link>
      </div>
      <h1>{{reciepes.Name}}</h1>
      <div class="pageRecipe">
            <div class="PhotoAndInformations">
                <img :src="image" class="ImageBorder">
                <div class="FirstInformations">
                  <div class="mainInformation"><img src="./../assets/jam_chronometer.svg"><h3>{{reciepes.Duration / 60}} min</h3></div>
                  <div class="mainInformation"><img src="./../assets/tabler_meat.svg"><h3>{{firstIngredients}}</h3></div>
                  <div class="mainInformation"><img src="./../assets/difficulte.svg"><h3>Moyen</h3></div>
                </div>
                
            </div>
            <div class="notation">
              <div v-for="note in  Math.floor(reciepes.Rating)" :key="note">
                  <NoteVue />
              </div>
              
              <p>{{reciepes.Rating}}</p>
            </div>
            <h2>Ingredients</h2>
            <div v-for="ingredient in  reciepes.Ingredients" :key="ingredient">
                <div class="Ingredient">
                  <img src="./../assets/tabler_meat.svg">
                  <h3>{{ingredient.name}}</h3>
                  <p>{{ingredient.quantity}}</p>
                </div>
            </div>
            <h2>Recette</h2>
            <div class="recipeInstructions">
              <div class="RecipeStepsArea">
                
                <div v-for="star in  reciepes.Steps" :key="star">
                <RecipeStep :stepcontent="star"/>
                </div>
              </div>
              
              <div :style="'background: url('+image+');background-size: cover;'" :src="image" class="ImageInsructions videoInstructionsArea"></div>
            </div>
            
      </div>
      <h3>Notez la recette</h3>
      <div class="note notation">
          <NoteVue/>
          <NoteVue/>
          <NoteVue/>
          <NoteVue/>
          <NoteVue/>
      </div>
      <a class="lien voirPlus">Obtenir la recette</a>
      <div class="iconeBasPage">
            <img src="./../assets/logo.svg">
      </div>
    </div>
  </main>
</template>

<script>
import api from '@/plugins/axios'
import NoteVue from './../components/NoteVue'
import RecipeStep from './../components/StepVue.vue'

export default {
  name: 'RecipePage',
  props: {
    msg: String
  },
  components: {
    NoteVue,
    RecipeStep
  },
  computed:{
    currentItem (){
      return this.$route.params.id;
    }
  },
  data() {
        return {
            reciepes: []
        }
    },
    mounted () {
        api.get('reciepes/'+this.$route.params.id+"?populate=*").then((response) => {
            this.reciepes = response.data.data.attributes;
            this.image = this.reciepes.Image.data.attributes.formats.medium.url;
            this.firstIngredients = this.reciepes.Ingredients[0].name;
            console.log(this.image);
            console.log(this.reciepes);
        });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .pageRecipe{
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    .pageRecipe h2{
      
      margin-top: 20px;
      margin-bottom: 16px;
      text-align: left;
    }

    .pageRecipe img{
      width: 45%;
    }

    h3{
      margin: 0px;
      margin-top: 10px;
    }

    .recipeInstructions{
      display: flex;
      justify-content: space-between;

    }

    .PhotoAndInformations{
      display: flex;
      border-radius: 26px;
    }

    .PhotoAndInformations h3{
      margin: 0px;
      margin-top: 10px;
      margin-left: 10px;
    }   

    .ImageInsructions{
      border-radius: 25px;
      width: 200px !important;
      height: 200px;
      background-size: cover;
      background-position: 50% 50%;
    }

    .notation {
      align-items: center;
      display: flex;
      text-align: left;
      padding-top: 7px ;
    }

    .mainInformation{
      display: flex;
      justify-content: space-around;
      align-content: center;
    }

    .mainInformation img{
      margin-left: 20px;
      width: 24px;
      height: 24px;
    }
    .mainInformation h3{
      width: 80px;
      margin: 0px !important;
      padding: 5px;
      text-align: right;
    }

    .notation p{
      margin: 0px;
      margin-left: 24px;
      font-weight: bold;
    }
    
    .note{
      text-align: center;
      justify-content: center;
    }

    .note img{
      width: 25px;
    }

    .ImageBorder{
      border-radius: 20px;
    }

    .Ingredient{
      display: flex;
      align-items: center;
      width: 100%;
    }

    .Ingredient p{
        margin: 0px;
        margin-left: auto;
    }

    .Ingredient{
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      align-content: center;
    }

    .Ingredient img{
      width: 25px;
    }
    .Ingredient h3{
      margin: 0px;
      margin-left: 10px;
      line-height: auto;
    }

    .videoInstructionsArea{
      display: none;
    }

    @media screen and (min-width: 1200px){
      .pageClassic{
        width: 1196px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .RecipeStepsArea{
        max-width: 60%;
      }

      .pageRecipe{
        width: 776px;
      }

      .PhotoAndInformations>img{
        width: 485px;
        height: 293px;
      }

      .Ingredient{
        width: 300px;
      }

      .videoInstructionsArea{
        display: initial;
      }
    

    }





</style>
