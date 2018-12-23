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
    this.subscribe('profilesCollection')
    this.subscribe('userProfile')
    this.subscribe('publicProfile', publicProfileId)
  })
})

Template.profile.helpers({
  profilesCollection() {
    return Profiles
  },
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
    if (!this.name || !this.email || !this.bio) {
      return true
    }
  },
  updateProfile() {
    return this._userId
  },
  isEditing() {
    const instance = Template.instance()
    if (instance.state.get('isEditing')) {
      return true
    }
  }
})

Template.profile.events({
  'click .edit-profile-btn'(event, instance) {
    instance.state.set('isEditing', !instance.state.get('isEditing'))
  },
  'submit .edit-profile'(event) {
    event.preventDefault()
    const name = event.target.name.value || this.name
    const email = event.target.email.value || this.email
    const bio = event.target.bio.value || this.bio
    const userId = this.userId
    Meteor.call('profiles.editProfile', {
      name,
      email,
      bio,
      userId
    })
  }
})
