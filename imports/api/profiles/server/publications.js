import { Meteor } from 'meteor/meteor'
import { Profiles } from '../profiles.js'

Meteor.publish('profiles', () => {
  return Profiles.find()
})
