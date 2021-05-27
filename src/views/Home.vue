<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar color="secondary">
        <div class="toolbar">
          <picture>
            <img class="header-icon" src="@/assets/icons/iconmonstr-leaf-1-240.png" alt="">
          </picture>
          <ion-title class="header-title">{{title}}</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
    
    <ion-content color="secondary" :fullscreen="true">    
      <div id="container" >
        <ion-searchbar v-model="value" placeholder="Buscar productos, ingredientes y más..." animated></ion-searchbar>
        <p>¡Identifica productos fácilmente!</p>
        <icon class="search-icon" />
        <button @click="search()" class="btn-search">SEARCH PRODUCT</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/vue';
import icon from '../components/icon.vue'
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
    IonSearchbar,
    icon
  },

  setup() {
    return {
      title: 'SEARCH',
      value: '',
    }
  },

  methods: {
    search: function() {
      alert(request.checkList([this.value]))
    }
  }

});
</script>

<style>
@import '../styles/home.css';
</style>