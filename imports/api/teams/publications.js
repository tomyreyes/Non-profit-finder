import { Meteor } from 'meteor/meteor'
import { Teams } from './teams.js'

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('teams', function teamsPublication() {
    return Teams.find(
      {},
      {
        fields: {
          owner: 1,
          name: 1,
          description: 1,
          members: 1
        }
      }
    )
  }),
    Meteor.publish('userTeam', function teamsPublication() {
      return Teams.find(
        { adminId: this.userId },
        {
          fields: {
            owner: 1,
            name: 1,
            description: 1,
            members: 1
          }
        }
      )
    })
}
