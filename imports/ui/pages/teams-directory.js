import { Template } from 'meteor/templating'
import { Profiles } from '../../api/profiles/profiles.js'
import { Teams } from '../../api/teams/teams.js'
import './teams-directory.html'
import './create-team.js'

Template.teamsDirectory.onCreated(function teamsOnCreated() {
  this.subscribe('teams')
  this.subscribe('userProfile')
})

Template.teamsDirectory.helpers({
  teamsList() {
    return Teams.find({})
  },
  userProfile() {
    return Profiles.find()
  }
})
