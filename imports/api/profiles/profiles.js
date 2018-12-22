import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
SimpleSchema.extendOptions(['autoform'])

export const Profiles = new Mongo.Collection('profiles')

Profiles.allow({
  insert: function(userId, doc) {
    return !!userId
  },
  update: function(userId, doc) {
    return !!userId
  }
})

const ProfilesSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      type: 'hidden'
    }
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      type: 'hidden'
    }
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
  },
  inTeam: {
    type: Boolean,
    defaultValue: false,
    autoform: {
      type: 'hidden'
    }
  }
})

Profiles.attachSchema(ProfilesSchema)
