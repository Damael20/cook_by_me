<template>
    <div class="recipeStep">
        <div class="bar"></div>
        <p>{{stepcontent}}</p>
    </div>
</template>

<script>

export default {
  name: 'RecipeStep',
  props: {
    stepcontent: String
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recipeStep{
    display: flex;
    text-align: left;
    align-items: center;
    position: relative;
    margin-bottom: 30px;  
  }

  .recipeStep p{
    margin: 0px;
    margin-left: 20px;
  }

  .bar{
    top: 0px;
    width: 5px;
    height: 35px;
    background: #2A1E14;
    position: absolute;
  }
  .bar::before{
    content:"";
    position: absolute;
    top: 0%;
    left: calc(-50% - 1px);
    width: 12px;
    height: 12px;
    background: #2A1E14;
    border-radius: 100%;
  }

  @media screen and (min-width: 1200px) {
    .bar{
      width: 5px;
    }

  }

</style>