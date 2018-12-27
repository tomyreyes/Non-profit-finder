import '../partials/navigation.js'

import '../pages/profiles-directory.js'
import '../pages/teams-directory.js'
import { Profiles } from '../../api/profiles/profiles.js'
import './app-body.html'
import '../pages/login.js'
import '../pages/home.js'
import '../pages/profile.js'
import '../pages/not-found.js'

Template.appBody.onCreated(function profileOnCreated() {
  //if I change to arrow there is no longer a this.
  this.subscribe('userProfile')
})

Template.appBody.helpers({
  userProfile() {
    return Profiles.find()
  }
})
