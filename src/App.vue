<template>
  <v-app toolbar footer dark>
      <v-navigation-drawer
              temporary
              v-model="drawer"
              overflow
              absolute
              dark
      >
          <v-list>
              <v-divider></v-divider>
              <v-list-tile
                      v-for="item in items"
                      :key="item.title"
                      :to="item.link"
              >
                  <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>
    <v-toolbar>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">cEvents</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
      <v-toolbar-items  class="hidden-xs-only" >
        <v-btn
                v-for="item in items"
                :key="item.title"
                flat
                :to="item.link">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
        <v-container fluid>
        <router-view></router-view>
        </v-container>
    </main>
  </v-app>
</template>

<script>
    /* eslint-disable indent,quotes */

    export default {
      components: {},
        data () {
          return {
              drawer: null,
              items: [
                  {title: 'Cliente', icon: 'account_box', link: '/clients'},
                  {title: 'Usuários', icon: 'supervisor_account', link: '/posts'},
                {title: 'Eventos', icon: 'event', link: '/events'},
                {title: 'Opções', icon: 'settings'}
              ],
              right: null
          }
      }
    }
</script>