import { Template } from 'meteor/templating'
import { Profiles } from '../../api/profiles/profiles.js'
import { Teams } from '../../api/teams/teams.js'
import './profiles-layout.html'
import '../pages/profile.js'
import '../partials/navigation.js'
import '../pages/not-found.js'
import '../pages/profiles-directory.js'
import '../pages/teams-directory.js'

Template.teamsDirectory.onCreated(function teamsOnCreated() {
  this.autorun(() => {
    this.subscribe('userProfile')
  })
})

Template.profilesLayout.helpers({
  userProfile() {
    return Profiles.find({})
  }
})
