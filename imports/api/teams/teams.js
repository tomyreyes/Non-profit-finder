import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const Teams = new Mongo.Collection('teams')

const TeamsSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  adminId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  name: {
    type: String,
    max: 50
  },
  description: {
    type: String,
    max: 200
  },
  members: Array
})

Teams.attachSchema(TeamsSchema)
