import { Template } from 'meteor/templating'
import './navigation.html'

Template.navigation.events({
  'click .logout'() {
    console.log('hi')
    AccountsTemplates.logout()
  }
})

Template.navigation.helpers({
  userProfileLink() {
    return Meteor.userId()
  },
  userLoggedIn() {
    return Meteor.userId()
  }
})

Template.navigation.events({
  'click .myProfileLink'() {
    FlowRouter.go(`/profiles/${Meteor.userId()}`)
  }
})
