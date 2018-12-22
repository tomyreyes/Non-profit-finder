import { Meteor } from 'meteor/meteor'
import { Teams } from './teams.js'
import { Profiles } from '../profiles/profiles.js'

Meteor.methods({
  'teams.createTeam'(data) {
    Teams.insert({
      adminId: data.adminId,
      owner: data.owner,
      name: data.name,
      description: data.description
    })
    Profiles.update(
      {
        userId: data.userId
      },
      {
        $set: {
          inTeam: true
        }
      }
    )
  },
  'teams.editTeam'(data) {
    Teams.update(
      {
        adminId: data.adminId
      },
      { $set: { name: data.name, description: data.description } }
    )
  }
})
