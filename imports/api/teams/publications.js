import { Meteor } from 'meteor/meteor'
import { Teams } from './teams.js'

if (Meteor.isServer) {
  Meteor.publish('teams', function userTeamPublication() {
    return Teams.find(
      {},
      {
        fields: {
          owner: 1,
          name: 1,
          description: 1,
          members: 1,
          adminId: 1
        }
      }
    )
  })
}
