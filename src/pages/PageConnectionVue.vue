<template>
  <main class="connectionPage">
    <img src="./../assets/logo.svg">

    <div class="pageClassic">
      <h1>Se mettre aux fournaux</h1>
      <form>
        <div>
          <div class="mail">
            <label for="e-mail">Adresse E-mail</label>
            <input class="InputText" name="e-mail" type="text" placeholder="Adresse e-mail">
          </div>
          <div class="passe">
            <label for="passe">Mot de passe</label>
            <input class="InputText" name="passe" type="text" placeholder="Mot de passe">
          </div>
          <div class="IdentifMemorie">
            <input class="souvenirIdentif" name="souvenir" type="checkbox">
            <label for="souvenir" class="souvenirLabel">Se souvenir de moi</label>
          </div>
        </div>
          
          <router-link class="lien" to="/homepage">Se connecter</router-link>
      </form>
      <div class="separation">
        <hr>
        <p>Ou</p>
        <hr>
      </div>
      <div class="RS">
          <img src="./../assets/fa_facebook-official.svg">
          <img src="./../assets/Google_icon.svg">
          <img src="./../assets/twitter_logo.svg">
      </div>
      <div class="iconeBasPage">
            <img src="./../assets/logo.svg">
      </div>
      
    </div>
  </main>
</template>

<script>
export default {
  name: 'connectionPage',
  props: {
    msg: String
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.connectionPage{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connectionPage>img{
  margin-top: 20px;
  width: 80px;
  background: #E8E8E8;
  padding: 20px;
  border-radius: 100%;
}

.IdentifMemorie{
  text-align: left;
}

h1{
  font-size: 1.5rem;
}

form{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

form input[type="text"]{
  display: block;
  box-sizing: border-box;
  width: 100%;
}

form input[type="checkbox"]{
  -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
  height: 15px;
    width: 15px;
    border: 3px solid #2A1E14;
    border-radius: 3px;
    margin: 0px;
    margin-right: 10px;
}

label{
  text-align: left;
  display: block;
  color: #2A1E14;
  font-weight: bold;
}

.souvenirLabel{
  display: initial;
}

.InputText{
  padding: 20px;
  background: #C4C4C4;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 25px;
}

.separation{
  display: flex;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: space-between;
}

.separation hr{
  width: 30%;
  height: 3px;
  margin: 0px;
  border-radius: 25px;
  background: #2A1E14;
}
.separation p{
  margin: 0px;
  color: #2A1E14;
  font-weight: bold;
}

.lien{
  margin-top: 30px;
  margin-bottom: 15px;
  width: 100%;
}

.RS{
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}
.RS img{
  margin: 5%;
  
}


@media screen and (min-width: 1200px){

      form>div>div{
        width: 50%;
        margin-right: auto;
        margin-left: auto;
      }

      .lien{
        width: 50%;
      }
      
      .pageClassic{
          width: 703px;
      }

      .separation{
        width: 40%;
      }

      .connectionPage>img{
        width: 118px;
      }

      .RS img{
        margin: 30px;
      }

      .separation{
        margin-bottom: 0px;
      }
}

</style>
