import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './profile.html'
import { Profiles } from '../../api/profiles/profiles.js'

Template.profile.onCreated(function profileOnCreated() {
  this.state = new ReactiveDict()
  Meteor.subscribe('profiles')
})

Template.profile.helpers({
  profiles() {
    return Profiles.find({})
  }
})
