<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Departures Configurator</v-toolbar-title>
      <v-spacer />
      <template v-if="user === null">
        <router-link
          :to="{name: 'Auth'}"
        >
          <v-btn
            text
          >
            <span class="mr-2">Sign In</span>
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </router-link>
      </template>
      <template v-else>
        Welcome, {{ user.displayName }}
        <v-btn
          target="_blank"
          text
          @click="signOut"
        >
          <span class="mr-2">Log Out</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',

  components: {
  },
  data: () => ({
    user: null
  }),
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
  },
  methods: {
    signOut (e) {
      e.stopPropagation()
      firebase.auth().signOut()
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>
