import { Meteor } from 'meteor/meteor'
import './profiles.js'

Meteor.methods({
  'profiles.insertUserId'(userId) {
    Profiles.insert({
      userId
    })
  },
  'profiles.editInfo'(name, email, bio) {
    const profile = Profiles.findOne(this.userId) //test this
    if (!profile.editableBy(this.userId)) {
      throw new Meteor.Error(
        'todos.setCheckedStatus.accessDenied',
        'Cannot edit checked status in a private list that is not yours'
      )
    }

    Profiles.insert({
      name,
      email,
      bio
    })
  }
})
