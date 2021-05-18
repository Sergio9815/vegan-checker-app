<template>
  <ion-page>
    <ion-header >
      <ion-toolbar color="secondary">
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content color="secondary" :fullscreen="true">    
      <div id="container">
        <strong>Search ingredients</strong>
        <ion-searchbar animated></ion-searchbar>
        <p>La soya es vegana: {{ consulta }}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/vue';
// import { arrowBack } from 'ionicons/icons';
import { defineComponent } from 'vue';
import request from "../api/request"

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar
  },
  computed: {
    consulta() {
      return request.checkList(['soy'])
    },
  },

});
</script>

<style>
#container {
  text-align: center;
  position: absolute;
  top: 52%;
  margin: auto;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  width: 100%;
  height: 83%;
  background-color: #fff;
  color: var(--ion-color-secondary);
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-title{
  color: var(--ion-color-success);
  font-weight: bold;
}

</style>