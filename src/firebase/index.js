import Firebase from 'firebase/app'
import credentials from './credentials'
import 'firebase/auth'

export const FirebaseApp = Firebase.initializeApp(credentials.config)

export const routerAuthGuard = (to, from, next) => {
  const fn = () => {
    if (Firebase.auth().currentUser) {
      next()
    } else {
      next({ name: 'Auth' })
    }
  }
  Firebase.auth().onAuthStateChanged((user) => {
    return fn()
  })
}
