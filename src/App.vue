<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style scoped>

/* --- --- -- LOCAL FONTS -- --- --- */

@font-face {
  font-family: 'Odibee Sans';
  src: local('Odibee Sans'),
    url('./assets/fonts/OdibeeSans-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto'),
    url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
}

</style>