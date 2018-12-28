import { Profiles } from '../../api/profiles/profiles.js'
import '../partials/navigation.js'
import '../pages/profiles-directory.js'
import '../pages/directory.js'
import './app-body.html'
import '../pages/login.js'
import '../pages/signup.js'
import '../pages/home.js'
import '../pages/profile.js'
import '../pages/not-found.js'

Template.appBody.onCreated(function profileOnCreated() {
  this.subscribe('userProfile')
})

Template.appBody.helpers({
  userProfile() {
    return Profiles.find()
  }
})
