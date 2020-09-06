<template>
  <v-container>
    <section id="firebaseui-auth-container" />
  </v-container>
</template>

<script>
import firebase from 'firebase'

import 'firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'

export default {
  mounted () {
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    var uiConfig = {
      signInSuccessUrl: '/list',
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      // Required to enable one-tap sign-up credential helper.
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style>

</style>
