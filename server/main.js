import { Meteor } from 'meteor/meteor'
import '../imports/startup/both'
import '../imports/startup/server'
import '../imports/api/profiles/publications.js'
import '../imports/api/teams/publications.js'

Meteor.startup(() => {
  // code to run on server at startup
})
