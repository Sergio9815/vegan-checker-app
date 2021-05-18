<template>
  <ion-app>
    <ion-router-outlet />
    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" href="/views/home">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="scan" href="/views/scan">
          <ion-icon :icon="qrScanner"></ion-icon>
          <ion-label>Scan</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/views/settings">
          <ion-icon :icon="cog"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet,  IonTabButton, IonTabs, IonTabBar   } from '@ionic/vue';
import { home, cog, qrScanner } from 'ionicons/icons';
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
    return { qrScanner, home, cog }
  }
});
</script>