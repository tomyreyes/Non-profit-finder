import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Profiles } from '../../api/profiles/profiles.js'
import './profile.html'

let publicProfileId
Template.profile.onCreated(function profileOnCreated() {
  //if I change to arrow there is no longer a this.
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
  },
  isEditing() {
    const instance = Template.instance()
    if (instance.state.get('isEditing')) {
      return true
    }
  }
})

Template.profile.events({
  'click .edit-profile'(event, instance) {
    instance.state.set('isEditing', true)
  }
})
