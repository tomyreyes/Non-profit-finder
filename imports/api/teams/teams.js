import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
SimpleSchema.extendOptions(['autoform'])
export const Teams = new Mongo.Collection('teams')

Teams.allow({
  insert: function(userId, doc) {
    return !!userId
  },
  update: function(userId, doc) {
    return !!userId
  }
})

const TeamsSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      type: 'hidden'
    }
  },
  adminId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      type: 'hidden'
    }
  },
  owner: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  name: {
    type: String,
    max: 50
  },
  description: {
    type: String,
    max: 200
  },
  members: {
    type: Array,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  'members.$': {
    type: Object
  },
  'members.$.name': String,
  'members.$.userId': String,
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: 'hidden'
    }
  }
})

Teams.attachSchema(TeamsSchema)
