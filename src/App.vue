<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2A1E14;
}

body{
  margin: 0px;
  
}

main{
      display: flex;
      justify-content: center;
      min-height: 100vh;
      background-image: url('./assets/backgroundMobile.png');
      background-size: cover;
      
}

.pageClassic {
        position: relative;
        width: 87%;
        background: #E8E8E8;
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 25px;
        padding-top: 5px;
}

/* boutons */

.lien {
      
      display: inline-block;
      background-color: #2A1E14;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 0px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 25px;
      color: white;
      text-decoration: none;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
}

.lien a{
      color: white;
      text-decoration: none;
}

.voirPlus{
      margin-top: 20px;
      margin-bottom: 70px;
      width: max-content;
}
/*bandeau retour et profil*/

.navigationArea{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.profil img{
      width: 42px;
      height: 42px;
      
}

.retour img{
      height: 24px;
      width: 24px;
}

.iconeBasPage{
      position: absolute;
      left: calc(50% - 25px);
      bottom: 5px;
}

@media screen and (min-width: 1200px){
      main{
            background-image: url('./assets/backgroundDesktop.png');
      }
      
      .pageClassic{
           width: 1196px;
            
      }

      /*bandeau retour et profil*/
      
      .profil{
            position: absolute;
            top: 20px;
            right: 20px;
      
      }
      .profil img{
            width: 86px;
            height: 86px;
      }
      
      .retour{
            display: none;
      }
      
}
</style>
