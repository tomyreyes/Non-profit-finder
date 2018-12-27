import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Profiles } from '../../api/profiles/profiles.js'
import './profile.html'
import { Teams } from '../../api/teams/teams.js'

let publicProfileId
Template.profile.onCreated(function profileOnCreated() {
  this.autorun(() => {
    this.state = new ReactiveDict()
    publicProfileId = FlowRouter.getParam('id')
    this.subscribe('profiles')
    this.subscribe('teams')
  })
})

Template.profile.helpers({
  userProfile() {
    return Profiles.findOne({ userId: Meteor.userId() })
  },
  publicProfile() {
    return Profiles.findOne({ userId: publicProfileId })
  },
  isOwner() {
    publicProfileId = FlowRouter.getParam('id')
    return Meteor.userId() === publicProfileId
  },

  ownerMissingInfo() {
    const profile = Profiles.findOne({ userId: Meteor.userId() })
    if (!profile.name || !profile.email || !profile.bio) {
      return true
    }
  },
  updateProfile() {
    const profile = Profiles.findOne({ userId: Meteor.userId() })
    return profile._userId
  },
  isEditing() {
    const instance = Template.instance()
    if (instance.state.get('isEditing')) {
      return true
    }
  },
  ifUserIsInTeam() {
    const admin = Teams.findOne({ adminId: Meteor.userId() })
    const userteam = Teams.findOne({
      members: { $elemMatch: { userId: Meteor.userId() } }
    })

    if (admin || userteam) {
      return admin || userteam
    } else false
  },

  ifPublicIsInTeam() {
    const admin = Teams.findOne({ adminId: publicProfileId })
    const userteam = Teams.findOne({
      members: { $elemMatch: { userId: publicProfileId } }
    })

    if (admin || userteam) {
      return admin || userteam
    } else false
  }
})

Template.profile.events({
  'click .edit-profile-btn'(event, instance) {
    instance.state.set('isEditing', !instance.state.get('isEditing'))
  },
  'submit .edit-profile'(event) {
    event.preventDefault()
    console.log(this.name)
    const name = event.target.name.value || this.name
    const email = event.target.email.value || this.email
    const bio = event.target.bio.value || this.bio
    const userId = Meteor.userId()
    Meteor.call('profiles.editProfile', {
      name,
      email,
      bio,
      userId
    })
  }
})
