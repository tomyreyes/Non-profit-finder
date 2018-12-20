import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './profile.html'
import { Profiles } from '../../api/profiles/profiles.js'

let publicProfileId
Template.profile.onCreated(function profileOnCreated() {
  this.state = new ReactiveDict()
  publicProfileId = FlowRouter.getParam('id')
  Meteor.subscribe('userProfile')
  Meteor.subscribe('publicProfile')
})

Template.profile.helpers({
  userProfile() {
    return Profiles.find({})
  },
  publicProfile() {
    return Profiles.find({ userId: publicProfileId })
  },
  isOwner() {
    return this.userId === Meteor.userId() && this.userId === publicProfileId
  },
  ownerMissingInfo() {
    const profile = Profiles.find({})
    if (!profile.id || !profile.email || !profile.bio) {
      return true
    }
    return false
  }
})

//get profile that matches ????
