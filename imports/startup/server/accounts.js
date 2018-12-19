import { Meteor } from 'meteor/meteor'
import '../../api/profiles.js'

Accounts.onCreateUser((options, user) => {
  user._id = Random.id()
  Meteor.call('profiles.insertUserId', user._id)
  return user
})
