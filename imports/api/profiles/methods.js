import { Meteor } from 'meteor/meteor'
import { Profiles } from './profiles.js'

Meteor.methods({
  'profiles.insertUserId'(userId) {
    Profiles.insert({
      userId
    })
  },
  'profiles.editProfile'(data) {
    Profiles.update(
      {
        userId: data.userId
      },
      {
        $set: {
          name: data.name,
          email: data.email,
          bio: data.bio
        }
      }
    )
  }
})
