import { Template } from 'meteor/templating'
import { Profiles } from '../../api/profiles/profiles.js'
import { Teams } from '../../api/teams/teams.js'
import './directory.html'
import '../components/create-team.js'
import '../components/profiles-directory.js'

Template.directory.onCreated(function teamsOnCreated() {
  this.subscribe('teams')
  this.subscribe('userProfile')
})

Template.directory.helpers({
  teamsList() {
    console.log('hi')
    return Teams.find({})
  },
  userProfile() {
    return Profiles.find()
  }
})
