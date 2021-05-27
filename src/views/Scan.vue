<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar color="secondary">
        <div class="toolbar">
          <picture>
            <img class="header-icon" src="@/assets/icons/iconmonstr-leaf-1-240.png" alt="">
          </picture>
          <ion-title class="header-title">SCAN</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
    
    <ion-content color="secondary" :fullscreen="true">    
      <div id="container" >
        <p>¡Escanéa los ingredientes del producto deseado!</p>
        <icon class="search-icon" />
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import request from "../api/request"
import icon from '../components/iconScan.vue'
import { camera } from 'ionicons/icons';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    icon
  },
  setup() {
    return { camera }
  },
  computed: {
    consulta() {
      return request.checkList(['soy'])
    },
  },
  methods: {
    takePhoto: function() {
      alert('Take a photo')
    }
  }
});
</script>

<style>
@import '../styles/home.css';
</style>