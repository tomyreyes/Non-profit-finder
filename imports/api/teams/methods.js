import { Meteor } from 'meteor/meteor'
import { Teams } from './teams.js'
import { Profiles } from '../profiles/profiles.js'

Meteor.methods({
  'teams.createTeam'(data) {
    Teams.insert({
      adminId: this.userId,
      owner: data.owner,
      name: data.name,
      description: data.description
    })
    Profiles.update(
      {
        userId: this.userId
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
  },
  'teams.addMember'(data) {
    Teams.update(
      {
        adminId: this.userId
      },
      {
        $push: {
          members: {
            name: data.member.name,
            userId: data.member.userId
          }
        }
      }
    ),
      Profiles.update(
        {
          userId: data.member.userId
        },
        {
          $set: { inTeam: true }
        }
      )
  }
})
