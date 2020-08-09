<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Departures Configurator</v-toolbar-title>
      <v-spacer />

      <v-btn
        v-if="!$auth.isAuthenticated"
        target="_blank"
        text
        @click="$auth.loginWithRedirect()"
      >
        <span class="mr-2">Sign In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn
        v-else
        target="_blank"
        text
        @click="$auth.logout({returnTo: 'http://localhost:8080'})"
      >
        <span class="mr-2">Log Out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
