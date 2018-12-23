import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Profiles } from '../../api/profiles/profiles.js'
import './profiles-directory.html'

Template.profilesDirectory.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict()
  Meteor.subscribe('listOfProfiles')
})

Template.profilesDirectory.helpers({
  listOfProfiles() {
    return Profiles.find({})
  }
})

Template.profilesDirectory.events({
  'click .add-to-team'() {
    console.log(this)
  }
})
