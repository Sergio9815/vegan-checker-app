<template>
  <ion-app>
    <ion-router-outlet />
    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="schedule" href="/views/home">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="speakers" href="/views/scan">
          <ion-icon :icon="aperture"></ion-icon>
          <ion-label>Scan</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet,  IonTabButton, IonTabs, IonTabBar   } from '@ionic/vue';
import { aperture, home } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonTabButton,
    IonTabs,
    IonTabBar
  },
  setup() {
    return { aperture, home }
  }
});
</script>