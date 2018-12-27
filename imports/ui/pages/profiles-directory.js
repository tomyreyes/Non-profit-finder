import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Profiles } from '../../api/profiles/profiles.js'
import './profiles-directory.html'

Template.profilesDirectory.helpers({
  listOfProfiles() {
    return Profiles.find({})
  },
  memberOfTeam() {
    if (this.inTeam) {
      return true
    }
    return false
  },
  isUser() {
    //findOne, same strategy
    return this.userId === Meteor.userId()
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
