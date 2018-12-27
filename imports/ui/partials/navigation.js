import { Template } from 'meteor/templating'
import './navigation.html'

Template.navigation.events({
  'click .logout'() {
    AccountsTemplates.logout()
  }
})

Template.navigation.helpers({
  userProfileLink() {
    return Meteor.userId()
  }
})

Template.navigation.events({
  'click .myProfileLink'() {
    console.log('het')
    FlowRouter.go(`/profiles/${Meteor.userId()}`)
  }
})
