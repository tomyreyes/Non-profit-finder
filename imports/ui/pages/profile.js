import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './profile.html'

Template.profile.onCreated(function bodyOnCreated() {
  const profileId = FlowRouter.getParam('id')
  //this is inplace of data context.
})

Template.profile.helpers({
  isOwner() {
    return this.profileId === Meteor.userId()
  },
  profile() {
    const profile = Profiles.findOne(profileId)
    //I need to get based on profileId
    return profile
  }
})
