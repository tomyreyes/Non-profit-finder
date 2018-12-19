import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
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

Meteor.methods({
  'profiles.insertUserId'(userId) {
    Profiles.insert({
      userId
    })
  },
  'profiles.editInfo'(name, email, bio) {
    Profiles.insert({
      name,
      email,
      bio
    })
  }
})
//methods for Profiles here.