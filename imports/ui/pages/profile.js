import { Template } from 'meteor/templating'
import './profile.html'

Template.profile.helpers({
  isOwner() {
    return this.owner === Meteor.userId()
  }
})
