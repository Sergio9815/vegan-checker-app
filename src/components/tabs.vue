<template>
  <ion-page>
    <ion-content>
        <div class="container-bar" >
              <ion-tabs >
              <ion-tab-bar color="dark" slot="bottom" >

                <ion-tab-button tab="home" href="/tabs/home">
                  <ion-icon part="icon" :icon="home"/>
                  <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="scan" href="/tabs/scan">
                  <ion-icon part="icon" :icon="qrScanner"/>
                  <ion-label>Scan</ion-label>
                </ion-tab-button>

                <!-- <ion-tab-button tab="settings" href="/tabs/settings">
                  <ion-icon part="icon" :icon="settings"/>
                  <ion-label>Settings</ion-label>
                </ion-tab-button> -->

              </ion-tab-bar>
            </ion-tabs>
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabButton, IonTabs, IonTabBar   } from '@ionic/vue';
import { home, settings, qrScanner } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonTabButton,
    IonTabs,
    IonTabBar
  },
  setup() {
    return { qrScanner, home, settings }
  }
});
</script>

<style scoped>


</style>