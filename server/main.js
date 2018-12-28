import { Meteor } from 'meteor/meteor'
import '../imports/startup/both'
import '../imports/startup/server'
import '../imports/api/profiles/publications.js'
import '../imports/api/teams/publications.js'
import { Teams } from '../imports/api/teams/teams.js'
import { Profiles } from '../imports/api/profiles/profiles.js'

Meteor.startup(function() {
  const adminId = Random.id()
  if (Teams.find().count() === 0) {
    ;[
      {
        name: 'Red Cross',
        description:
          'Founded to protect human life and health, to ensure respect for all human beings, and to prevent and alleviate human suffering',
        adminId: adminId
      }
    ].forEach(function(team) {
      Teams.insert(team)
    })
  }

  if (Profiles.find().count() === 0) {
    ;[
      {
        name: 'Henry Dunant',
        email: 'WeCare@redcross.ca',
        bio: 'I am a co-founder of the Red Cross',
        userId: adminId
      }
    ].forEach(function(profile) {
      Profiles.insert(profile)
    })
  }
})
