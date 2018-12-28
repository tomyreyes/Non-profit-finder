import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Profiles } from '../../api/profiles/profiles.js'
import './profiles-directory.html'
import { Teams } from '../../api/teams/teams.js'

Template.profilesDirectory.helpers({
  listOfProfiles() {
    const profiles = Profiles.find({}).fetch()
    const list = profiles.filter(profile => profile.userId !== Meteor.userId())
    console.log(list)
    return list
  },
  userOwnsTeam() {
    const team = Teams.findOne({ adminId: Meteor.userId() })

    if (team) {
      return true
    }
  }
})

Template.profilesDirectory.events({
  'click .add-to-team'(event) {
    event.preventDefault()

    const name = event.target.name
    const userId = event.target.id
    const member = { name, userId }
    Meteor.call('teams.addMember', { member })
  }
})
