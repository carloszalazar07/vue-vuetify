<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Toolbar
  },

  data: () => ({
    
  }),
};
</script>
