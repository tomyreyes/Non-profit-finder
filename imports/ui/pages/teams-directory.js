import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Teams } from '../../api/teams/teams.js'
import './teams-directory.html'
import { Profiles } from '../../api/profiles/profiles.js'
import './create-team.js'

Template.teamsDirectory.onCreated(function teamsOnCreated() {
  this.autorun(() => {
    this.state = new ReactiveDict()
    this.subscribe('teams')
    this.subscribe('userProfile')
  })
})

Template.teamsDirectory.helpers({
  teamsCollection() {
    return Teams
  },
  teamsList() {
    return Teams.find({})
  },
  userProfile() {
    return Profiles.find({})
  }
})
