import { Teams } from '../../api/teams/teams.js'
import { Profiles } from '../../api/profiles/profiles.js'
Meteor.startup(function() {
  if (Teams.find().count() === 0) {
    ;[
      {
        _id: '1234567',
        name: 'Red Cross',
        description:
          'Founded to protect human life and health, to ensure respect for all human beings, and to prevent and alleviate human suffering',
        adminId: '123456'
      }
    ].forEach(function(team) {
      Teams.insert(team)
    })
  }

  if (Profiles.find().count() === 0) {
    ;[
      {
        _id: '1234568',
        name: 'Henry Dunant',
        bio: 'I am a co-founder of the Red Cross',
        userId: '123456'
      }
    ].forEach(function(profile) {
      Profiles.insert(profile)
    })
  }
})
