<template>
    <div>
      <v-toolbar
      color="deep-purple accent-4" dark small dense>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title>Mi App</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
          <v-btn text :to="{name: 'botones'}"><v-icon>mdi-paperclip</v-icon> Botones</v-btn>
          <v-btn text :to="{name: 'cards'}"><v-icon>mdi-heart</v-icon> Cards</v-btn>
          <v-btn text :to="{name: 'dialogs'}"><v-icon>mdi-android</v-icon> Modals</v-btn>
          <v-btn text :to="{name: 'tareas'}" ><v-icon>mdi-note</v-icon> Tareas</v-btn>
          <v-btn text :to="{name: 'about'}">About</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" temporary>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Bienvenido
          </v-list-item-title>
          <v-list-item-subtitle>
            a mi App con Vue
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.ruta"
          color="deep-purple accent-4"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
      
    </div>
</template>

<script>
export default {
    name: 'Toolbar',
    data(){
        return {
            drawer: false,
            items: [
                { title: 'Inicio', icon: 'mdi-view-dashboard', ruta: '/' },
                { title: 'Botones', icon: 'mdi-paperclip', ruta: '/botones' },
                { title: 'Cards', icon: 'mdi-heart', ruta: '/cards' },
                { title: 'Dialogos', icon: 'mdi-android', ruta: '/dialogs' },
                { title: 'Tareas', icon: 'mdi-note', ruta: '/tareas' },
                { title: 'About', icon: 'mdi-help-box', ruta: '/about' },
                ],
            right: null,
        }
    }
}
</script>