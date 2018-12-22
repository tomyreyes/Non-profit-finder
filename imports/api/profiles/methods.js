import { Meteor } from 'meteor/meteor'
import { Profiles } from './profiles.js'

Meteor.methods({
  'profiles.insertUserId'(userId) {
    Profiles.insert({
      userId
    })
  }
})
