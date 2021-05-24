<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar color="secondary">
        <div class="toolbar">
          <picture>
            <img class="header-icon" src="@/assets/icons/iconmonstr-leaf-1-240.png" alt="">
          </picture>
          <ion-title>SEARCH</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
    
    <ion-content color="secondary" :fullscreen="true">    
      <div id="container" >
        <ion-searchbar animated></ion-searchbar>
        <p>¡Identifica productos fácilmente!</p>
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
@import '../styles/home.css';
</style>