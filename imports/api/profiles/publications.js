import { Meteor } from 'meteor/meteor'

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('profiles', function profilesPublication() {
    return Profiles.find()
  })
}
