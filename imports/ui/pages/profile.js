import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './profile.html'
import { Profiles } from '../../api/profiles/profiles.js'

let publicProfileId
Template.profile.onCreated(function profileOnCreated() {
  this.autorun(() => {
    this.state = new ReactiveDict()
    publicProfileId = FlowRouter.getParam('id')
    this.subscribe('userProfile')
    this.subscribe('publicProfile', publicProfileId)
  })
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
