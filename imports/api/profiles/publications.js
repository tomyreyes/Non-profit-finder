import { Meteor } from 'meteor/meteor'
import { Profiles } from './profiles.js'

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('profiles', function profilesPublication() {
    return Profiles.find({ userId: this.userId })
  })
}
