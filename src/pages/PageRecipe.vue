<template>
  <main >
    <div class="navigationArea"></div>
    <div class="pageClassic">
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
                  <NoteLevel/>
              </div>
              
              <p>{{reciepes.Rating}}</p>
            </div>
            <h2>Ingredients de la recette</h2>
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
          <NoteLevel/>
          <NoteLevel/>
          <NoteLevel/>
          <NoteLevel/>
          <NoteLevel/>
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
import NoteLevel from './../components/NoteVue'
import RecipeStep from './../components/StepVue.vue'

export default {
  name: 'RecipePage',
  props: {
    msg: String
  },
  components: {
    NoteLevel,
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

    h2{
      margin-top: 20px;
      margin-bottom: 16px;
    }

    h3{
      margin: 0px;
      margin-top: 10px;
    }

    .videoInstructionsArea{
      display: none;

    }

    .recipeInstructions{
      display: flex;
      justify-content: space-between;

    }

    
    .ImageInsructions{
      border-radius: 25px;
      width: 200px;
      height: 200px;
    }

    .pageRecipe{
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    .pageRecipe h2{
      text-align: left;
    }
    .pageRecipe img{
      width: 45%;
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
    
    .notation p{
      margin: 0px;
      margin-left: 24px;
      font-weight: bold
      ;
    }
    
    .note{
      text-align: center;
      justify-content: center;
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

    .note img{
      width: 25px;
    }

    .ImageBorder{
      border-radius: 20px;
    }

    .Ingredient{
      display: flex;
      align-items: center;
      width: 200px;
    }

    .Ingredient p{
        margin: 0px;
        margin-left: auto;
    }
    
    .PhotoAndInformations{
      display: flex;
    }

    .PhotoAndInformations h3{
      margin: 0px;
      margin-top: 10px;
      margin-left: 10px;
    }

    .PhotoAndInformations{
      border-radius: 26px;
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
