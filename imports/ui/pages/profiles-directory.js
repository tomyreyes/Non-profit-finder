import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Profiles } from '../../api/profiles/profiles.js'
import './profiles-directory.html'

Template.profilesDirectory.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict()
  Meteor.subscribe('listOfProfiles')
  Meteor.subscribe('userProfile')
})

Template.profilesDirectory.helpers({
  listOfProfiles() {
    return Profiles.find({})
  },
  memberOfTeam() {
    if (this.inTeam) {
      return true
    }
    return false
  }
})

Template.profilesDirectory.events({
  'click .add-to-team'(event) {
    event.preventDefault()
    const name = this.name
    const userId = this.userId
    const member = { name, userId }
    Meteor.call('teams.addMember', { member })
  }
})
