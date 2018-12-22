import { Meteor } from 'meteor/meteor'
import '../../api/profiles/methods.js'
import '../../api/teams/methods.js'

Accounts.onCreateUser((options, user) => {
  user._id = Random.id()
  Meteor.call('profiles.insertUserId', user._id)
  return user
})
