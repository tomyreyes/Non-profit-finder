import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Profiles } from '../../api/profiles/profiles.js'
import { Teams } from '../../api/teams/teams.js'
import './teams-directory.html'
import './create-team.html'

Template.createTeam.onCreated(function teamOnCreated() {
  this.autorun(() => {
    this.state = new ReactiveDict()
    this.subscribe('profiles')
    this.subscribe('teams')
  })
})

Template.createTeam.helpers({
  teamsCollection() {
    return Teams
  },
  notInTeam() {
    const profile = Profiles.findOne({ userId: Meteor.userId() })
    if (profile && profile.inTeam) {
      return false
    } else return true
  },
  userTeam() {
    let userTeam = Teams.findOne({ adminId: Meteor.userId() })
    return userTeam
  },
  isEditing() {
    const instance = Template.instance()
    if (instance.state.get('isEditing')) {
      return true
    }
  }
})

Template.createTeam.events({
  'submit .create-team'(event) {
    event.preventDefault()
    const name = event.target.name.value
    const description = event.target.description.value
    const adminId = this.userId
    const owner = this.name
    const members = {
      name: this.name,
      userId: this.userId
    }

    Meteor.call('teams.createTeam', {
      adminId,
      owner,
      name,
      description,
      members
    })
  },
  'submit .edit-team'(event) {
    event.preventDefault()
    const name = event.target.name.value || this.name
    const description = event.target.description.value || this.description
    const adminId = Meteor.userId()
    if (!name && !description) {
      return alert('Make sure to enter new information!')
    }
    Meteor.call('teams.editTeam', {
      adminId,
      name,
      description
    })
  },
  'click .edit-team-btn'(event, instance) {
    instance.state.set('isEditing', !instance.state.get('isEditing'))
  }
})
