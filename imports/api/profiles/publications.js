import { Meteor } from 'meteor/meteor'
import { Profiles } from './profiles.js'

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('userProfile', function profilesPublication() {
    return Profiles.find(
      { userId: this.userId },
      {
        fields: {
          name: 1,
          email: 1,
          bio: 1,
          userId: 1
        }
      }
    )
  })
  Meteor.publish('publicProfile', function profilesPublication() {
    return Profiles.find(
      {},
      {
        fields: {
          name: 1,
          email: 1,
          bio: 1,
          userId: 1
        }
      }
    )
  })
}
