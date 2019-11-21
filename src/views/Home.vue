<template>
  <div>
    <v-container>
      <v-layout wrap>
        <v-flex xs12 class="text-center blue">
          <h2>12</h2>
        </v-flex>

        <v-flex xs6 class="text-center error">
          <h2>6</h2>
        </v-flex>

        <v-flex xs6 class="text-center warning">
          <h2>6</h2>
        </v-flex>
      </v-layout>
      <!-- justify me permite centrarlo de forma horizontal y align lo centra de forma vertical -->
      <v-layout mt-5 
      justify-center 
      align-center 
      class="secondary" style="height: 300px">
        <v-flex class="info white--text" xs3>
          <h2 class="display-1 text-center">centrado</h2>
        </v-flex>
        <v-flex class="error" xs3>
          <h2>centrado</h2>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
