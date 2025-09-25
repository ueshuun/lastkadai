<template>
  <v-app>
   <v-app-bar
  app
  color="#43AEFF"
>

      <div class="d-flex align-center">
       <v-img
  src="@/assets/logo3.png"
  alt="Trip.jp"
  max-width="100"
  max-height="60"
  class="mr-2"
  contain
/>


        <h1>Trip.jp</h1>

      </div>

      <v-spacer></v-spacer>
       
        <v-btn text to="/" tag="router-link" color="white">
        <span>HOME</span>
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>
    
      <v-btn text to="/Like" tag="router-link" color="white">
        <span>Like</span>
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>

<style>
.d-flex h1{
  color: white;
}</style>

