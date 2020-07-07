<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Main Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item button @click=" goTo('about') ">
          <ion-icon name="information-circle-outline" size="large" slot="start"></ion-icon>

          <ion-label>
            <h1>Click Here</h1>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {};
  },

  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped>
</style>
