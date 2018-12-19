import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

export const Profiles = new Mongo.Collection('profiles')

const ProfilesSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  name: {
    type: String,
    max: 50,
    optional: true
  },
  email: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },
  bio: {
    type: String,
    max: 200,
    optional: true
  }
})

Profiles.attachSchema(ProfilesSchema)

Profiles.helpers({
  editableBy(userId) {
    if (!this.userId) {
      return true
    }
    return this.userId === userId
  }
})

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

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('profiles', function profilesPublication() {
    return Profiles.find()
  })
}
